const { describe, expect, it } = require("@jest/globals");
const Scooter = require("../classes/Scooter.js");

describe("scooter.rent(user)", () => {
  it("checks a scooter out to a user", () => {
    const Scooter1 = new Scooter("Main Station");
    const user = { username: "Isaac" };
    Scooter1.rent(user)
    expect(Scooter1.user).toBe(user)

  });

  it("throws an error if battery dead", () => {
    const Scooter1 = new Scooter("blueNorth")
    const user1 = { username: "Isaac"};
    Scooter1.charge = 19
    expect(() => Scooter1.rent(user1)).toThrow("scooter needs to charge");
  });

  it("throws an error if scooter broken", () => {
    const Scooter1 = new Scooter("blueNorth")
    const user1 = { username: "Isaac"};
    Scooter1.isBroken = true
    expect(() => Scooter1.rent(user1)).toThrow("scooter needs repair");
  });


});

describe("scooter.dock(station)", () => {
  it("returns a scooter to a station", () => {
    const Scooter1 = new Scooter("blueNorth")
    const user1 = { username: "Isaac"};
    Scooter1.rent(user1)
    Scooter1.dock("redWest")
    expect(Scooter1.station).toBe("redWest")
    expect(Scooter1.user).toBe(null)

  });
});

describe("scooter.charge()", () => {
  it.skip("charges a scooter", async () => {
    const Scooter1 = new Scooter("blueNorth")
    Scooter1.charge = 50
    Scooter1.reCharge()

    expect(Scooter.charge).toBe(100)

  });
});

describe("scooter.repair()", () => {
  it.skip("repairs a scooter", () => {
    // Arrange
    // Act
    // Assert
  });
});
