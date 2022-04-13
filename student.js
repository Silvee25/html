function Student () {
    this.name = 'Pankaj',
    this.age = 25,
    this.gender ='male',
    this.clg="abc",

     this.greet = function () {
     }
    }
 function Student (student_name, student_age, student_gender) {

        // assigning  parameter values to the calling object
         this.name = student_name,
         this.age = student_age,
         this.gender = student_gender,
         this.greet = function () {
            return ('Hi' + ' ' + this.name);
        }
    }
    
    
    // creating objects
    const obj1= new Student('Pankaj',23, 'male');
    const obj2= new Student('Reena', 25, 'female');
    const obj3= new Student('Rajeev', 26, 'male');
    Student.prototype.clg= 'ABC';
    console.log(obj1.name); // "Pankaj"
    console.log(obj1.age); // 23
    console.log(obj1.gender); // "male"
    console.log(obj1.clg);
    console.log(obj2.name); // "Reena"
    console.log(obj2.age); // 25
    console.log(obj2.gender); // "female"
    console.log(obj2.clg);
    console.log(obj3.name); // "rajeev"
    console.log(obj3.age); // 26
    console.log(obj3.gender); // "male"
    console.log(obj3.clg);
    
    Student.prototype={clg:IT}
    console.log(obj1.clg);
   
  


    