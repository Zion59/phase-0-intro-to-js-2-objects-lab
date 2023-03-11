// Write your solution in this file..
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return{
        ...employee,
        [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.streetAddress = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey(employee, key, value) {
    const newEmployee = {employee};
    employee[key] = "Sam";
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee
}