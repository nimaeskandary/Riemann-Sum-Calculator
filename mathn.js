initVar = {
	f:'', //integrand
	l:'', //lower bound
	u:'', //upper bound
	i:''  //intervals
}

////
//save the button inputs to variables
////
$(document).on('click','.f',function(){ 
	initVar.f = prompt('What is the Integrand?');
});
$(document).on('click','.l',function(){
	initVar.l = eval(prompt('What is the Lower Bound?'));
});
$(document).on('click','.u',function(){
	initVar.u = eval(prompt('What is the Upper Bound?'));
});
$(document).on('click','.i',function(){
	initVar.i = eval(prompt('How many Intervals?'));
});

$(document).on('click','.ct',function(){ //calculate trapezoidal button
	var number = 0; 
	var width = ((initVar.u - initVar.l) / initVar.i); //interval width : (lower bound - upper bound) / # of intervals
	var counter = initVar.i; 
	for(var i=initVar.l;i<initVar.u;i+=width){ //this loop start the variable i at the lower bound, and repeats while adding the interval width to i
		if(counter > 0){ //this counter makes sure the amount of rectangles added are the same as the interval number
			number = number + ((evaluate(i) + evaluate(i+width))/2); //uses the average of the left and right hand sum
			counter--;
		}
	}
	alert(number * width); //multiplies the heights by the rectangle width and returns the final answer
});

$(document).on('click','.cl',function(){ //calculate left hand button
	var number = 0; 
	var width = ((initVar.u - initVar.l) / initVar.i); //interval width : (lower bound - upper bound) / # of intervals
	var counter = initVar.i; 
	for(var i=initVar.l;i<initVar.u;i+=width){ //this loop start the variable i at the lower bound, and repeats while adding the interval width to i
		if(counter > 0){ //this counter makes sure the amount of rectangles added are the same as the interval number
			number = number + ((evaluate(i))); //adds left hand rectangle height to the sum
			counter--;
		}
	}
	alert(number * width); //multiplies the heights by the rectangle width and returns the final answer
});

$(document).on('click','.cr',function(){ //calculate right hand button
	var number = 0; 
	var width = ((initVar.u - initVar.l) / initVar.i); //interval width : (lower bound - upper bound) / # of intervals
	var counter = initVar.i; 
	for(var i=initVar.l;i<initVar.u;i+=width){ //this loop start the variable i at the lower bound, and repeats while adding the interval width to i
		if(counter > 0){ //this counter makes sure the amount of rectangles added are the same as the interval number
			number = number + ((evaluate(i+width))); //adds right hand rectangle height to the sum
			counter--;
		}
	}
	alert(number * width); //multiplies the heights by the rectangle width and returns the final answer
});

$(document).on('click','.cm',function(){ //calculate midpoint button
	var number = 0; 
	var width = ((initVar.u - initVar.l) / initVar.i); //interval width : (lower bound - upper bound) / # of intervals
	var counter = initVar.i; 
	for(var i=initVar.l;i<initVar.u;i+=width){ //this loop start the variable i at the lower bound, and repeats while adding the interval width to i
		if(counter > 0){ //this counter makes sure the amount of rectangles added are the same as the interval number
			number = number + ((evaluate(i+(width/2)))); //uses height between the left and right hand points
			counter--;
		}
	}
	alert(number * width); //multiplies the heights by the rectangle width and returns the final answer
});

var evaluate = function(x){
	var e = initVar.f.replace('x',x);
	e = e.replace('pow','Math.pow');
	e = e.replace('sin','Math.sin');
	e = e.replace('cos','Math.cos');
	e = e.replace('tan','Math.tan');
	e = e.replace('arctan','Math.atan');
	e = e.replace('arcsin','Math.asin');
	e = e.replace('arccos','Math.acos');
	return eval(e);
}

