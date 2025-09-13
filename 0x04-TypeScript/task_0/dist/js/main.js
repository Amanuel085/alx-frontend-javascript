var student1 = {
    firstName: "Amanuel",
    lastName: "Agegnehu",
    age: 25,
    location: "Addis Ababa"
};
var student2 = {
    firstName: "Selam",
    lastName: "Tesfaye",
    age: 22,
    location: "Bahir Dar"
};
var studentsList = [student1, student2];
// Create table
var table = document.createElement("table");
var tbody = document.createElement("tbody");
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    var locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
//# sourceMappingURL=main.js.map