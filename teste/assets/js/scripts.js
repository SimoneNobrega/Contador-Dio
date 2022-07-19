var currentNumberWrapper = document.getElementById('currentNumber');
var increment = document.getElementById('increment');
var decrement = document.getElementById('decrement');
var count = 0;

increment.addEventListener('click', function increment() {
    count++;
    if (count <= 10) {
        currentNumberWrapper.innerHTML = count;
    }

    if (count >= 0) {
        currentNumberWrapper.classList.remove('nagtive');
    }
}
)

decrement.addEventListener('click', function decrement (){
    count--;
    if (count >= -10){
        currentNumberWrapper.innerHTML = count;
    }
    if (count < 0){
        currentNumberWrapper.classList.add('negative');
    }
})