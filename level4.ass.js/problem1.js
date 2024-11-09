// You are building a cart page for your website. The website sells
// Mug - M - 500 INR Per piece
// Jeans - J - 3000 INR Per piece
// T shirt - T - 1500 INR Per piece
// Pen - P - 10 INR Per piece


// input: arr = ["M 3", "J 1", "T 2"]

// Output
// 7500



function cart(arr) {
  
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        const splArr = arr[i].split(' ');
        switch (splArr[0]) {
            case 'M':
                total += Number(splArr[1]) * 500
                break;

            case 'J':
                total += Number(splArr[1]) * 3000
                break;

            case 'T':
                total += Number(splArr[1]) * 1500
                break; 

            case 'P':
                total += Number(splArr[1]) * 10
                break;
        }
   
    }
     console.log(total)


  

    
} cart(["M 3", "J 1", "T 2"])




