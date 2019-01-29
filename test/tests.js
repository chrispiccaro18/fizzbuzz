const test = QUnit.test;

function fizzBuzz(number) {
    if(number % 3 === 0) {
        return 'Fizz';
    }
}
test('returns Fizz if number is divisible by 3', function(assert) {
    const inputNumber = 3;
    const result = fizzBuzz(inputNumber);
    const expected = 'Fizz';
    assert.equal(result, expected);
});