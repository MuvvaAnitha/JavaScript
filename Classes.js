class person
{
    age = 26
    get location()
    {
        return "canada"
    }

//constructor is menthod which executes by default when you create object of the class
    constructor(firstName, lastName)
{
    this.firstName =firstName
    this.lastName =lastName
}
   fullName()
   {
    console.log(this.firstName+this.lastName)
   }
}
var person= new person()
console.log(person.age)
console.log(person.location)



