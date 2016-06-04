//BubbleSort.js

Array.prototype.BubbleSort = function(){
	var i, j, flag;
	console.log(this);
	var size = this.length;
	for(i = 0; i < size-1 ; i++){
		flag = 0;
		for(j = 0; j < size-1-i; j++){
			if(this[j] > this[j+1]){
				var tmp = this[j];
				this[j] = this[j+1];
				this[j+1] = tmp;
				flag = 1;
			}
		}
		if(!flag){
			break;
		}
	}
	return this;
}


var array = [1,2,3,4,5,6];
var array = [6,5,4,3,2,1];
console.log(array.BubbleSort());