// This time no story, no theory. The examples below show you what 
//do you need, write a function to accomplich that
// Examples:

// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

    function accum(input){
    	
    	var result = " ";
    	
    	var dash = "-";
    	
    	var counter = input[i]+1;
    	
    	for(var i = 0 ; i<input.length;i++){
    	
    		result=result  + dash + counter ;
    	
    		counter = counter +1
    
    	}
    	
    	return result + dash + ;

    
    }