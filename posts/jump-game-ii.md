---
title: "0045. Jump Game II"
link: "https://leetcode.com/problems/jump-game-ii/"
topic: Sliding Windows, Dynamic Programming, Greedy
---

## My thought process

- At position `i` (`start`), we can calculate the furthest reachable position by doing `i + nums[i]`(`end`)
- Then from the list of all position from `start + 1` to `end`, we choose the position `best` that would
  help us jump the farthest into the array
- In the process of doing this, update the number of steps and check if we jump to index `n - 1`, and return the answer

## C++ Solution

```cpp
class Solution {
public:
    int jump(vector<int>& nums) {
        int n = nums.size();
        int ans = 0;

        int start = 0;
        int end = 0;

        while (end < n - 1) {
            end = start + nums[start];
            ans++;
            if (end >= n-1) break;

            int best = end;
            for (int i = end - 1; i > start; i--) {
                if (nums[i] + i > nums[best] + best || nums[best] == 0) {
                    best = i;
                }
            }
            start = best;
        }

        return ans;
    }
};

```
