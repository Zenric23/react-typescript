// GENERIC
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


export function displayType<T, U, Y>(id:T, name:U, isOld:Y): void { 
    console.log(typeof(id) + ", " + typeof(name) + ", " + typeof(isOld));  
  }
  
  displayType<number, string, boolean>(1, "Steve", true); // number, string


function displayNames<T>(names:T[]): void { 
    console.log(names.join(", "));  
}


displayNames<string>(["Steve", "Bill"]); // Steve, Bill

// TUPLE
var employee: [number, string] = [1, "Steve"];
employee[1] = employee[1].concat(" Jobs"); 
console.log(employee); //Output: [1, 'Steve Jobs']

//UNION
let code: (string | number);
code = 123;   // OK
code = "ABC"; // OK
code = false; // Compiler Error

let empId: string | number;
empId = 111; // OK
empId = "E111"; // OK
empId = true; // Compiler Error

// function displayType(code: (string | number))
// {
//     if(typeof(code) === "number")
//         console.log('Code is number.')
//     else if(typeof(code) === "string")
//         console.log('Code is string.')
// }


// displayType(123); // Output: Code is number.
// displayType("ABC"); // Output: Code is string.
// displayType(true); //Compiler Error: Argument of type 'true' is not assignable to a parameter of type string | number


// ANY
let arr: any[] = ["John", 212, true]; 
arr.push("Smith"); 
console.log(arr); //Output: [ 'John', 212, true, 'Smith' ] 


// https://www.tutorialsteacher.com/typescript/typescript-generic

