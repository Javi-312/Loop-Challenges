// Print odds 1-20 //

for(var i=1; 1<20; i+=2) {
    console.log(i);
}

// Decreassing Multiples of 3 //

for(var i=100; i>-1; i--) {
    if(i % 3 == 0) {
        console.log(i);
    }
}

// Print the sequence //

for(var i=4; i>-4; i-=1.5) {
    console.log(i);
}

// Sigma //

var sum = 0;
for(var i=1; i<101; i++) {
    sum += i;
}

// Factorial //

var product = 1;
for(var i=1; i<13; i++) {
    product *= i;
}
console.log(product);

