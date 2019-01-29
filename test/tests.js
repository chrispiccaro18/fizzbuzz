const test = QUnit.test;

function fizzBuzz(number) {
    const fizz = 'Fizz';
    const buzz = 'Buzz';
    const space = ' ';
    
    if(number % 15 === 0) {
        return fizz + buzz + space + number;
    } else if(number % 3 === 0) {
        return fizz + space + number; 
    } else if(number % 5 === 0) {
        return buzz + space + number;
    }
    return number;
}

test('return number if number is not divisible by 3, 5,or 15', function(assert){
    const inputNumber = 7;
    const result = fizzBuzz(inputNumber);
    const expected = inputNumber;
    assert.equal(result, expected);
});

test('return FizzBuzz + number if number is divisible by 15', function(assert) {
    const inputNumber = 15;
    const result = fizzBuzz(inputNumber);
    const expected = 'FizzBuzz 15';
    assert.equal(result, expected);
});

test('return Buzz + number if number is divisible by 5', function(assert) {
    const inputNumber = 5;
    const result = fizzBuzz(inputNumber);
    const expected = 'Buzz 5';
    assert.equal(result, expected);
});

test('return Fizz + number when the number is divisible by 3', function(assert){
    const inputNumber = 3;
    const expected = 'Fizz 3';
    const result = fizzBuzz(inputNumber);
    assert.equal(result, expected); 
});
