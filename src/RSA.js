
function modInverse(e , phi){
    var mO = phi, t, q;
    var xO = 0, x1 = 1;

    if(phi == 1){
        return 0;
    }

    while( e > 1){
        q = Math.floor(e / phi);
        t = phi;
        phi = e% phi , e = t;

        t = xO;
        xO = x1 - q * xO;

        x1 = t;
    }

    if(x1 < 0){
        x1 += mO;
    }

    return x1;
}

function isPrime(n){
    if(n <= 1) return false;
    if(n <= 3) return true;

    if(n%2 == 0 || n%3 == 0){
        return false;
    }

    for(let i = 5; i*i <= n; i = i+6){
        console.log(i, n)
        if(n%i == 0 || n%(i+2) == 0){
            return false;
        }
    }

    return true;
}

function RsaKeys(p, q){
if(! (isPrime(p) && isPrime(q))){
    return;
}
if(q == p){
    return;
}

let n = q*p;
let phi = (p-1) * (q-1);
let e = 3;
let d = modInverse(e, phi);

return [[e,n], [d, n]];
}

console.log(RsaKeys(5, 11));