/**
 * @param {string[]} strs
 * @return {string}
 *
 * @description {Write a function to find the longest common prefix string amongst an array of strings.
                If there is no common prefix, return an empty string "".}
 * 
 * Example 1 
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 *
 * Example 2
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 *
 */

const longestCommonPrefix = function (strs) {
  let prefix = '';
  strs.sort((a, b) => a.length - b.length);

  strs[0].split('').every((char, i) => {
    if (strs.every((str) => str.charAt(i) == char)) {
      prefix += char;
      return true;
    } else {
      return false;
    }
  });
  return prefix;
};

module.exports = longestCommonPrefix;
