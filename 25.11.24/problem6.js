// You are building a cart page for your website. The website sells
// Mug - M - 500 INR Per piece
// Jeans - J - 3000 INR Per piece
// T shirt - T - 1500 INR Per piece
// Pen - P - 10 INR Per piece


// input: arr = ["M 3", "J 1", "T 2"]

// Output
// 7500

function sumNum(arr){
    let total=0
    for(let i=0;i<arr.length;i++){
        let first=arr[i].split(" ")
      if(first[0]=="M"){
        total+=first[1]*500
      }
      else if(first[0]=="J"){
        total+=first[1]*3000
      }
      else if(first[0]=="T"){
        total+=first[1]*1500
      }
      else if(first[0]=="P"){
        total+=first[1]*10
      }

    }
console.log(total)

}sumNum(["M 3", "J 1", "T 2"])