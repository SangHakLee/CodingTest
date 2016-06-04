

function Stack(size){
	this.size = size;
	this.top = -1 ; //초기에 맨위는 -1 아무것도 없는거
	this.array = new Array(this.size);
}

Stack.prototype.push = function(n){
	console.log(this.size)
	console.log(this.top)
	if(!this.isFull()){ // 가득차지 않으면
		this.top++;
		this.array[this.top] = n;
	}
	return false // 오버플로우
}

Stack.prototype.pop = function(){
	if(!this.isEmpty()){
		this.array[this.top] = undefined;
		this.top--;
	}
	return false // 언더플로우
}

Stack.prototype.isFull = function(){
	if( this.size <= this.top )
		return true;
	return false;
}

Stack.prototype.isEmpty = function(){
	if( this.top == -1 )
		return true;
	return false;
}

var stack = new Stack(5);
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)
stack.push(7)
stack.push(8)
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()
console.log(stack);
