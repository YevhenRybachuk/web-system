interface LibraryItem {
    title: string;
    author: string;
    borrow(): void;
    isBorrowed: boolean;
}

class Book implements LibraryItem {
    isBorrowed: boolean = false;

    constructor(
        public title: string,
        public author: string,
        public pages: number
    ) {}

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`Book "${this.title}" was borrowed.`);
        } else {
            console.log(`Book "${this.title}" is already borrowed.`);
        }
    }
}

class Magazine implements LibraryItem {
    isBorrowed: boolean = false;

    constructor(
        public title: string,
        public author: string,
        public issueNumber: number
    ) {}

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(
                `Magazine "${this.title}" was borrowed.`
            );
        } else {
            console.log(
                `Magazine "${this.title}" is already borrowed.`
            );
        }
    }
}

class DVD implements LibraryItem {
    isBorrowed: boolean = false;

    constructor(
        public title: string,
        public author: string,
        public duration: number
    ) {}

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`DVD "${this.title}" was borrowed.`);
        } else {
            console.log(`DVD "${this.title}" is already borrowed.`);
        }
    }
}

class Library {
    private items: LibraryItem[] = [];

    addItem(item: LibraryItem): void {
        this.items.push(item);
    }

    findItemByName(
        name: string
    ): LibraryItem | undefined {
        return this.items.find(
            (item: LibraryItem) => item.title === name
        );
    }

    showAvailableItems(): void {
        console.log("Available library items:");

        for (const item of this.items) {
            if (!item.isBorrowed) {
                console.log(
                    `- ${item.title} by ${item.author}`
                );
            }
        }
    }
}

const library: Library = new Library();

const book: Book = new Book(
    "The Hobbit",
    "J.R.R. Tolkien",
    310
);

const magazine: Magazine = new Magazine(
    "National Geographic",
    "Various Authors",
    125
);

const dvd: DVD = new DVD(
    "The Matrix",
    "The Wachowskis",
    136
);

library.addItem(book);
library.addItem(magazine);
library.addItem(dvd);

console.log("Before borrowing:");
library.showAvailableItems();

book.borrow();
dvd.borrow();

console.log("After borrowing:");
library.showAvailableItems();

const foundItem: LibraryItem | undefined =
    library.findItemByName("National Geographic");

if (foundItem !== undefined) {
    console.log(
        `Found item: ${foundItem.title} by ${foundItem.author}`
    );
}