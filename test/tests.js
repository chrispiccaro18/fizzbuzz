const test = QUnit.test;

function fizzBuzz(number) {
    if(number % 15 === 0) {
        return 'FizzBuzz';
    } else if(number % 3 === 0) {
        return 'Fizz';
    } else if(number % 5 === 0) {
        return 'Buzz';
    }
    return number;
}
test('returns Fizz if number is divisible by 3', function(assert) {
    const inputNumber = 3;
    const result = fizzBuzz(inputNumber);
    const expected = 'Fizz';
    assert.equal(result, expected);
});
test('returns Buzz if number is divisible by 5', function(assert) {
    const inputNumber = 5;
    const result = fizzBuzz(inputNumber);
    const expected = 'Buzz';
    assert.equal(result, expected);
});
test('returns FizzBuzz if number is divisible by 3 & 5', function(assert) {
    const inputNumber = 15;
    const result = fizzBuzz(inputNumber);
    const expected = 'FizzBuzz';
    assert.equal(result, expected);
});
test('returns number if number is not divisible by 3 or 5', function(assert){
    const inputNumber = 1;
    const result = fizzBuzz(inputNumber);
    const expected = inputNumber;
    assert.equal(result, expected);
});