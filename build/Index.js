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
const Library_1 = require("./Library");
const Book_1 = require("./Book");
const myLibrary = new Library_1.Library();
const book1 = new Book_1.Book('1984', 'George Orwell', '1234567890');
const book2 = new Book_1.Book('Brave New World', 'Aldous Huxley', '0987654321');
const subBook1 = new Book_1.Book('Animal Farm', 'George Orwell', '1122334455');
const subBook2 = new Book_1.Book('Island', 'Aldous Huxley', '6677889900');
book1.subBooks.push(subBook1);
book2.subBooks.push(subBook2);
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.listBooks();
const searchTitle = 'Animal Farm';
const foundBook = myLibrary.findBookByTitle(searchTitle);
if (foundBook) {
    console.log(`Found book: ${foundBook.title} by ${foundBook.author} (ISBN: ${foundBook.isbn})`);
}
else {
    console.log(`Book titled "${searchTitle}" not found in the library.`);
}
const fetchAndAddBook = (isbn) => __awaiter(void 0, void 0, void 0, function* () {
    yield myLibrary.fetchAndAddBook(isbn);
    myLibrary.listBooks();
});
fetchAndAddBook('9999999999');
//# sourceMappingURL=Index.js.map