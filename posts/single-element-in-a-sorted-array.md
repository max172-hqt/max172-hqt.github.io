---
title: "0540. Single Element in a Sorted Array"
link: "https://leetcode.com/problems/single-element-in-a-sorted-array/"
topic: Binary Search
---

## Solution

- Use binary search.
- Check `odd` mid index (the number of elements from `0 -> mid`
will be even), if `nums[mid] == nums[mid-1]`, single element is on the right,
else on the left.

## C++ Solution

```cpp
class Solution {
public:
    int singleNonDuplicate(vector<int>& nums) {
        int n = nums.size(); // odd number of elements
        int lo = 0;
        int hi = n - 1;
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (mid % 2 == 0) {
                mid--;
            }
            if (nums[mid] == nums[mid-1]) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }

        return nums[lo];
    }
};
```
