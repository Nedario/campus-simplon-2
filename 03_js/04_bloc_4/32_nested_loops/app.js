/*jshint esversion: 6*/
/*global document, window, console*/

const nestedLoops = (function nestedLoops() {
    "use strict";

    const arr1 = [1, 2, 3, 4, 5];

    const arrNested = [
        ["a", "b", "c", "d"],
        [10, 20, 30, 40, 50, 123, 333],
        [true, false, false, true]
    ];
    // parcourir le premier tableau...
    for (let i = 0; i < arr1.length; i += 1) {
        console.log(arr1[i]);
    }
    console.log("----------------------------");
    // parcourir le second tableau...
    for (let i = 0; i < arrNested.length; i += 1) {
        // console.log(arrNested[i]);
        // console.log(typeof arrNested[i]);
        for (let j = 0; j < arrNested[i].length; j += 1) {
            console.log(arrNested[i][j]);
        }
    }
}());
