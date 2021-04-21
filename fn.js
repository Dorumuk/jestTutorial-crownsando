const fn = {
    add : (x,y) => x+y,
    makeUser : (name,age) => ({name :name, age: age, gender: undefined}),
    throwError: ()=> {throw new Error("xx");},
    getName: (callBack)=> {
        const name = "Mike";
        setTimeout(()=>{
            callBack(name)
        },3000)
    },
    getAge: () =>{
        const age= 20;
        return new Promise((res, rej)=>{
            setTimeout(()=>{
                res(age);
            },3000)
        })
    }
}

module.exports = fn;