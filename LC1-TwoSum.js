/*
LeetCode 1. Two Sum

Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].
*/


// for testing
let nums1 = [2, 2, 3];
let nums2 = [11, 15, 7, 2];
let target1 = 4;
let target2 = 9;
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function (nums, target) {
    let index1 = null;
    let index2;

    let i = 0;
    while(index1 == null){
        for(let j = i+1; j < nums.length; j++){
            if (nums[i] + nums[j] == target) {
                index1 = i;
                index2 = j;
            }
        }
        i++;
    }
    return [index1, index2];
}

// see output for different param
console.log(twoSum(nums2, target2));

// notes. when terminal get into a mode like written, it shows the program cannot terminate and there is an infinite loop.