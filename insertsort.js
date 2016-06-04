//insertsort.js

Array.prototype.insertsort = function(){
	var i, j, key // 키는 비교인덱스
	for(i = 1 ; i < this.length; i++){
		key = this[i];
		j = i-1;
		while( j>=0 && this[j] > key){
			this[j+1] = this[j]
			j--
		}
		this[j+1] = key
	}
	return this
}

var array = [4,1,8,2,10];
console.log(array.insertsort());
