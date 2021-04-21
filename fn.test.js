const fn = require("./fn");

// chapter 1
test("1 is 1", ()=>{
    expect(1).toBe(1);
});

test("2+ 5 = 7", ()=>{
    expect(fn.add(2,5)).toBe(7)
})

test("3 + 3 !== 7", ()=>{
    expect(fn.add(3,3)).not.toBe(7)
})

// toBe == Matcher

// chapter 2 
describe("Matcher study",()=>{
    // test("Object n Array can't use <toBe>func ", ()=>{
    //     expect(fn.makeUser("Dy",22)).toBe({name: "Dy", age: 22})
    // })
    
    test("Object n Array can't use <toBe>func ", ()=>{
        expect(fn.makeUser("Dy",22)).toEqual({name: "Dy", age: 22})
    })
    
    // test("Object n Array can't use <toBe>func ", ()=>{
    //     expect(fn.makeUser("Dy",22)).toStrictEqual({name: "Dy", age: 22})
    // })
})

// toBeNUll
// toBeUndefined
// toBeDefined

//toBeTruthy
//toBeFalsy

//toBeGreaterThan >
//toBeGreaterThanOrEqual >=
//toBeLessThan <
//toBeLessThanOrEqual <=
// 문자열 길이가 적당한지, 파일의 크기가 적당한 지 확인할 때 사용

test("0.1 + 0.2 = 0.3",()=>{
    expect(fn.add(0.1,0.2)).toBeCloseTo(0.3);
})

//test string
test("Can find 'H'word in 'Hello World'string",()=>{
    expect("Hello World").toMatch(/H/); // reguler expression
})
//toContain : test ['a','b','c']
//...
// toThrow
test("error", ()=>{
    expect(()=>fn.throwError()).toThrow("xx")
})

//https://jestjs.io/docs/en/expect

//chapter 3 비동기 코드 테스트
test("3sec after",(done)=>{
    function callBack(name){
        expect(name).toBe("Mike");
        done();
    }
    fn.getName(callBack)
})
//resolves, rejects matcher
test("3sec after",()=>{
    // fn.getAge().then(age =>{
    //     expect(age).toBe(20);
    // });
    return expect(fn.getAge()).resolves.toBe(20);
})
// async await
test("3sec after", async ()=>{
    await expect(fn.getAge()).resolves.toBe(20);
})

//chapter4 테스트 전후 작업 

let num = 0;
// run before test function
// 주기적으로 값을 초기화하는데 유용
beforeEach(()=>{
    num = 0;
})
// run after test function
afterEach(()=>{
    num = 0;
})

// 모든 테스트 함수가 실행되기 전/후 한번만 호출됨
// beforeAll
// afterAll

//describe()

//test.only()
//test.skip() // == remark