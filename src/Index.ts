// src/index.ts

import { Library } from './Library';
import { Book } from './Book';

const myLibrary = new Library();

const book1 = new Book('1984', 'George Orwell', '1234567890');
const book2 = new Book('Brave New World', 'Aldous Huxley', '0987654321');

const subBook1 = new Book('Animal Farm', 'George Orwell', '1122334455');
const subBook2 = new Book('Island', 'Aldous Huxley', '6677889900');

book1.subBooks.push(subBook1);
book2.subBooks.push(subBook2);

myLibrary.addBook(book1);
myLibrary.addBook(book2);

myLibrary.listBooks();

const searchTitle = 'Animal Farm';
const foundBook = myLibrary.findBookByTitle(searchTitle);

if (foundBook) {
    console.log(`Found book: ${foundBook.title} by ${foundBook.author} (ISBN: ${foundBook.isbn})`);
} else {
    console.log(`Book titled "${searchTitle}" not found in the library.`);
}

const fetchAndAddBook = async (isbn: string) => {
    await myLibrary.fetchAndAddBook(isbn);
    myLibrary.listBooks();
};

fetchAndAddBook('9999999999');
