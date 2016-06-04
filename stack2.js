/**
    스택(Stack) 자료구조 입니다.
    스택 생성시 스택의 크기를 정해놓고 생성을 하며, 그 이상의 데이터를 넣을 수 없습니다.

    push    : 스택에 데이터 넣기
    pop     : 스택에서 데이터 빼기
    reset   : 스택 초기화
    isFull  : 스택이 꽉 찼는지 여부
    isEmpty : 스택이 비어있는지 여부
    count   : 스택에 넣어진 데이터의 개수
 */
function Stack(capacity){
    this.capacity = capacity+1;
    this.buffer = new Array(this.capacity);
    this.topIndex = -1;
};
Stack.prototype.push = function(obj){
    if( false==this.isFull() ){
        this.topIndex++;
        this.buffer[this.topIndex] = obj;
        return true;
    }
    return false;
};
Stack.prototype.pop = function(){
    if( false==this.isEmpty() ){
        ret = this.buffer[this.topIndex];
        this.buffer[this.topIndex] = undefined;
        this.topIndex--;
        return ret;
    }
    return null;
};
Stack.prototype.reset = function(){
    this.topIndex = -1;
}
Stack.prototype.isFull = function(){
    if( (this.topIndex+1)>=this.capacity ){
        return true;
    }
    return false;
}
Stack.prototype.isEmpty = function(){
    if( this.topIndex==-1 ){
        return true;
    }
    return false;
}
Stack.prototype.count = function(){
    return (this.topIndex+1);
}
Stack.prototype.toString = function(){
    str = "";
    str += "capacity : "+this.capacity;
    str += ", count : "+this.count();
    str += ", topIndex : "+this.topIndex;
    str += ", [";
    for(index=this.topIndex; index>-1; index--){
        str += this.buffer[index];
        if( index>0 ){
            str += ", ";
        }
    }
    str += "]";
    return str;
}
/**
    스택 예제코드
 */
var stack = new Stack(8);

console.log(stack.toString());
console.log("push 'A': "+stack.push("A"));
console.log("push 'B': "+stack.push("B"));
console.log("push 'C': "+stack.push("C"));
console.log("push 'D': "+stack.push("D"));
console.log("push 'E': "+stack.push("E"));
console.log("push 'F': "+stack.push("F"));
console.log("push 'G': "+stack.push("G"));
console.log("push 'H': "+stack.push("H"));
console.log("push 'I': "+stack.push("I"));
console.log("push 'J': "+stack.push("J"));
console.log("push 'K': "+stack.push("K"));
console.log(stack.toString());
console.log("pop : "+stack.pop());
console.log("pop : "+stack.pop());
console.log(stack.toString());
console.log("push '1': "+stack.push("1"));
console.log("push '2': "+stack.push("2"));
console.log("push '3': "+stack.push("3"));
console.log(stack.toString());
stack.reset();
console.log(stack.toString());