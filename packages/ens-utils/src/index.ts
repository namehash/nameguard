export * from "./address";
export * from "./chain";
export * from "./contract";
export * from "./currency";
export * from "./ensname";
export * from "./ethregistrar";
export * from "./hashutils";
export * from "./nameparser";
export * from "./nft";
export * from "./number";
export * from "./price";
export * from "./time";
export * from "./transaction";
export * from "./domain";
export * from "./registration";

declare global {
  interface BigInt {
    toJSON: () => string;
  }
}

BigInt.prototype.toJSON = function () {
  return this.toString();
};
