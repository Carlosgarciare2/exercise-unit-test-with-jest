const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    expect(fromEuroToDollar(3.5)).toBe(4.20);
});

test("One dollar should be 106.58 yens", function(){
    expect(fromDollarToYen(1)).toBe(106.58);
});

test("One yen should be 0.00 pound", function(){
    expect(fromYenToPound(10)).toBe(0.06);
});