document.write("3.to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array."+"<br>");
function test3(arr,n){
    if(n==null){
        return arr[0];
    }
    if(arr==1 || n<0)
    {
        return [];
    }
    // if(n<0){
    //     return [];
    // }
    return arr.slice(0,n);
}
document.write(test3([7,9,0,-2],3)+"<br>");
document.write(test3([7,9,0,-2])+"<br>");
console.log(test3([],3));                                  //please check console
console.log(test3([7,9,0,-2],-3));
document.write(test3([7,9,0,-2],6)+"<br><br>");