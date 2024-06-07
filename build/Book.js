"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(title, author, isbn, subBooks = []) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.subBooks = subBooks;
    }
}
exports.Book = Book;
//# sourceMappingURL=Book.js.map