for (let index = 1; index <= 222; index++) {

    if (index%5==0 && index%7==0){
        console.log("FooBar");
    } 
    
    else if (index%5==0){
        console.log("Foo");
    } 
    
    else if (index%7==0){
        console.log("Bar");
    } 
    
    else {
        console.log(index);
    }
}
