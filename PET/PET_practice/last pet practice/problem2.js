//Find the Sum of first n even numbers sumOfNEven(5) prints 30 (which is 2 + 4 + 6 + 8 + 10)

function value(num){
    let a=num.toString()
    let b=a.split('')
    let sum=0;
    for(let i=0;i<b.length;i++){
    let v=Number(b[i])**b.length
      sum+=v
    }
    console.log(sum)


}value(1234)