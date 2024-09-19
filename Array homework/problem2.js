//You are given an array of student grades. Write a function that calculates the average grade.
 let mark=[10,20,30,40,50]
 let num=0;
 let average;
 for(i=0;i<mark.length;i++){
    num=num+mark[i]
    average=num/mark.length
 }console.log(average)