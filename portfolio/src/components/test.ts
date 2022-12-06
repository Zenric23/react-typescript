export function getArray(items : any[] ) : any[] {
    return new Array().concat(items);
}

let myNumArr = getArray([100, 200, 300]);
let myStrArr = getArray(["Hello", "World"]);

myNumArr.push(400); // OK
myStrArr.push("Hello TypeScript"); // OK

myNumArr.push("Hi"); // OK
myStrArr.push(500); // OK

console.log(myNumArr); // [100, 200, 300, 400, "Hi"]
console.log(myStrArr); // ["Hello", "World", "Hello TypeScript", 500]


// export function getArray<T>(items : T[] ) : T[] {
//     return new Array<T>().concat(items);
// }

// let myNumArr = getArray<number>([100, 200, 300]);
// let myStrArr = getArray<string>(["Hello", "World"]);

// myNumArr.push(400); // OK
// myStrArr.push("Hello TypeScript"); // OK    

// myNumArr.push("Hi"); // Compiler Error
// myStrArr.push(500); // Compiler Error


function displayType<T, U>(id:T, name:U): void { 
    console.log(typeof(id) + ", " + typeof(name));  
  }
  
  displayType<number, string>(1, "Steve"); // number, string


function displayNames<T>(names:T[]): void { 
    console.log(names.join(", "));  
}


displayNames<string>(["Steve", "Bill"]); // Steve, Bill


// https://www.tutorialsteacher.com/typescript/typescript-generic

// let num1:number = 1; 
    
// function letDeclaration() { 
// let num2:number = 2; 

// if (num2 > num1) { 
//     let num3: number = 3;
//     num3++; 
// } 

// while(num1 < num2) { 
//     let num4: number = 4;
//     num1++;
// }

// console.log(num1); //OK
// console.log(num2); //OK 
// console.log(num3); //Compiler Error: Cannot find name 'num3'
// console.log(num4); //Compiler Error: Cannot find name 'num4'
// }

// letDeclaration();

