const { describe, expect, it } = require("@jest/globals");
const User = require("../classes/User.js");

describe("user.login(password)", () => {
  it("logs a user in if the password is correct", () => {
    const user = new User("Isaac", "password123", 22)
    user.login("password123")
    expect(user.loggedIn).toBe(true)
  });

  it("throws an error if the password is incorrect", () => {
    const user = new User("Isaac", "password123", 22)
    expect(() => user.login("wrongpassword")).toThrow("incorrect password")
  });
});

describe("user.logout()", () => {
  it("logs a user out", () => {
    const user = new User("Isaac", "password123", 22)
    user.loggedIn = true; 
    user.logout();
    expect(user.loggedIn).toBe(false); 
  });
});
