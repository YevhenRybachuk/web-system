"use strict";
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isBorrowed = false;
    }
    borrow() {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`Book "${this.title}" was borrowed.`);
        }
        else {
            console.log(`Book "${this.title}" is already borrowed.`);
        }
    }
}
class Magazine {
    constructor(title, author, issueNumber) {
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
        this.isBorrowed = false;
    }
    borrow() {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`Magazine "${this.title}" was borrowed.`);
        }
        else {
            console.log(`Magazine "${this.title}" is already borrowed.`);
        }
    }
}
class DVD {
    constructor(title, author, duration) {
        this.title = title;
        this.author = author;
        this.duration = duration;
        this.isBorrowed = false;
    }
    borrow() {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`DVD "${this.title}" was borrowed.`);
        }
        else {
            console.log(`DVD "${this.title}" is already borrowed.`);
        }
    }
}
class Library {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    findItemByName(name) {
        return this.items.find((item) => item.title === name);
    }
    showAvailableItems() {
        console.log("Available library items:");
        for (const item of this.items) {
            if (!item.isBorrowed) {
                console.log(`- ${item.title} by ${item.author}`);
            }
        }
    }
}
const library = new Library();
const book = new Book("The Hobbit", "J.R.R. Tolkien", 310);
const magazine = new Magazine("National Geographic", "Various Authors", 125);
const dvd = new DVD("The Matrix", "The Wachowskis", 136);
library.addItem(book);
library.addItem(magazine);
library.addItem(dvd);
console.log("Before borrowing:");
library.showAvailableItems();
book.borrow();
dvd.borrow();
console.log("After borrowing:");
library.showAvailableItems();
const foundItem = library.findItemByName("National Geographic");
if (foundItem !== undefined) {
    console.log(`Found item: ${foundItem.title} by ${foundItem.author}`);
}
