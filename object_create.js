const person = {
    greet: function() {
      console.log("Hello!");
    }
  };
  
  const student = Object.create(person);
  student.greet(); // Output: Hello!
  