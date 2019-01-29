const test = QUnit.test;

function fizzBuzz(number) {
    if(number % 15 === 0) {
        return 'FizzBuzz ' + number;
    } else if(number % 3 === 0) {
        return 'Fizz ' + number; 
    } else if(number % 5 === 0) {
        return 'Buzz ' + number;
    }
}

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
