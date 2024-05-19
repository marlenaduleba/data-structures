import { Book, FictionBook, NonFictionBook } from "../../src/models/Book";

describe("Book", () => {
  const book = new Book("1984", "George Orwell", "978-0451524935", 9.99, true);

  it("should create an instance of Book", () => {
    expect(book).toBeInstanceOf(Book);
  });

  it("should return correct details", () => {
    expect(book.getDetails()).toBe('"1984" by George Orwell');
  });
});

describe("FictionBook", () => {
  const fictionBook = new FictionBook(
    "Dune",
    "Frank Herbert",
    "978-0441172719",
    15.99,
    true
  );

  it("should create an instance of FictionBook", () => {
    expect(fictionBook).toBeInstanceOf(FictionBook);
  });

  it("should inherit from Book", () => {
    expect(fictionBook).toBeInstanceOf(Book);
  });

  it("should return correct details with genre", () => {
    expect(fictionBook.getDetails()).toBe('"Dune" by Frank Herbert - Fiction');
  });
});

describe("NonFictionBook", () => {
  const nonFictionBook = new NonFictionBook(
    "Sapiens",
    "Yuval Noah Harari",
    "978-0062316097",
    18.99,
    true
  );

  it("should create an instance of NonFictionBook", () => {
    expect(nonFictionBook).toBeInstanceOf(NonFictionBook);
  });

  it("should inherit from Book", () => {
    expect(nonFictionBook).toBeInstanceOf(Book);
  });

  it("should return correct details with genre", () => {
    expect(nonFictionBook.getDetails()).toBe(
      '"Sapiens" by Yuval Noah Harari - Non-Fiction'
    );
  });
});
