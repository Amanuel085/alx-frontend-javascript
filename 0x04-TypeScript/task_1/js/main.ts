interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

// Clear the page
document.body.innerHTML = "";

// Render Teacher Info
const teacherContainer = document.createElement("div");
teacherContainer.innerHTML = `
  <h2>Teacher Info</h2>
  <ul>
    <li><strong>First Name:</strong> ${teacher3.firstName}</li>
    <li><strong>Last Name:</strong> ${teacher3.lastName}</li>
    <li><strong>Full-Time:</strong> ${teacher3.fullTimeEmployee}</li>
    <li><strong>Location:</strong> ${teacher3.location}</li>
    <li><strong>Contract:</strong> ${teacher3.contract}</li>
  </ul>
`;

// Render Director Info
const directorContainer = document.createElement("div");
directorContainer.innerHTML = `
  <h2>Director Info</h2>
  <ul>
    <li><strong>First Name:</strong> ${director1.firstName}</li>
    <li><strong>Last Name:</strong> ${director1.lastName}</li>
    <li><strong>Full-Time:</strong> ${director1.fullTimeEmployee}</li>
    <li><strong>Location:</strong> ${director1.location}</li>
    <li><strong>Number of Reports:</strong> ${director1.numberOfReports}</li>
  </ul>
`;

document.body.appendChild(teacherContainer);
document.body.appendChild(directorContainer);