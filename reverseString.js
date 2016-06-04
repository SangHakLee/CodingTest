var str = "abcdef";

String.prototype.reverseString = function(){
	var array = this.valueOf().split("")
	return array.map(function(item, index, array){
		return array[(array.length -1 )-index]
	}).join('')
}

String.prototype.reverseString2 = function(){
	var size = this.length;
	var s = '';
	for(var i = size-1 ; i >= 0 ; i-- ){
		s += this.charAt(i)
	}
	return s
}

console.log(str.reverseString2());