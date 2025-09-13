interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

// Clear the test message
document.body.innerHTML = "";

// Create a container to display teacher info
const container = document.createElement("div");
container.innerHTML = `
  <h2>Teacher Info</h2>
  <ul>
    <li><strong>First Name:</strong> ${teacher3.firstName}</li>
    <li><strong>Last Name:</strong> ${teacher3.lastName}</li>
    <li><strong>Full-Time:</strong> ${teacher3.fullTimeEmployee}</li>
    <li><strong>Location:</strong> ${teacher3.location}</li>
    <li><strong>Contract:</strong> ${teacher3.contract}</li>
  </ul>
`;

document.body.appendChild(container);