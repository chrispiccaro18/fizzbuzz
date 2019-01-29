const test = QUnit.test;

function fizzBuzz(number) {
    if(number % 3 === 0) {
       return 'Fizz ' + number; 
    }
}


test('return Fizz + number when the number is divisible by 3', function(assert){
    const inputNumber = 3;
    const expected = 'Fizz 3';
    const result = fizzBuzz(inputNumber);
    assert.equal(result, expected); 
});