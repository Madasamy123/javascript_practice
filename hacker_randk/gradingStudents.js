function gradingStudents(grades) {
    // Write your code here
    
    for(let i=0;i<grades.length;i++){
    if(grades[i]<38){
        console.log(grades[i]);
    }
    else {
        
        let multipleOfFive=Math.ceil(grades[i]/5)*5;    // Math.ceil na decimal ku adutha number eduthu kodukum
        if(multipleOfFive-grades[i]<3){
            grades[i]=multipleOfFive
        }
        
          
    }
      
    }
    
return grades;

}console.log(gradingStudents([73]));
