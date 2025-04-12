function solve(n, myArr) {
    let myArr = myArr.slice(0, n);
    let reserved = myArr.reserved();
    let asString = reserved.join(' ');
    console.log(asString);
}

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(2, [66, 43, 75, 89, 47]);