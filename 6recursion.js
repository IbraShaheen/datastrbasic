// The sum is 83

let numbers = [
    [1, 2, 3, 4],
    [3, 6, [5, 6], 8, 2,[2, 4], 9],
    [4, 2, [6, 7, [2, 6, 1]]]
]


const sum = (nums) => {
    let total =0;
    nums.map((num) => {

        if (!isNaN(num)) total += num;
        else total += sum(num);
});
return total;
};

console.log(sum(numbers));


//  numbers = [...numbers]; // not work

//numbers = numbers.flat().flat().flat() (no need for this)
//console.log(numbers);

// *my sol. non compleated yet
// let i = 0;
// const sum = (numbers) => {
//     let total =0;
//     if(i < numbers.length-1){
//         return numbers.pop() + sum(numbers);
//     } else {
//     return sum(numbers) + sum(numbers);
// }
// }
// return sum(numbers);