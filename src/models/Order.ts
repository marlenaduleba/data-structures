import { Book } from "./Book.js";
import User from "./User.js";

/**
 * Represents a user's order.
 */
class Order {
  private totalPrice: number;

  /**
   * Constructor for the Order class.
   * @param {User} user The user placing the order.
   * @param {Book[]} books The books in the order.
   */
  constructor(public user: User, public books: Book[]) {
    this.totalPrice = this.calculateTotalPrice();
  }

  private calculateTotalPrice(): number {
    return this.books.reduce((total, book) => total + book.price, 0);
  }

  /**
   * Generates a summary of the order.
   * @returns {string} The order summary.
   */
  getOrderSummary(): string {
    return `
        Order Summary:
        User: ${this.user.name} (${this.user.email})
        Books Ordered: ${this.books.map((book) => book.title).join(", ")}
        Total Price: $${this.totalPrice.toFixed(2)}
    `;
  }
}

export default Order;
