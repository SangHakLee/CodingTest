// QuickSort.js

var quickSort = function(array, l, r){
	var left, right, mid, pivot;
	left = l;
	right = r;
	mid = parseInt((left+right)/2);
	pivot = array[mid];
	do{
		while(array[left] < pivot)
			left++;
		while(array[right] > pivot)
			right--;
		if(left <= right){
			var temp = array[left]
			array[left] = array[right]
			array[right] = array[left]
			left++; right--;
		}
	}while( left <= right )

	if(l < right)
		quickSort(array, left, pivot-1)
	if(r > left)
		quickSort(array, pivot+1, right)

}


var array = [5,31,66,4,8,1]
console.log(quickSort(array, 0, 5))