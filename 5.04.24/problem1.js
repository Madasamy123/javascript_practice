//Given a array of string return the String which has the maximum length. arr = ["Ram", "Abraham", "Peter"] output is Abraham

function arr(num){
   let max=num[0];
  for(let i=0;i<num.length;i++){
if(max.length<num[i].length){
  max=num[i]
}
  }
  console.log(max)
   

} arr(["Ramdkcmdldcdddvfvfbf", "Abraham", "Peter","madasamymdcoemcoeoeeoeaddy"])



