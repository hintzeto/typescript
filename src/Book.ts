class Book {
    constructor(
        public title: string,
        public author: string,
        public isbn: string,
        public subBooks: Book[] = []
    ) {}
}

export { Book };