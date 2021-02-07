// Import Employee class
const Employee = require("../lib/Employee");

// Test Employee class
describe("Employee", () => {
  
  // Test object instantiation
  describe("Employee object instantiation", () => {
    it("Creates an object with name, id, and email properties", () => {
      const employee = new Employee("Jane Doe", 1, "janedoe@gmail.com");

      expect(employee).toBeInstanceOf(Employee);
      expect(employee.name).toEqual("Jane Doe");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("janedoe@gmail.com");
    });
  });

  // Test getName() method
  describe("getName", () => {
    it("Should return the object's name property", () => {
      const employee = new Employee("Jane Doe", 1, "janedoe@gmail.com");

      expect(employee.getName()).toEqual("Jane Doe");
    });
  });

  // Test getId() method
  describe("getId", () => {
    it("Should return the object's id property", () => {
      const employee = new Employee("Jane Doe", 1, "janedoe@gmail.com");

      expect(employee.getID()).toEqual(1);
    });
  });

  // Test getEmail() method
  describe("getEmail", () => {
    it("Should return the object's email property", () => {
      const employee = new Employee("Jane Doe", 1, "janedoe@gmail.com");

      expect(employee.getEmail()).toEqual("janedoe@gmail.com");
    });
  });

  // Test getRole() method
  describe("getRole", () => {
    it("Should return the string 'Employee'", () => {
      const employee = new Employee("Jane Doe", 1, "janedoe@gmail.com");

      expect(employee.getRole()).toEqual("Employee");
    });
  });
});