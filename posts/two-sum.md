---
title: "0001. Two Sum"
link: "https://leetcode.com/problems/two-sum/"
topic: Arrays and Hashing
---

## Bruteforce solution

- Use two nested loops to loop the items in `nums`, with inner loop starting from the current outer loop index plus 1
- Check if the sum of two numbers at these two indices is equal to the `target`
- If yes, return the index

```ruby
Two-Sum(nums, target):
    for i = 0 -> nums.length - 1:
        for j = i + 1 -> nums.length - 1:
            if nums[i] + nums[j] == target:
                return i, j
    return -1, -1
```

- Time Complexity: **O(N^2)** with N is the length of the array `nums`

## Hashmap solution

- Use a hashmap to store key-value pairs as follow:
  - The value of the current element as key
  - Its index as value
- Use a loop to loop through the items of `nums`
- If its complement, which is `target - value`, is in the hashmap,
  - then we find the pair that sums up to the `target`
  - else we add the current (value, index) pair to the map
- Time Complexity: **O(N)** with N is the length of the array `nums`
- Space Complexity: **O(N)** because we need to store the value-index pairs in a hashmap

```ruby
Two-Sum(nums, target):
    map = {}
    for index, value in nums:
        complement = target - value
        if complement in map:
            return i, map[complement]
        map[value] = index
    return -1, -1
```
