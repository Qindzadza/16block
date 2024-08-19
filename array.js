const numberArray=[1,2,3,4,5];
//
// numberArray.forEach(number=>{
//     console.log(number)
// })
// result
// 1 
// 2 
// 3 
// 4 
// 5 
numberArray.forEach((number, index)=>{
    console.log(number,index)
})
// result
// 1 0
// 2 1
// 3 2
// 4 3
// 5 4

const nameArray=["Mike","John","Michael","Gela"];

const foundName=nameArray.find(name=>{
    return name==="John"
});
console.log(foundName);

const array=[1,2,3,4];

const newA=array.map(x=>{
      return x*2;
})
// map creates  a new arraay

console.log(newA);

const words=["hello","name","again"];
const result=words.filter(word=>word.length>4);
console.log(result);


const animals=["ant", "bison", "camel","duck","elephant"];
console.log(animals.slice(2));
console.log(animals.slice(2,4));


// reduce
const numberForReduce=[3,2,6,9];

// let initialValue=0;
// const sumvalue=numberForReduce.reduce((accumulator,currentvalue)=>{
//     return initialValue=accumulator+currentvalue;
    
// })

const sumvalue=numberForReduce.reduce((accumulator,currentvalue)=>{
   accumulator= accumulator+currentvalue;
   return accumulator;
},1)

console.log(sumvalue)


const search=[{id:1 ,name:"hee",price:5 },
    {id:2 ,name:"heio",price:5 },
    {id:2 ,name:"hoo",price:5 },
    {id:4 ,name:"hii",price:5 },

]

const user=prompt("write product name ");

const found=search.find(x=>x.name===user);
if(found){
    console.log(`we found it.`)
    console.log(found.price)
}else{
    console.log("we dont have it")
}


