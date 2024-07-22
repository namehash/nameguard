import { splitGraphemes as unicodeStandardGraphemeSplit } from "text-segmentation";
import { splitCharacters, isEmoji } from "./utils";

const HANGUL_JAMO = new Set([
  "\ud7b3",
  "\u11df",
  "\u317a",
  "\u3168",
  "\u3184",
  "\ud7f3",
  "\u3156",
  "\u1176",
  "\u315c",
  "\ud7dc",
  "\ud7e0",
  "\u1113",
  "\u1172",
  "\u11c9",
  "\u11f0",
  "\u11e0",
  "\u316c",
  "\u116f",
  "\u11cc",
  "\u1138",
  "\u11a1",
  "\u1119",
  "\u11e8",
  "\u116d",
  "\ud7fb",
  "\u3155",
  "\u313f",
  "\u3178",
  "\u11b8",
  "\ud7e1",
  "\u11db",
  "\ud7e9",
  "\u118b",
  "\u11fd",
  "\u317b",
  "\u115a",
  "\u112f",
  "\u11a9",
  "\u1143",
  "\u3182",
  "\ud7c7",
  "\ud7cd",
  "\u1185",
  "\u118a",
  "\u1120",
  "\u119e",
  "\u1155",
  "\ua97d",
  "\u11bc",
  "\u11a3",
  "\u114f",
  "\u1114",
  "\u3133",
  "\ud7e2",
  "\ud7e4",
  "\u3135",
  "\u11c2",
  "\ud7d5",
  "\u11e2",
  "\ud7fa",
  "\u116c",
  "\u114a",
  "\u3163",
  "\u3180",
  "\u11f4",
  "\u3145",
  "\u11af",
  "\u11fc",
  "\u1184",
  "\u115d",
  "\u1188",
  "\u11e5",
  "\u114e",
  "\u11fe",
  "\u314d",
  "\u315a",
  "\u1195",
  "\u116b",
  "\u113c",
  "\ua976",
  "\ud7de",
  "\u3154",
  "\ud7b7",
  "\ud7e7",
  "\u1145",
  "\ud7d6",
  "\u11d4",
  "\u11dc",
  "\u1140",
  "\u1160",
  "\u11a5",
  "\u110e",
  "\u11ee",
  "\u11e1",
  "\ua977",
  "\u113a",
  "\u11c8",
  "\u1170",
  "\u1157",
  "\u11f7",
  "\u1131",
  "\u11b3",
  "\ud7e6",
  "\u1122",
  "\u1153",
  "\u11bd",
  "\u1126",
  "\u11dd",
  "\u111b",
  "\u1161",
  "\u314f",
  "\ua97e",
  "\ud7b0",
  "\u1148",
  "\u1190",
  "\u11f5",
  "\ud7ec",
  "\u3176",
  "\ud7d9",
  "\ua972",
  "\u1146",
  "\u11b1",
  "\u3159",
  "\u118d",
  "\ud7e5",
  "\ua97c",
  "\ua973",
  "\u317e",
  "\u3183",
  "\u11c5",
  "\u3138",
  "\u110c",
  "\ud7ca",
  "\u1178",
  "\u11b6",
  "\u113f",
  "\u11be",
  "\u1144",
  "\u1106",
  "\u1187",
  "\u11ff",
  "\ua975",
  "\u111d",
  "\ud7f1",
  "\u1135",
  "\u3148",
  "\ud7b4",
  "\u3167",
  "\u1163",
  "\u110f",
  "\u313d",
  "\u3153",
  "\u11ad",
  "\u1197",
  "\u1141",
  "\u11c7",
  "\u3169",
  "\u3147",
  "\ud7fd",
  "\u3185",
  "\ud7bd",
  "\u314a",
  "\u11cb",
  "\u313a",
  "\ua970",
  "\u1147",
  "\ud7bf",
  "\u11ca",
  "\u313e",
  "\u3177",
  "\u3141",
  "\u11ec",
  "\ud7d0",
  "\ud7d3",
  "\u3144",
  "\u117b",
  "\u314e",
  "\u314c",
  "\u1118",
  "\ud7bc",
  "\ud7b5",
  "\ud7c4",
  "\u11f3",
  "\u316b",
  "\ua96b",
  "\ud7ef",
  "\u1108",
  "\u110d",
  "\u11cf",
  "\u316d",
  "\u11ab",
  "\u11e3",
  "\u1150",
  "\u1116",
  "\u1179",
  "\ud7c6",
  "\u1165",
  "\u1164",
  "\u3164",
  "\u316e",
  "\u317d",
  "\u1174",
  "\u1181",
  "\u11d8",
  "\ua971",
  "\u317f",
  "\ud7b6",
  "\ud7df",
  "\ua974",
  "\u316a",
  "\ua968",
  "\u3173",
  "\u3162",
  "\u3189",
  "\u11a7",
  "\ud7d8",
  "\u11e9",
  "\u11e6",
  "\ud7c2",
  "\u117e",
  "\u1158",
  "\u11d2",
  "\u3187",
  "\ua96e",
  "\u1137",
  "\ud7cc",
  "\ua969",
  "\u11ea",
  "\u1168",
  "\ua965",
  "\ud7e3",
  "\ud7cb",
  "\u313b",
  "\u11c0",
  "\ua964",
  "\u11f9",
  "\u3166",
  "\u1171",
  "\u113b",
  "\u1123",
  "\u317c",
  "\u114d",
  "\u11f1",
  "\u3137",
  "\u1117",
  "\ud7c9",
  "\u3136",
  "\u318c",
  "\u115b",
  "\ud7db",
  "\u1132",
  "\u1134",
  "\u11de",
  "\u11cd",
  "\ua96d",
  "\u119d",
  "\u313c",
  "\u318e",
  "\u318b",
  "\u11a6",
  "\u113d",
  "\ua967",
  "\u3130",
  "\u11e7",
  "\u11a2",
  "\ua961",
  "\ud7b8",
  "\u11c4",
  "\u11b9",
  "\u315b",
  "\u1149",
  "\u3179",
  "\ud7f7",
  "\u11c1",
  "\ud7be",
  "\u119b",
  "\u116e",
  "\u3174",
  "\u1142",
  "\ua979",
  "\ud7c1",
  "\u1186",
  "\u318d",
  "\ua966",
  "\u1196",
  "\u113e",
  "\u3150",
  "\u1151",
  "\ud7fc",
  "\u318f",
  "\u314b",
  "\u11d6",
  "\u116a",
  "\ud7c5",
  "\u3143",
  "\u11c6",
  "\u1124",
  "\u3171",
  "\u117c",
  "\u119f",
  "\ua96c",
  "\ud7d1",
  "\u3131",
  "\u3132",
  "\u11f2",
  "\u11da",
  "\u316f",
  "\u1112",
  "\u3181",
  "\ud7f2",
  "\ud7f9",
  "\u11b0",
  "\u1111",
  "\u3186",
  "\ud7ff",
  "\u114b",
  "\u112a",
  "\u11e4",
  "\ud7d4",
  "\ud7b9",
  "\u1101",
  "\ud7cf",
  "\ud7dd",
  "\u11d9",
  "\u11d7",
  "\u1159",
  "\u11ba",
  "\ud7c0",
  "\u118c",
  "\u11fa",
  "\u11d1",
  "\u1173",
  "\u1129",
  "\u1100",
  "\ud7f0",
  "\u1110",
  "\ud7ce",
  "\u1130",
  "\u3165",
  "\u3188",
  "\u3160",
  "\u3158",
  "\u1103",
  "\u111a",
  "\ud7c8",
  "\ud7b2",
  "\u1198",
  "\u11ce",
  "\u115c",
  "\ud7da",
  "\u1121",
  "\ud7e8",
  "\ud7d7",
  "\u3139",
  "\ua963",
  "\u114c",
  "\ud7ee",
  "\u315d",
  "\u3149",
  "\u11d3",
  "\u1162",
  "\u3146",
  "\u118f",
  "\ud7b1",
  "\u11a4",
  "\ud7f4",
  "\ua962",
  "\u1177",
  "\u11b7",
  "\ud7c3",
  "\u1139",
  "\ua96a",
  "\ua97b",
  "\u110b",
  "\u119c",
  "\u11f6",
  "\u11aa",
  "\u3170",
  "\u11f8",
  "\u3142",
  "\u11bb",
  "\u117d",
  "\u11c3",
  "\ud7fe",
  "\u11ac",
  "\u112b",
  "\u1109",
  "\u117a",
  "\u11eb",
  "\u1102",
  "\u1191",
  "\u1115",
  "\u3172",
  "\ud7d2",
  "\u3151",
  "\u1199",
  "\ud7bb",
  "\u11fb",
  "\u11b5",
  "\u1104",
  "\u3161",
  "\ua960",
  "\u111c",
  "\u11b2",
  "\u1169",
  "\u3175",
  "\u11a0",
  "\ud7f6",
  "\u1166",
  "\u1167",
  "\u1193",
  "\ud7eb",
  "\u119a",
  "\u1156",
  "\u3152",
  "\u1127",
  "\u315f",
  "\u115e",
  "\ua97f",
  "\u11a8",
  "\u1194",
  "\u112c",
  "\u1180",
  "\u1107",
  "\u1152",
  "\ua97a",
  "\u1125",
  "\u111e",
  "\u112e",
  "\u3157",
  "\u1136",
  "\u11d5",
  "\u11ae",
  "\ud7f8",
  "\u112d",
  "\u1189",
  "\ua96f",
  "\u118e",
  "\u1154",
  "\ud7f5",
  "\u315e",
  "\u11b4",
  "\u318a",
  "\u1183",
  "\u1175",
  "\u11ed",
  "\u11ef",
  "\u1105",
  "\u1182",
  "\ud7ea",
  "\u1192",
  "\u11d0",
  "\ua978",
  "\u1128",
  "\u115f",
  "\u3140",
  "\u1133",
  "\u111f",
  "\u11bf",
  "\u3134",
  "\ud7ed",
  "\u117f",
  "\ud7ba",
  "\u110a"
]);

const INVISIBLE_CHARACTER_JOINERS = new Set([
  "\u034f",
  "\u061c",
  "\u17b4",
  "\u17b5",
  "\u200c",
  "\u200d",
  "\u200e",
  "\u200f",
  "\u206f",
  "\ufe00",
  "\ufe01",
  "\ufe02",
  "\ufe03",
  "\ufe04",
  "\ufe05",
  "\ufe06",
  "\ufe07",
  "\ufe08",
  "\ufe09",
  "\ufe0a",
  "\ufe0b",
  "\ufe0c",
  "\ufe0d",
  "\ufe0e",
  "\ufe0f",
  "\ufeff",
  "\ud834\udd59",
  "\ud834\udd73",
  "\ud834\udd74",
  "\ud834\udd75",
  "\ud834\udd76",
  "\ud834\udd77",
  "\ud834\udd78",
  "\ud834\udd79",
  "\ud834\udd7a",
]);

/**
 * Splits the input string into what users perceive as "characters", called graphemes.
 *
 * This function extends the official Unicode grapheme splitting algorithm with additional features.
 * It matches the algorithm used by NameGuard which introduces user-friendly features like Hangul and invisible character splitting.
 *
 * Splitting is performed using the [text-segmentation](https://github.com/niklasvh/text-segmentation) library with added special Hangul treatment.
 * This makes it possible to handle strings with arbitrary Hangul Jamo sequences that most operating systems render as distinct graphemes.
 * Without this fix, some Hangul Jamo would be merged into one grapheme which would seem confusing to the user who sees them as separate.
 * See splitGraphemes.test.ts for examples.
 * Invisible characters are also split into separate graphemes.
 *
 * This implementation is safe to use in all modern web browsers,
 * unlike the related browser API for splitting graphemes according to the Unicode standard,
 * which isn't supported by all browsers today.
 *
 * @param name - normalized domain name to split into graphemes
 * @returns - list of graphemes derived from the input
 */
export function splitGraphemes(name: string): string[] {
  // initial split
  let graphemes = unicodeStandardGraphemeSplit(name);

  // break up invisible characters
  let graphemesWithSplitInvisibles = [];
  for (const graphemeStr of graphemes) {
    const graphemeCps = splitCharacters(graphemeStr);
    let i = graphemeCps.length - 1;
    while (i >= 0) {
      if (INVISIBLE_CHARACTER_JOINERS.has(graphemeCps[i])) {
        i--;
      } else {
        break;
      }
    }
    i++;
    const graphemeBaseStr = graphemeCps.slice(0, i).join("");
    if (i === graphemeCps.length) {
      graphemesWithSplitInvisibles.push(graphemeBaseStr);
    } else {
      if (graphemeCps[i] === "\ufe0f" && isEmoji(graphemeBaseStr)) {
        i += 1;
      }
      if (i > 0) {
        graphemesWithSplitInvisibles.push(graphemeCps.slice(0, i).join(""));
      }
      for (let j = i; j < graphemeCps.length; j++) {
        graphemesWithSplitInvisibles.push(graphemeCps[j]);
      }
    }
  }
  graphemes = graphemesWithSplitInvisibles;

  // break up Hangul Jamo
  let graphemesWithSplitHangul = [];
  for (const graphemeStr of graphemes) {
    const graphemeCps = splitCharacters(graphemeStr);
    let i = 0;
    let j = 1;
    while (j < graphemeCps.length) {
      if (HANGUL_JAMO.has(graphemeCps[j])) {
        graphemesWithSplitHangul.push(graphemeCps.slice(i, j).join(""));
        i = j;
      }
      j++;
    }
    graphemesWithSplitHangul.push(graphemeCps.slice(i, j).join(""));
  }
  graphemes = graphemesWithSplitHangul;

  return graphemes;
}

export function countGraphemes(name: string): number {
  return splitGraphemes(name).length;
}
