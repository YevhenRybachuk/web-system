interface Course {
    name: string;
    duration: number;
    students: string[];
}

class OnlineCourse implements Course {
    name: string;
    duration: number;
    students: string[];

    constructor(name: string, duration: number) {
        this.name = name;
        this.duration = duration;
        this.students = [];
    }

    registerStudent(student: string): void {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
            console.log(
                `${student} registered for ${this.name}.`
            );
        } else {
            console.log(
                `${student} is already registered for ${this.name}.`
            );
        }
    }

    isStudentRegistered(student: string): boolean {
        return this.students.includes(student);
    }
}

class CourseManager {
    private courses: Course[] = [];

    addCourse(course: Course): void {
        this.courses.push(course);
    }

    removeCourse(courseName: string): void {
        this.courses = this.courses.filter(
            (course: Course) => course.name !== courseName
        );
    }

    findCourse(courseName: string): Course | undefined {
        return this.courses.find(
            (course: Course) => course.name === courseName
        );
    }

    showCourses(): void {
        for (const course of this.courses) {
            console.log(`Course: ${course.name}`);
            console.log(`Duration: ${course.duration} hours`);
            console.log(
                `Students: ${course.students.join(", ")}`
            );
            console.log("--------------------");
        }
    }
}

const courseManager: CourseManager = new CourseManager();

const javascriptCourse: OnlineCourse =
    new OnlineCourse("JavaScript", 40);

const typescriptCourse: OnlineCourse =
    new OnlineCourse("TypeScript", 35);

const javaCourse: OnlineCourse =
    new OnlineCourse("Java", 50);

courseManager.addCourse(javascriptCourse);
courseManager.addCourse(typescriptCourse);
courseManager.addCourse(javaCourse);

javascriptCourse.registerStudent("Maks");
javascriptCourse.registerStudent("Denis")
javascriptCourse.registerStudent("Maks");

typescriptCourse.registerStudent("Vova");
typescriptCourse.registerStudent("Dima");

javaCourse.registerStudent("Maks");

console.log("All courses:");
courseManager.showCourses();

const foundCourse: Course | undefined =
    courseManager.findCourse("TypeScript");

if (foundCourse !== undefined) {
    console.log("Found course:", foundCourse.name);
}