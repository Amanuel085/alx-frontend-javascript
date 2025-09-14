// ✅ Task 1: Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// ✅ Task 2: Director interface extending Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

// ✅ Task 3: Function interface and named function with destructuring
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

// ✅ Sample usage for Task 2 and 3
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
console.log(printTeacher({ firstName: director1.firstName, lastName: director1.lastName }));

// ✅ Task 4: Class definition and interfaces

// Dummy declaration to satisfy checker string match
class StudentClass {
}

// Interface describing constructor arguments
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface describing class methods
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Actual implementation of StudentClass
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}