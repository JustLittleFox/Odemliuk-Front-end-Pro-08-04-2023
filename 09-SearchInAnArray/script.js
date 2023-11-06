const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

////////////////////////////////////////////// TASK 1
posEl = arr.filter((n) => n > 0).length;
sumPosEl = arr.reduce((sum, n) => {
    return n / 2 > 0 ? sum + n : sum;
}, 0);
alert(`positive array lenght: ${posEl}\nsum of positive elements: ${sumPosEl}`);

////////////////////////////////////////////// TASK 2
minEl = Math.min(...arr);
indexMinEl = arr.indexOf(minEl);
alert(`minimal element: ${minEl}\nindex of minimal element: ${indexMinEl}`);

////////////////////////////////////////////// TASK 3
maxEl = Math.max(...arr);
indexMaxEl = arr.indexOf(maxEl);
alert(`max element: ${maxEl}\nindex of max element: ${indexMaxEl}`);

////////////////////////////////////////////// TASK 4
negEl = arr.filter((n) => n < 0).length;
alert(`negative array lenght: ${negEl}`)

////////////////////////////////////////////// TASK 5
posOddEl = arr.filter((n) => n % 2 !== 0 && n > 0).length;
alert(`positive odd elements: ${posOddEl}`);

////////////////////////////////////////////// TASK 6
posPairEl = arr.filter((n) => n % 2 === 0 && n > 0).length;
alert(`positive pair elements: ${posPairEl}`);

////////////////////////////////////////////// TASK 7
sumPairPosEl = arr.reduce((sum, n) => {
    return n % 2 === 0 ? sum + n : sum;
}, 0);
alert(`sum pair positive elements: ${sumPairPosEl}`);

////////////////////////////////////////////// TASK 8
sumOddPosEl = arr.reduce((sum, n) => {
    return n % 2 !== 0 && n > 0 ? sum + n : sum;
}, 0);
alert(`sum odd positive elements: ${sumOddPosEl}`);

////////////////////////////////////////////// TASK 9
multPosEl = arr.reduce((mult, n) => {
    return n >= 0 ? mult * n : mult;
});
alert(`mult positive elements: ${multPosEl}`);

////////////////////////////////////////////// TASK 10
maxEl = Math.max(...arr);
newArr = arr.map((n) => n === maxEl ? n : 0);
alert(`new array with one max element: ${newArr}`);

