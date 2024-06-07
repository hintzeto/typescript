// src/Library.ts

import { Book } from './Book';
import { fetchBookDetails } from './FetchDetails';

class Library {
    private books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
        console.log(`Book titled "${book.title}" added to the library.`);
    }

    listBooks(): void {
        if (this.books.length === 0) {
            console.log('No books available in the library.');
            return;
        }

        console.log('Books available in the library:');
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.title} by ${book.author} (ISBN: ${book.isbn})`);
        });
    }

    findBookByTitle(title: string): Book | undefined {
        const findBookRecursive = (books: Book[]): Book | undefined => {
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

    // Asynchronous method to fetch book details
    async fetchAndAddBook(isbn: string): Promise<void> {
        try {
            const bookDetails = await fetchBookDetails(isbn);
            const newBook = new Book(bookDetails.title, bookDetails.author, bookDetails.isbn);
            this.addBook(newBook);
        } catch (error) {
            console.error('Failed to fetch book details:', error);
        }
    }
}

export { Library };
