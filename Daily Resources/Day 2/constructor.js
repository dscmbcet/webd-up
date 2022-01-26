function Person(name,age,place){
    this.name=name;
    this.age=age;
    this.place=place;
    this.display= function(){
        console.log("Name : "+this.name+" Age : "+this.age)
    }
}

var aromal= new Person("Aromal",21,"Kollam")

aromal.display()