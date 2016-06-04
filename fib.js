function fib1(n){
	if(n <= 1){
		return n;
	}else{
		return fib1(n-1) + fib1(n-2);
	}
}

console.log(fib1(4));

function fib2(n){
	var arr = new Array(n)
	// console.log(arr);
	arr[0] = 1;
	if( n > 0 ) {
		arr[1] = 1;
		for(var i = 2 ; i <= n ; i++)
			arr[i] = arr[i-1] + arr[i-2];
		// console.log(arr);
	}
	return arr[n-1]
}

console.log(fib2(4));

function fib3(n){
	var a = 1, b = 1, c = 1;
	for( var i = 3 ; i <= n; i ++){
		c = a + b;
		a = b;
		b = c;
	}
	return c;
}
console.log(fib3(4));