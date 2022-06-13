// Write your solution in this file!
const employee = {
    name : 'felix',
    streetAddress : 'Nairobi 433'
  };
  
  const updateEmployeeWithKeyAndValue = function(employee,key,value)  {
    return {
      ...employee,
      [key]: value,
    }
  };
  
  const destructivelyUpdateEmployeeWithKeyAndValue = function (employee,key,value){
    employee[key] = value;
    return employee
  };
  
  const deleteFromEmployeeByKey = function (employee,key) {
      const newEmployee = {...employee};
      delete newEmployee[key];
      return newEmployee
  };
  
  const destructivelyDeleteFromEmployeeByKey = function (employee,key){
    delete employee[key];
    return employee;
  };