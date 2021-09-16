const utils = require('./index')
const {isEvenNumberAsync} = require("./index");

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact',
      () => {
        const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
        const actual = utils.trimProperties(input)
        expect(actual).not.toMatchObject(input)
        expect(input).toBe(input)
        expect(actual).toBe(actual)
      })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed',
      () => {
          const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
          const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
          const actual = utils.trimPropertiesMutation(input)
          expect(actual).toEqual(expected)
      })
  test('[4] the object returned is the exact same one we passed in',
      () => {
          const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
          utils.trimProperties(input)
          expect(input).toBe(input)
      })
})

describe('[Exercise 3] findLargestInteger', () => {
   test('[5] returns the largest number in an array of objects { integer: 2 }',
       () => {
       const input = [{integer: 1}, {integer: 5}, {integer: 10}]
       const expected = 10
       const actual = utils.findLargestInteger(input)
       expect(actual).toEqual(expected)
       })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3)
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count',
      () => {
      expect(counter.countDown()).toBe(3)
      })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one',
      () => {
          counter.countDown()
      expect(counter.countDown()).toEqual(2)
      })
  test('[8] the count eventually reaches zero but does not go below zero',
      () => {
      counter.countDown()
          counter.countDown()
          counter.countDown()
          counter.countDown()
          expect(counter.countDown()).toEqual(0)
      })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons()
  })
   test('[9] the FIRST call of seasons.next returns "summer"',
       () => {

       expect(seasons.next()).toEqual('summer')
       })
   test('[10] the SECOND call of seasons.next returns "fall"',
       () => {
       seasons.next()
           expect(seasons.next()).toEqual('fall')
       })
   test('[11] the THIRD call of seasons.next returns "winter"',
       () => {
           seasons.next()
           seasons.next()
           expect(seasons.next()).toEqual('winter')
       })
   test('[12] the FOURTH call of seasons.next returns "spring"',
       () => {
           seasons.next()
           seasons.next()
           seasons.next()
           expect(seasons.next()).toEqual('spring')
       })
   test('[13] the FIFTH call of seasons.next returns again "summer"',
       () => {
           seasons.next()
           seasons.next()
           seasons.next()
           seasons.next()
           expect(seasons.next()).toEqual('summer')
       })
   test('[14] the 40th call of seasons.next returns "spring"',
       () => {
           for (let i = 0; i < 39; i++) {
               seasons.next();
           }
           expect(seasons.next()).toEqual("spring");
       })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30)
  })
    test("[15] driving the car returns the updated odometer", () => {
        expect(focus.drive(100)).toBe(100);
    });
    test("[16] driving the car uses gas", () => {
        expect(focus.drive(600)).toBe(600);
        expect(focus.drive(800)).not.toBe(800);
    });
    test("[17] refueling allows to keep driving", () => {
        focus.drive(600);
        expect(focus.refuel(10)).toBe(300);
    });
    test("[18] adding fuel to a full tank has no effect", () => {
        expect(focus.refuel(99)).toBe(600);
    });
})

describe('[Exercise 7] isEvenNumberAsync', () => {
   test('[19] resolves true if passed an even number',
       async () => {
       const number = await isEvenNumberAsync(10)
       expect(number).toBe(true)
       })
   test('[20] resolves false if passed an odd number',
       async () => {
           const number = await isEvenNumberAsync(9)
           expect(number).toBe(false)
       })
})
