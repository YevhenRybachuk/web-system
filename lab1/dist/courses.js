"use strict";
class OnlineCourse {
    constructor(name, duration) {
        this.name = name;
        this.duration = duration;
        this.students = [];
    }
    registerStudent(student) {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
            console.log(`${student} registered for ${this.name}.`);
        }
        else {
            console.log(`${student} is already registered for ${this.name}.`);
        }
    }
    isStudentRegistered(student) {
        return this.students.includes(student);
    }
}
class CourseManager {
    constructor() {
        this.courses = [];
    }
    addCourse(course) {
        this.courses.push(course);
    }
    removeCourse(courseName) {
        this.courses = this.courses.filter((course) => course.name !== courseName);
    }
    findCourse(courseName) {
        return this.courses.find((course) => course.name === courseName);
    }
    showCourses() {
        for (const course of this.courses) {
            console.log(`Course: ${course.name}`);
            console.log(`Duration: ${course.duration} hours`);
            console.log(`Students: ${course.students.join(", ")}`);
            console.log("--------------------");
        }
    }
}
const courseManager = new CourseManager();
const javascriptCourse = new OnlineCourse("JavaScript", 40);
const typescriptCourse = new OnlineCourse("TypeScript", 35);
const javaCourse = new OnlineCourse("Java", 50);
courseManager.addCourse(javascriptCourse);
courseManager.addCourse(typescriptCourse);
courseManager.addCourse(javaCourse);
javascriptCourse.registerStudent("Maks");
javascriptCourse.registerStudent("Denis");
javascriptCourse.registerStudent("Maks");
typescriptCourse.registerStudent("Vova");
typescriptCourse.registerStudent("Dima");
javaCourse.registerStudent("Maks");
console.log("All courses:");
courseManager.showCourses();
const foundCourse = courseManager.findCourse("TypeScript");
if (foundCourse !== undefined) {
    console.log("Found course:", foundCourse.name);
}
