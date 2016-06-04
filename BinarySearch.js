// BinarySearch.js
Array.prototype.BinarySearch = function(x){
	var self = this;
	var size = self.length;
	var low, high, mid, index=-1;
	low = 0;
	high = size -1;
	while(low <= high && index == -1){
		mid = parseInt( (low+high)/2 );
		if( x == self[mid] )
			index = mid;
		else if( x < self[mid] )
			high = mid-1;
		else
			low = mid+1;
	}
	return index;
}

var array = [1,5,12,16,33,93]
console.log(array.BinarySearch(1))