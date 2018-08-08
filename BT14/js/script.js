var A = calculator.math;

var B = calculator.result;

function backspace(){
	A.value = A.value.slice(0, -1);
}

function reset(){
	B.value = "";
	A.value = "";
}

function equalto(){
	B.value = eval(A.value);
}
