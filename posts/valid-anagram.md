---
title: "0242. Valid Anagram"
link: "https://leetcode.com/problems/valid-anagram/"
topic: Arrays and Hashing
---

## Problem

- For T to be an anagram of S, it must use all the original letters exactly once,
  which means that - The number of occurences (or frequency) of each character in T must be equal to that of S - The length of S and T must be equal (we can return early if they are not)

## Approach

- Loop through each character of the input string S and T and calculate the count of each character
- For each lowercase character, check if the count of that character in S is equal to T
- If it is, return True. Otherwise, return False.

## Hashmap Solution

- To solve this, we need a data structure to store the count of characters in S and in T
- Since the input string S and T contain only lowercase character, we can use two
  arrays, each with length of 26 to store the count of each character
- For example, for character 'a', we will store the count in the index `'a' - 'a' = 0`
  of the array - Similarly for 'd', it will be `'d' - 'a' = 100 - 97 = 3` - 'z': `'z'- 'a' = 122 - 97 = 25`

```ruby
Valid-Anagram(s: String, t: String): Boolean
    if s.length != t.length:
        return False

    # Init frequence arrays with length 26, initial value of each index is 0
    frequency_s[26] = {0}
    frequency_t[26] = {0}

    # Update frequency of characters
    for i: 0 -> s.length - 1:
        frequency_s[s[i] - 'a'] += 1
        frequency_t[t[i] - 'a'] += 1

    # Check if S and T have same occurences of characters
    for i: 0 -> 25:
        if (frequency_s[i] != frequency_t[i]):
            return False

    return True
```

- For the follow up question, we can use two hashmaps to store the frequencies, instead of 2 arrays
- Time complexity: **O(N)** with N is the length of S and T
- Space complexity: **O(26 \* 2)** for frequency arrays
