/*
LeetCode 1. Two Sum

Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].
*/


 // for testing
let nums = [11, 15, 7, 2];
let target = 9;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function (nums, target) {
    let index1 = null;
    let index2 = null;
    // if(index1 == null){
    //     for (let i = 0; i < nums.length; i++) {

    //     }
    // }
    let i = 0;
    while(index2 == null){

        let gap = target - nums[i];
        for (let j = 0; j < nums.length; j++) {
            if (gap == nums[j]) {
                index2 = j;
                console.log(index2, 222);
                if (j !== i) {
                    index1 = i;
                }
            }
        }
        i++;
    }

    return [index1, index2];
};

// see output
console.log(twoSum(nums, target));