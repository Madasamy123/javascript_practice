function lcm(n1,n2){
    let larger=n1;
    let smaller=n2;
    let lcm=larger;
    while(lcm%smaller!==0){
        lcm=lcm+larger;
    }
    return lcm
    
}
let result=lcm(16,9)
console.log(result)