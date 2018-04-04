console.log("hello from typescript (j'ai été compilé !!!)");

let a: number = 120 * 2;
let b: string = "hello world";
let c: boolean = true && false || true;
let d: number[] = [1, 2, 3, 55];
let e: string[] = ["a", "b", "c"];
let f: [number, boolean] = [1, true];
let g: any = {};
let userAddress: [number, string] = [100, "rue du pot"];

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);

type User = { name: string, age: number, hobbies: string[] };

let user1: User = {
  name: "gui",
  age: 37,
  hobbies: ["skate", "zik", "movies"]
};
let user2: User = {
  name: "42",
  age: 37,
  hobbies: ["skate", "zik", "movies"]
};

// let users: User[] = [user1, user2, {}]; // lève une erreur...
let users: User[] = [user1, user2];

function addNumbers(a: number, b: number): number {
  return a + b;
}

function printNomUser(u: User): void {
  console.log(u.name);
}

printNomUser(user1);
// addNumbers(42, "10");
addNumbers(42, 10);

let complex: { data: number[], output: (all: boolean) => number[] } = {
  data: [1, 2, 42],
  output: (all: boolean): number[] => {
    return this.data;
  }
};
