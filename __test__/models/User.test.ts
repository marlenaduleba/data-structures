import User from "../../src/models/User";

describe("User", () => {
  it("should create a User with name, email, and userID", () => {
    const user = new User("Jane Doe", "jane@example.com", "user-123");
    expect(user).toBeInstanceOf(User);
    expect(user.name).toBe("Jane Doe");
    expect(user.email).toBe("jane@example.com");
    expect(user.userID).toBe("user-123");
  });
});
