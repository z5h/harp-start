(function () {

  module("Person: constructor");

  test("new(firstName, lastName)", function () {

    var firstName = "Dean";
    var lastName =  "Wareham";

    var person = new Person(firstName, lastName);

    ok(person.fullName(), "has a full name");
    equal(person.fullName().split(' ')[0], firstName, "starts with first name");
    equal(person.fullName().split(' ')[1], lastName,  "ends with first name");
  });

})();