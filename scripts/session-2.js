// Object constructor

function Student(name,email,age){
    //properties = values
    this.name = name;
    this.email=email;
    this.age = age;
}

// creating the object

// let objName = new Constructor("value1","value2","value3");
let student1 = new Student("Leo","lmiranda@sdgku.edu",80);

console.log(student1);

let student2 = new Student("May", "something@something",40)

let student3 = new Student("Tay", "something@something",50)