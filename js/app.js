// 1 masala

// 2 masala

let num = 256;

num = num.toString()

console.log(num);

// 3 masala

// 4 masala

let xnum = Number(prompt('soni kiriting'))

let result = '';

if (xnum % 2 == 0) {
    result = 'juft son'
    console.log(result);
} else if (xnum % 2 != 0) {
    result = 'toq son'
    console.log(result);
}

// 5 masala

// 6 masala

// 7 masala

// 8 masala

let max = function (...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}

console.log(max(2, 5, 9, 4));

// 9 masala

let arr = [2,5,9,4]

let number = (arr) => {
    let max = Math.max.apply(null, arr);
    let min = Math.min.apply(null, arr);
}

// 10 masala

// 11 masala

// 12 masala

