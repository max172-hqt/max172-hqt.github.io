---
title: '0049. Group Anagrams'
link: 'https://leetcode.com/problems/group-anagrams/'
topic: Arrays and Hashing
---

### Hashmap solution
- Use a hashmap to store key-value pairs as follow: 
    - The alphabetically sorted string as key
    - List of its anagrams as value as value
- The key is to use the sorted string as key for each group of anagrams. So we don't accidentally
create two groups for 2 anagram strings
- For each string in `strs`, say `str`, 
    - Sort the characters within the string in alphabetical order and assign to `sortedString`
    - If `sortedString` is a key in the map, push the original `str` ot the list of anagrams of that key
- Use the map to return the appropriate result of the function (2d array)

```ruby
Group-Anagrams(strs): Array<Array<String>>
    map = {}
    ans = Array<Array<String>>
    for (str: strs):
        sortedString = str.sort()
        if sortedString in map:
            map[sortedString].push(str)
        else:
            # Init a new key in the map
            map[sortedString] = [str]

    for _, values in map:
        # Push each group of anagrams to the 2d array ans
        ans.push(values)
    
    return ans
```