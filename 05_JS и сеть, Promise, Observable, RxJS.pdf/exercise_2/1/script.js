// Seive solution
function getPrimes() {
    const num = 100;
    const seive = [];  //для записи удаленных чисел
    const primes = []; //для записи простых чисел
    
    for (let i = 2; i <= num; i++) {
      if (!seive[i]) {
        primes.push(i);
        for (let j = i * i; j <= num; j += i) {
          seive[j] = true;
        } 
      }
    }
    
    
    return primes;
  }
  
  console.log(getPrimes());
