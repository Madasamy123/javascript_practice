//3. Write a function printMultiplicationTable that takes a number n, range r and prints the multiplication table for that number in reverse order.
//For example, if n =5 and r = 6
//Expected O/P
//5 * 6 = 30
//5 * 5 = 25
//5 * 4 = 20
//5 * 3 = 15
//5 * 2 = 10
//5 * 1 = 5

function printMultiplicationTable(n,r){
    let i=1;
    while(r>=1){
        console.log(r+"*"+n+"="+r*5);
        r--;
    }

}printMultiplicationTable(5,6)