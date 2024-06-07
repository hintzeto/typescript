"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
const Book_1 = require("./Book");
const FetchDetails_1 = require("./FetchDetails");
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log(`Book titled "${book.title}" added to the library.`);
    }
    listBooks() {
        if (this.books.length === 0) {
            console.log('No books available in the library.');
            return;
        }
        console.log('Books available in the library:');
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.title} by ${book.author} (ISBN: ${book.isbn})`);
        });
    }
    findBookByTitle(title) {
        const findBookRecursive = (books) => {
            for (const book of books) {
                if (book.title.toLowerCase() === title.toLowerCase()) {
                    return book;
                }
                const foundInSubBook = findBookRecursive(book.subBooks);
                if (foundInSubBook) {
                    return foundInSubBook;
                }
            }
            return undefined;
        };
        return findBookRecursive(this.books);
    }
    fetchAndAddBook(isbn) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bookDetails = yield (0, FetchDetails_1.fetchBookDetails)(isbn);
                const newBook = new Book_1.Book(bookDetails.title, bookDetails.author, bookDetails.isbn);
                this.addBook(newBook);
            }
            catch (error) {
                console.error('Failed to fetch book details:', error);
            }
        });
    }
}
exports.Library = Library;
//# sourceMappingURL=Library.js.map