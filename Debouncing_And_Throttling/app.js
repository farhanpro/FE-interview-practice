let name ={
    firstName: "John",
    lastName: "Doe"
}

let name2 = {
    firstName: "Jane",
    lastName: "Smith"
}

const PrintFullName = function(hometown, state){
    console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state);
}

PrintFullName.call(name,"New York","NY");
PrintFullName.call(name2,"Los Angeles","CA");