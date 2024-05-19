import Cart from "../../src/models/Cart";
import { Book } from "../../src/models/Book";
import User from "../../src/models/User";

describe("Cart", () => {
  let user: User;
  let book1: Book;
  let book2: Book;
  let cart: Cart;

  beforeEach(() => {
    user = new User("Alice", "alice@example.com", "user-123");
    book1 = new Book(
      "The Great Gatsby",
      "F. Scott Fitzgerald",
      "1234567890",
      10.99,
      true
    );
    book2 = new Book("1984", "George Orwell", "2345678901", 8.99, true);
    cart = new Cart(user);
  });

  it("should add books to the cart", () => {
    cart.addBook(book1);
    cart.addBook(book2);

    expect(cart.getBooks()).toEqual([book1, book2]);
  });

  it("should not add unavailable books to the cart", () => {
    const unavailableBook = new Book(
      "To Kill a Mockingbird",
      "Harper Lee",
      "3456789012",
      12.99,
      false
    );
    cart.addBook(unavailableBook);

    expect(cart.getBooks()).toEqual([]);
  });

  it("should remove books from the cart", () => {
    cart.addBook(book1);
    cart.addBook(book2);
    cart.removeBook(book1.ISBN);

    expect(cart.getBooks()).toEqual([book2]);
  });

  it("should calculate the total price of the cart", () => {
    cart.addBook(book1);
    cart.addBook(book2);

    expect(cart.calculateTotalPrice()).toBe(19.98);
  });
});
