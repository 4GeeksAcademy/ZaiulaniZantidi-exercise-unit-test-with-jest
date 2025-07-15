

test("One euro should be 1.07 dollars", function() {
    
    const { fromEuroToDollar } = require('./convert.js');

    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07; 
    
     expect(fromEuroToDollar(3.5)).toBe(3.745);
})


test("One dollar should be 147.72 yen", function() {
    
    const { fromDollarToYen } = require('./convert.js');
    
    const yen = fromDollarToYen(3.5);

    const expected = 3.5 * 147.72; 
    
     expect(fromDollarToYen(3.5)).toBe(517.02);
})


test("One yen should be 0.0050 pounds", function() {

    const { fromYenToPound } = require('./convert.js');

    const dollars = fromYenToPound(600);

    const expected = 600 * 0.0050; 
    
     expect(fromYenToPound(600)).toBe(3);
})