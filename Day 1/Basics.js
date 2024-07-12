console.log("BASICS OF JS")
let names=["Rahul",10,"Jose"];//basically a list can have a mixture of datatypes
console.log(names);
console.log(names[1]);
console.log("The length of the list is",names.length)
names.push(20)//push function to push elements into the list and pop function to pop elements from the list
names.unshift("Anu")
names.pop()
console.log(names)
//objects and and array of objects
let person={
    name:"Meera",
    age:41
}
console.log(person)
console.log(person.name)//to access an attribute within a list you must go object_name.attribute
let persons=[
    {
        name:"Abhishek",
        age:23
    },
    {
        name:"Remya",
        age:26
    },
    {
        name:"Meena",
        age:28
    }
    
]
console.log(persons)
console.log(persons[2].name)//to acces the attribute name of the third object within the list