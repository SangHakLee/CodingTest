// SelectSort.js

Array.prototype.SelectSort = function(){
	var i, j, min;
	var size = this.length;
	for(i=0; i < size; i++){
		min = i;
		for( j=i+1; j<size; j++){
			if(this[j] < this[min]){
				min = j;
			}
		}
		var tmp = this[i]
		this[i] = this[min]
		this[min] = tmp;
	}
	return this
}

var array = [6,5,4,3,2,1]

console.log(array.SelectSort())