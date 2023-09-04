function fibRec(n){
    if ( n==0 ) return 0;
    if ( n==1 ) return 1;
    if ( n>1 ) return (fibRec(n-2)+fibRec(n-1));
  }
  
  function fibItera(n){
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    }
  
    const fibSeries = [0, 1];
    for (let i = 2; i < n; i++) {
      const nextFib = fibSeries[i - 1] + fibSeries[i - 2];
      fibSeries.push(nextFib);
    }
  
    return fibSeries;
  }
  
function palindrom(text){
    text = text.toLowerCase();
    text = text.replaceAll(",","");
    const myArray = text.split(" ");
    console.log(myArray);
}

const n = 10;
const fibSeries = fibItera(n);
let text = "Hola muy buenos dias, un gusto conocerte"
console.log(`La serie de Fibonacci hasta el término ${n} es: ${fibSeries.join(', ')}`);
console.log(`La serie de Fibonacci hasta el término ${n} es: ${fibRec(n)}`);
palindrom(text);