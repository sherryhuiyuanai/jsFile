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
*/

/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function (string) {
    let array = Array(string.length);
    let str = string.split("");
    array[0] = str[0];

    let len = 1;
    let len_temp = 1;
    let fail_index = 0;
    for(let i = 1; i < str.length; i++){

        array[i] = str[i] == str[i-1]? array[i]: str[i];

        if (str[i] != str[i - 1] && !array.includes(str[i])){
            array[i - fail_index - 1] = str[i];
            len_temp = i - fail_index + 1;

            if (len_temp > len){
                len = len_temp;
            }
        } else {
            fail_index = i;
        }
        
    }
    return array;
}

str = "pwwkew";
console.log(lengthOfLongestSubstring(str));