const arrayNum = [1, 2, 3, 4];

function evens(arrayNum){
    return arrayNum.filter((number) => number % 2 === 0 )
}

console.log(evens(arrayNum));