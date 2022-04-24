/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 *
 * @description {Implement strStr().

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strStr() and Java's indexOf().
}
 

Example 1:

Input : haystack = "hello", needle = "ll"
Output : 2

Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
 

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.
 */

const strStr = function (haystack, needle) {
  // Base condition
  if (haystack == null || needle == null) {
    return -1;
  }
  // Special case
  if (haystack === needle) {
    return 0;
  }
  // length of the needle
  const needleLength = needle.length;
  // Loop through the haystack and slide the window
  for (let i = 0; i < haystack.length - needleLength + 1; i++) {
    // Check if the substring equals to the needle
    if (haystack.substring(i, i + needleLength) === needle) {
      return i;
    }
  }
  return -1;
};

module.exports = strStr;
