---
title: '217. Contains Duplicate'
link: 'https://leetcode.com/problems/contains-duplicate/'
---

### Set solution
- Use a set to store the unique value in the array
- If the 
- Time Complexity: **O(N)** with N is the length of the array `nums`
- Space Complexity: **O(N)** because we need to store the value-index pairs in a hashmap 
```ruby
Contains-Duplicate(nums, target):
    Initialize a set
    for num in nums:
        if value in set:
            return True
    return False
```