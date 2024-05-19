/**
 * Represents a single book in the online bookstore.
 */
export class Book {
  /**
   * Constructor for the Book class.
   * @param {string} title The title of the book.
   * @param {string} author The author of the book.
   * @param {string} ISBN The ISBN number of the book.
   * @param {number} price The price of the book.
   * @param {boolean} availability The availability of the book.
   */
  constructor(
    public title: string,
    public author: string,
    public ISBN: string,
    public price: number,
    public availability: boolean
  ) {}

  /**
   * Returns the details of the book in a string format.
   * @returns {string} The details of the book.
   */
  getDetails(): string {
    return `"${this.title}" by ${this.author}`;
  }
}

/**
 * Represents a fiction book in the online bookstore.
 * Inherits from the Book class.
 */
export class FictionBook extends Book {
  /**
   * The genre of the book (Fiction).
   */
  readonly genre: string = "Fiction";

  /**
   * Constructor for the FictionBook class.
   * @param {string} title The title of the book.
   * @param {string} author The author of the book.
   * @param {string} ISBN The ISBN number of the book.
   * @param {number} price The price of the book.
   * @param {boolean} availability The availability of the book.
   */
  constructor(
    title: string,
    author: string,
    ISBN: string,
    price: number,
    availability: boolean
  ) {
    super(title, author, ISBN, price, availability);
  }

  /**
   * Returns the details of the book in a string format, including the genre.
   * @returns {string} The details of the book.
   */
  getDetails(): string {
    return `"${this.title}" by ${this.author} - ${this.genre}`;
  }
}

/**
 * Represents a non-fiction book in the online bookstore.
 * Inherits from the Book class.
 */
export class NonFictionBook extends Book {
  /**
   * The genre of the book (Non-Fiction).
   */
  readonly genre: string = "Non-Fiction";

  /**
   * Constructor for the NonFictionBook class.
   * @param {string} title The title of the book.
   * @param {string} author The author of the book.
   * @param {string} ISBN The ISBN number of the book.
   * @param {number} price The price of the book.
   * @param {boolean} availability The availability of the book.
   */
  constructor(
    title: string,
    author: string,
    ISBN: string,
    price: number,
    availability: boolean
  ) {
    super(title, author, ISBN, price, availability);
  }

  /**
   * Returns the details of the book in a string format, including the genre.
   * @returns {string} The details of the book.
   */
  getDetails(): string {
    return `"${this.title}" by ${this.author} - ${this.genre}`;
  }
}
