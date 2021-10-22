// The prototype property allows you to add new properties and methods to existing objects.
function Employee(name, jobtitle, born) {
  this.name = name;
  this.jobtitle = jobtitle;
  this.born = born;
}
Employee.prototype.salary = 2000;

var fred = new Employee("Fred Flintstone", "Caveman", 1970);

console.log(fred);
