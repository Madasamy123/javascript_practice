// You are building a cart page for your website. The website sells
// Mug - M - 500 INR Per piece
// Jeans - J - 3000 INR Per piece
// T shirt - T - 1500 INR Per piece
// Pen - P - 10 INR Per piece


// input: arr = ["M 3", "J 1", "T 2"]

// Output
// 7500

function sumnum(cart){
    let total=0
    for(let i=0;i<cart.length;i++){
        let first=cart[i].split(" ")
        console.log(first)
       

        switch(first[0]){
            case "M":
                total+=first[1]*500
                break;
            case "J":
                total+=first[1]*3000
                break;
            case "T":
                total+=first[1]*1500
                break;
            
            case "P":
                total+=first[1]*10
                

        }
        
    }
    console.log(total)

}sumnum(["M 3", "J 1", "T 2"])