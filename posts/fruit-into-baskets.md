---
title: '0904. Fruit Into Baskets'
link: 'https://leetcode.com/problems/trapping-rain-water/'
topic: Sliding window, Two pointers
---

### Use hashmap and two pointers
For this problem, it's important to note that we cannot skip trees
(must pick fruits from consecutive trees), and must stop picking
tree when there are more than two types of fruits. Therefore, we
would want to use sliding window for this problem.

We can use the two pointers `left` and `right` to keep track of
the current valid windows (no more than two types of fruits). Then calculate
the number of fruits in that window by `right - left + 1` and update the 
maximum number of fruits.

Next, we need a way to quickly check if the current window is valid by 
using hashmap. The key will be the type of fruits, value will be the count
of that type. When there are more than two keys, we will decrease the 
count of fruits at `left`, and increment `left`, until there are two types
of fruits again.

### C++ Solution
```cpp
class Solution {
public:
    int totalFruit(vector<int>& fruits) {
        int n = fruits.size();
        if (n <= 2) return n;

        unordered_map<int, int> basket;
        int left, right;
        int ans = 0;

        for (left = 0, right = 0; right < n; right++) {
            basket[fruits[right]]++;

            while (basket.size() > 2) {
                basket[fruits[left]]--;

                if (basket[fruits[left]] == 0) {
                    basket.erase(fruits[left]);
                }

                left++;
            }

            ans = max(ans, right - left);
        }

        return ans;
    }
};
```

### Complexity
- Time: O(n), since left and right pointers are monotonically increasing,
we only need at most `2.n` steps
- Space: O(1), the hashmap only contains at most 3 keys

