import { describe, it } from "vitest";

// TODO: add a lot more unit tests here

describe("getPriceDescription", () => {
  /*
    The getPriceDescription returns either PriceDescription | null.

    PriceDescription is an object with the following properties:        
      - descriptiveTextBeginning references the text that is displayed at the beginning of the price description.
      - descriptiveTextEnd references the text that is displayed at the end of the price description.
      - pricePerYearDescription is a string that represents: Price + "/ year" (e.g. "$5.99 / year").

    In order to return a PriceDescription object, the getPriceDescription function
    makes usage of premiumEndsIn function and DOMAIN_HAS_SPECIAL_PRICE_IF_LENGTH_LESS_THAN
    constant, defining by condition the descriptiveTextBeginning, pricePerYear and descriptiveTextEnd.

    For every PriceDescription response, the domain price is get from AvailableNameTimelessPriceUSD.

    Whenever the domain was recently released (SecondaryRegistrationStatus.RecentlyReleased),
    (is in TEMPORARY_PREMIUM_PERIOD), the temporary premium end date is informed.
  */

  it("should return the price description for a domain that was recently release", () => {
    /*
        TODO implement test scenario once a getMockedDomainCard function is available
    */
  });
  it("should return the price description for a domain that was never registered", () => {
    /*
        TODO implement test scenario once a getMockedDomainCard function is available
    */
  });
  it("should return the price description for a domain that has a valid label", () => {
    /*
        TODO implement test scenario once a getMockedDomainCard function is available
    */
  });
  it("should not return the price description for a domain that has an invalid label", () => {
    /*
        TODO implement test scenario once a getMockedDomainCard function is available
    */
  });
  it("should not return the price description for a domain that is already registered", () => {
    /*
        TODO implement test scenario once a getMockedDomainCard function is available
    */
  });
  it("should not return the price description for a domain is expired and was not recently released", () => {
    /*
        TODO implement test scenario once a getMockedDomainCard function is available
    */
  });
  it("should not return the price description for a domain is expired and was not recently released", () => {
    /*
        TODO implement test scenario once a getMockedDomainCard function is available
    */
  });

  describe("AvailableNameTimelessPriceUSD", () => {
    /*
      AvailableNameTimelessPriceUSD is a function that returns the "timeless" price for a name,
      that takes no consideration of the current status of the name (e.g. temporary premium price).
    */
    it("should not return the price for a domain that has an invalid label", () => {});
    it("should return a $5 price for a domain that has 5 or more label chars", () => {});
    it("should return a $160 price for a domain that has 4 label chars", () => {});
    it("should return a $640 price for a domain that has 3 label chars", () => {});
    it("should return a $5 + additionalFee price for a domain that has 5 or more label chars + an informed additionalFee", () => {});
  });

  describe("temporaryPremiumPriceAtTimestamp", () => {
    /*
      AvailableNameTimelessPriceUSD is a function that returns the "timeless" price for a name,
      that takes no consideration of the current status of the name (e.g. temporary premium price).
    */
    it("should return $0 price for a domain that `atTimestamp` there is no temporaryPremium", () => {});
    it("should return a temporaryPremium for a domain that `atTimestamp` there is temporaryPremium", () => {});
  });
});
