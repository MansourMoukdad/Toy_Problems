<<<<<<< HEAD
// Write a function called  averageAge that accpets an array of 
//objects and return the average ages for the people who are between 18 and 50
 


=======
// Write a function called  averageAge that accpets an array of objects and return the average ages for the people who are between 18 and 50
 

>>>>>>> 527cc09c05ce6b99d3ff750199ad72f2585e7160
 var people = [ 
       {name: {first: 'Ahmad', middle: 'B.', last: 'AlAhmad'}, age: 85}, 
       {name: {first: 'Amer', last: 'MHD'}, age: 43}, 
       {name: {first: 'Aya', last: 'Sultan'}, age: 36}, 
       {name: {first: 'Hadeel', middle: 'E.', last: 'Lami'}, age: 44}, 
       {name: {first: 'Hadeel', middle: 'E.', last: 'Lami'}, age: 54}, 
       {name: {first: 'Lina', last: 'MHD'}, age: 14} ,
       {name: {first: 'Obada', last: 'Eddin'}, age: 24} 
 ]; 
<<<<<<< HEAD
 //function each(array, func) {
//	  for (var i = 0; i < array.length; i++) {
//	    func(array[i], i);
//	  }
//	  for(var key in object){
//	  	func(object[i],i);
//	  }
//	}


 function averageAge(array){
 	var total=0;
 	var i=array[0];
 	for(var i =0; i<array.length; i++){
 		if(array[i]>=18 && array[i]<=50){
 		total=total+ array[i];
 	}
 }return total/array.length
 }

  averageAge(people); // 43+36+44+24 = 36.74
=======
 function averageAge(people) { 
       // YOUR CODE HERE 
 }

 averageAge(people); // 43+36+44+24 = 36.74
>>>>>>> 527cc09c05ce6b99d3ff750199ad72f2585e7160
