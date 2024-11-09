//Given array two arrays student names and scores, return the student name who has the maximum
// score eg names=["sanjay", "priya", "ramesh", "sanjana"], scores = [88, 45, 71, 91] Answer sanjana

function arrs(names,score){
let lar=0;
for(let i=0;i<score.length;i++){
    if(lar<score[i]){
        lar=score.indexOf(score[i]);
       
    

    }

}
 ch=names[lar];
console.log(ch)

}arrs(["sanjay", "priya", "ramesh", "sanjana"], [88, 45, 71, 91] )

