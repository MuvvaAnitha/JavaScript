//object is collection of properties

let person={
     
    firstName:'Anitha',
    lastName:'Muvva',
    age:26,
    fullName:function()
    {
        console.log(this.firstName+this.lastName)
    }
}
console.log(person.fullName())
console.log(person['lastName'])
person.firstName='Ani'
console.log(person.firstName)
person.gender='Female'
delete person.gender
console.log(person)

	// JavaScript code demonstrating a simple object
	let school = {
		name: 'Vivekananda School',
		location : 'Martur',
		established : '1971',
		displayInfo : function(){
			console.log(`${school.name} was established
				in ${school.established} at ${school.location}`);
		}
	}
	school.displayInfo();

//output:-Vivekananda School was established in 1971 at Martur


	// Bracket notation
	let school1 = {
		name: 'Vivekananda School',
		displayInfo : function(){
			console.log(`${school1.name.split(' ')[0]}`);
		}
	}
	school.displayInfo(); 
    // output:-Vivekananda


    let person1 = {
        firstName: "John",
        lastName : "Doe",
        id       : 5566,
        fullName : function() {
          return this.firstName + " " + this.lastName;
        }
      };

    //   In JavaScript, the this keyword refers to an object.

    //   Which object depends on how this is being invoked (used or called).
      
    //   The this keyword refers to different objects depending on how it is used:
      
    //   In an object method, this refers to the object.
    //   Alone, this refers to the global object.
    //   In a function, this refers to the global object.
    //   In a function, in strict mode, this is undefined.
    //   In an event, this refers to the element that received the event.
    //   Methods like call(), apply(), and bind() can refer this to any object.				


    