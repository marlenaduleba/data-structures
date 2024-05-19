import Order from "../../src/models/Order";
import { Book } from "../../src/models/Book";
import User from "../../src/models/User";

describe("Order", () => {
  let user: User;
  let book1: Book;
  let book2: Book;
  let order: Order;

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
    order = new Order(user, [book1, book2]);
  });

  it("should create an order with correct properties", () => {
    expect(order.user).toBe(user);
    expect(order.books).toEqual([book1, book2]);
  });

  it("should calculate the total price of the order", () => {
    const totalPrice = order["calculateTotalPrice"]();
    expect(totalPrice).toBe(19.98);
  });

  it("should return a correct order summary", () => {
    const summary = order.getOrderSummary();
    expect(summary).toContain("User: Alice (alice@example.com)");
    expect(summary).toContain("Books Ordered: The Great Gatsby, 1984");
    expect(summary).toContain("Total Price: $19.98");
  });
});
