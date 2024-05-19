import { Book, FictionBook, NonFictionBook } from "./models/Book.js";
import User from "./models/User.js";
import Cart from "./models/Cart.js";
import Order from "./models/Order.js";

/**
 * Represents the main entry point for simulating interactions in the online bookstore.
 */

// Create some book instances
const book1 = new Book(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  "1234567890",
  10.99,
  true
);
const book2 = new FictionBook(
  "The Lord of the Rings",
  "J.R.R. Tolkien",
  "978-0261102385",
  10.99,
  true
);
const book3 = new Book(
  "To Kill a Mockingbird",
  "Harper Lee",
  "3456789012",
  12.99,
  false
);
const book4 = new NonFictionBook(
  "A Brief History of Time",
  "Stephen Hawking",
  "978-0857501004",
  15.95,
  true
);

// Create some user instances
const user1 = new User("Alice", "alice@example.com", "ISBN1");
const user2 = new User("Bob", "bob@example.com", "ISBN2");

// Create some cart instances and add books to them
const cart1 = new Cart(user1);
cart1.addBook(book1);
cart1.addBook(book2);
cart1.addBook(book3); // This book is unavailable
cart1.addBook(book4);

const cart2 = new Cart(user2);
cart2.addBook(book2);

// Create some order instances
const order1 = new Order(user1, cart1.getBooks());
const order2 = new Order(user2, cart2.getBooks());

console.log(order1.getOrderSummary());
console.log(order2.getOrderSummary());

/**
 * Simulates interactions in the online bookstore.
 */
function simulateBookstore() {
  console.log("Simulating bookstore interactions...");

  const books = [book1, book2, book3, book4];
  const users = [user1, user2];

  users.forEach((user) => {
    const cart = new Cart(user);
    books.forEach((book) => {
      cart.addBook(book);
    });
    const order = new Order(user, cart.getBooks());
    console.log(order.getOrderSummary());
  });
}

// Simulate bookstore interactions
simulateBookstore();
