---
title: '217. Contains Duplicate'
link: 'https://leetcode.com/problems/contains-duplicate/'
topic: Arrays and Hashing
---

### Set solution
- Use a set to store the unique value in the array
- Loop through the array, if the current number is already in the set, return True. Otherwise, add the current number to the set
- If the function does not return early in the loop, return False
- Time Complexity: **O(N)** with N is the length of the array `nums`
- Space Complexity: **O(N)** because we need to store the unique values in a set
```ruby
Contains-Duplicate(nums, target):
    Initialize a set
    for num in nums:
        if value in set:
            return True
    set.add(value)
    return False
```