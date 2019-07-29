const Arrowfunctions=(x)=>{
    return x*x
}
console.log(Arrowfunctions(4));


const Arrowfunctions2 = (x) => x*x
console.log(Arrowfunctions2(10));

/*const abc={
    name:"abc",
    age:26,
    cities:["Bangalore","Margao","Dharwad"],
    getfirstname(a,b){
        return a+b;

    }
}*/

const multiplierobj={
    numbers:[2,4,6,8,10],
    multiplyBy:3,
    multiply(){
       return this.numbers.map((number) => 
       { return this.multiplyBy * number})
    }
}
console.log(multiplierobj.multiply())