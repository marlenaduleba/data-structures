/**
 * Represents a user of the online bookstore.
 */
class User {
  /**
   * Constructor for the User class.
   * @param {string} name The name of the user.
   * @param {string} email The email address of the user.
   * @param {string} userId The unique identifier of the user.
   */
  constructor(
    public name: string,
    public email: string,
    public userID: string
  ) {}
}

export default User;
