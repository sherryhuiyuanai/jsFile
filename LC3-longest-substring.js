/*
LeetCode 3. Longest Substring Without Repeating Characters

Given a string, find the length of the longest substring without repeating characters.

Example 1:
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

             "pwwkewskew"
             "aabcabacbbwxyz"
*/

/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function (string) {
    let str = string.split("");
    let array = Array(string.length);
    array[0] = str[0];
    let len = 1;
    let len_temp = 1;
    let fail_index = 0;
    for(let i = 1; i < str.length; i++){
        if (str[i] != str[i - 1] && !array.includes(str[i])){
            if (fail_index == 0){
                array[i - fail_index] = str[i];
            } else {
                array[i - fail_index - 1] = str[i];
            }

            len_temp = i - fail_index + 1;
            len = len_temp > len? len_temp: len;
        } else {
            fail_index = i;
        }
    }
    if (str.length == 0){
        return 0;
    }
    return array.filter(a => a != '')//.length;
}

console.log(lengthOfLongestSubstring("aab"));