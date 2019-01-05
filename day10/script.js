// tasks - part 2
var index=0, index2=0, temp="";

var arr1=["MAN", "and", "MAchiNe"];
var arr2=[1,2,3,4];

// task 1
var arr3=[];
for( index=0; index<arr2.length; ++index ){
    arr3.push(arr2[index]);
}
arr3.push(arr1[1], arr1[0], arr1[1], arr1[2]);

// task 2
console.log(arr3.join(" | "));

// task 3
var arr4=[];
for( index=0; index<arr3.length; ++index ){
    if( ( arr3[index] === 4 || arr3[index] === "and" || arr3[index] === "MAN" ) && !arr4.includes(arr3[index]) ){
        arr4.push(arr3[index]);
    }
}
console.log(arr4);
arr3.splice(1,3, 8, 16);
console.log(arr3);

// task 4
var strTemp=[], numTemp=[];
for( index=0; index<arr3.length; ++index ){
    if( typeof(arr3[index]) === "string" ){
        strTemp.push(arr3[index]);
    }else if( typeof(arr3[index]) === "number" ){
        numTemp.push(arr3[index]);
    }
}
strTemp.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
}); // sorts case insensitive
numTemp.reverse();
arr3.splice( 0, arr3.length); // empty array
arr3=strTemp.concat(numTemp); // append temp results
console.log(arr3);

// task 5
arr3.shift();
console.log(arr3);

arr3.push(7);
console.log(arr3);

arr3.splice(1,0, "madhusudan");
console.log(arr3);

arr3.pop("7");
console.log(arr3);