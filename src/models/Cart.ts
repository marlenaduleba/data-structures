import { Book } from "./Book.js";
import User from "./User.js";

/**
 * Represents a user's shopping cart.
 */
class Cart {
  private books: Book[] = [];

  constructor(private user: User) {}

  /**
   * Adds a book to the cart.
   * @param {Book} book The book to add.
   */
  addBook(book: Book): void {
    if (book.availability) {
      this.books.push(book);
    } else {
      console.log(`Sorry, the book "${book.title}" is currently unavailable.`);
    }
  }

  /**
   * Removes a book from the cart based on its ISBN.
   * @param {string} ISBN The ISBN of the book to remove.
   */
  removeBook(ISBN: string): void {
    this.books = this.books.filter((book) => book.ISBN !== ISBN);
  }

  /**
   * Calculates the total price of all books in the cart.
   * @returns {number} The total price of the books in the cart.
   */
  calculateTotalPrice(): number {
    return this.books.reduce((total, book) => total + book.price, 0);
  }

  /**
   * Retrieves the list of books in the cart.
   * @returns {Book[]} The list of books in the cart.
   */
  getBooks(): Book[] {
    return this.books;
  }
}

export default Cart;
