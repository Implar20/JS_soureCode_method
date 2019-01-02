	//reverse源码
function reverse(arr) {
	for(var i = 0; i < arr.length / 2; i ++) {
		var temp = arr[i];
		arr[i] = arr[arr.length - i - 1];
		arr[arr.length - i - 1] = temp;
	}
}