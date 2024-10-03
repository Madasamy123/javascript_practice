// length
let a="I Love India"
let b=a.length;
console.log(b)

//tostring()

let c=123;
let d=c.toString()
console.log(d)

//includes()

let e= "I am madasamy from Tirunelveli"
let f=e.includes("from")
console.log(f)

//slice()

let g="Tirunelveli is nature city"
let h=g.slice(15,21)
console.log(h)

//toLowerCase(), toUpperCase()

let i="I am Madasamy From Tirunelveli"
let j=i.toLocaleLowerCase()
let k=i.toUpperCase()
console.log(j)
console.log(k)

//replace()

let m="I am madasamy from Thenkasi"
let n=m.replace("Thenkasi","Tirunelveli")
console.log(n)


// for of
let movies = ["Inception", "Interstellar", "The Matrix"];
for(let first of movies){
    console.log(first)
}

//for each

let groceries = ["Milk", "Bread", "Eggs"];
groceries.forEach(function(item){
    console.log(item)
})

//map

let numbers = [1, 2, 3, 4];
let z=numbers.map(function (square){
    return square**2
})
console.log(z)

//filter

let ages = [12, 18, 25, 30, 16];
let y=ages.filter(function(imp){
    return imp>=18
})
console.log(y)

//length
let word=["madasamy","anand","suriya","muthu","murukesh"]
let v=word.length;
console.log(v)

// index
let fruits = ["Apple", "Banana", "Cherry"];
let ab=fruits.indexOf("Cherry");
console.log(ab)

// push
let fruit = ["Apple", "Banana"];
fruit.push("mango");
console.log(fruit)

//pop
let frut = ["Apple", "Banana","cherry"];
frut.pop()
console.log(frut)

//shift
let cart = ["Laptop", "Mouse","window"];
cart.shift() 
console.log(cart)

//unshift

let carts = ["Laptop", "Mouse","window"];
carts.unshift("cpu")
console.log(carts)

//join

let frruits = ["Apple", "Banana", "Cherry"];
let bc=frruits.join(", ")
console.log(bc)

//split

let fruuits = "Apple,mango,banana";
let cd=fruuits.split(",")
console.log(cd)