---
title: '0121. Best Time to Buy and Sell Stock'
link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/'
topic: Dynamic Programming
---

### Solution
Since we can only do only one transaction and maximize the profit, we can do
the following method: For each day (loop through the array), find the 
difference between the current day price and the `lowest`price in the previous
days, and update the max profit.

### C++ Solution
```cpp
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int n = prices.size();
        int lowest = prices[0];
        int ans = 0;
        for (int i = 1; i < n; i++) {
            ans = max(prices[i] - lowest, ans);
            lowest = min(prices[i], lowest);
        }
        return ans;
    }
};
```

### Complexity
- Time complexity: O(n)
