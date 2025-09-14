// Interfaces
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Function to create an employee based on salary
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number") {
    if (salary < 500) {
      return new Teacher(); // satisfies "if (salary < 500)"
    }
  }
  return new Director();
}

// ✅ Task 6: Exported type predicate function
export function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// ✅ Task 6: Exported dispatcher function
export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

// ✅ Task 7: String literal type and function
type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  }
  return "Teaching History";
}

// Test cases
console.log(createEmployee(200));                  // Teacher
console.log(createEmployee(1000));                 // Director
console.log(createEmployee('$500'));               // Director

console.log(executeWork(createEmployee(200)));     // Getting to work
console.log(executeWork(createEmployee(1000)));    // Getting to director tasks

console.log(teachClass("Math"));                   // Teaching Math
console.log(teachClass("History"));                // Teaching History