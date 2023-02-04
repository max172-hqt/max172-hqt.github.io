---
title: '0567. Permutation in String'
link: 'https://leetcode.com/problems/permutation-in-string/'
topic: Sliding Windows
---

### Sliding window solution
- Use two frequency arrays to store the counts of characters of s1 and substrings of s2 with length `|s1|`
- For each step `i`
    - Remove the count of character at index `i`
    - Add the count of character at index `i` + |s1|
- If one of the substrings of s2 with length |s1| 
has the same character frequency as s1, return `true`, `false` otherwise
- Time complexity: O(26 * (|s2| - |s1|))

```ruby
Permutation-In-String(s1: String, s2: String) -> Boolean:
    if s1.size > s2.size:
        return false

    # Length 26 to store the counts of 26 lowercase letters
    Initialize freq_s1, freq_s2 

    # Calculate the counts of characters of s1 and first substring of s2 with length |s1|
    for i in 0 until s1.size:
        freq_s1[s1[i] - 'a']++
        freq_s2[s2[i] - 'a']++

    for i in 0 until s2.size - s1.size:
        freq_s2[s2[i] - 'a']--
        freq_s2[s2[i + s1.size] - 'a']++

        if match(freq_s1, freq_s2):
            return true

    return match(freq_s2, freq_s2)

match(freq_s1, freq_s2) -> Boolean:
    for i in 0 until 26:
        if (freq_s1[i] != freq_s2[i]):
            return false
    return true
```