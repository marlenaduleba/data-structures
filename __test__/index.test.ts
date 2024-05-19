import { Book } from "../src/models/Book";
import User from "../src/models/User";
import Cart from "../src/models/Cart";
import Order from "../src/models/Order";

describe("index.ts", () => {
  let book1: Book;
  let book2: Book;
  let user: User;
  let cart: Cart;

  beforeEach(() => {
    // Creating instances
    book1 = new Book(
      "The Great Gatsby",
      "F. Scott Fitzgerald",
      "1234567890",
      10.99,
      true
    );
    book2 = new Book("1984", "George Orwell", "2345678901", 8.99, true);
    user = new User("Alice", "alice@example.com", "user-123");
    cart = new Cart(user);
  });

  it("should simulate a user adding books to the cart and placing an order", () => {
    // Simulating adding books to the cart
    cart.addBook(book1);
    cart.addBook(book2);

    // Check if books have been added
    expect(cart.getBooks()).toEqual([book1, book2]);

    // Simulate removing a book from the shopping cart
    cart.removeBook(book1.ISBN);

    // Checking if the book has been deleted
    expect(cart.getBooks()).toEqual([book2]);

    // Checking the total price
    const totalPrice = cart.calculateTotalPrice();
    expect(totalPrice).toBe(8.99); // Price for one book only

    // Creating an order
    const order = new Order(user, cart.getBooks());

    // Checking the order summary
    const summary = order.getOrderSummary();
    expect(summary).toContain("User: Alice (alice@example.com)");
    expect(summary).toContain("Books Ordered: 1984");
    expect(summary).toContain("Total Price: $8.99");
  });
});
