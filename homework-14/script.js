class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = new Array(25).fill(undefined);
    }
    present() {
        const nextEmptySlot = this.attendance.findIndex(item => item === undefined);
        if (nextEmptySlot !== -1) {
            this.attendance[nextEmptySlot] = true;
        }
    }
    absent() {
        const nextEmptySlot = this.attendance.findIndex(item => item === undefined);
        if (nextEmptySlot !== -1) {
            this.attendance[nextEmptySlot] = false;
        }
    }
    calculateAge() {
        return new Date().getFullYear() - this.birthYear;
    }
    calculateAverageGrade() {
        return this.grades.length > 0 ? this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length : 0;
    }
    summary() {
        const averageGrade = this.calculateAverageGrade();
        const attendanceRate = this.attendance.filter(att => att === true).length / this.attendance.length;

        if (averageGrade > 90 && attendanceRate > 0.9) return "Молодець!";
        if (averageGrade > 90 || attendanceRate > 0.9) return "Добре, але можна краще";
        if (averageGrade < 90 && attendanceRate < 0.9) return "Редиска!";
    }
}
const student1 = new Student("Іван", "Петров", 2000);
const student2 = new Student("Марія", "Іванова", 1999);
const student3 = new Student("Олександр", "Мороз", 2001);

student1.present(); student1.present(); student1.present(); student1.present(); student1.present(); student1.present(); student1.present(); student1.present(); student1.present(); student1.present(); student1.present(); student1.present(); student1.present(); student1.present(); student1.present(); student1.present(); student1.present(); student1.present(); student1.present(); student1.present(); student1.present(); student1.present(); student1.present();
student1.grades = [95, 96, 92, 99, 91];

student2.present(); student2.present(); student2.present(); student2.present(); student2.present(); student2.present(); student2.present(); student2.present(); student2.present(); student2.present(); student2.present(); student2.present(); student2.present(); student2.present(); student2.present(); student2.present(); student2.present(); student2.present(); student2.present(); student2.present(); student2.present(); student2.present(); student2.present();
student2.grades = [78, 87, 79, 92, 88];

student3.absent(); student3.absent(); student3.absent(); student3.absent(); student3.absent(); student3.absent(); student3.absent(); student3.absent(); student3.absent(); student3.absent(); student3.absent(); student3.absent(); student3.absent(); student3.absent(); student3.absent(); student3.absent(); student3.absent(); student3.absent(); student3.absent(); student3.absent(); student3.absent(); student3.absent(); student3.absent(); student3.absent();
student3.grades = [70, 75, 77, 74, 71];

console.log(`STUDENT 1\n${student1.firstName} ${student1.lastName}:\nВік - ${student1.calculateAge()}\nСередній бал - ${student1.calculateAverageGrade()}\nПовідомлення - ${student1.summary()}`);
console.log(`STUDENT 2\n${student2.firstName} ${student2.lastName}:\nВік - ${student2.calculateAge()}\nСередній бал - ${student2.calculateAverageGrade()}\nПовідомлення - ${student2.summary()}`);
console.log(`STUDENT 3\n${student3.firstName} ${student3.lastName}:\nВік - ${student3.calculateAge()}\nСередній бал - ${student3.calculateAverageGrade()}\nПовідомлення - ${student3.summary()}`);
