---
title: '1056. Capacity To Ship Packages Within D Days'
link: 'https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/'
topic: Binary search
---

### Thought process
We can do binary search to search for the minimum capacity. For a particular
capacity, we need to check how many days the ship can ship all the packages.
- If the number of days required is more than `days`, we set the capacity too
low.
- If the number of days required is less than or equal to `days`, we either
find an answer or set the capacity too high.

We can safely set the upperbound to the total number of weights, and it 
would take a day to ship all the package. Similarly, the lowerbound should
be the max weights of all packages, because if it's smaller than a single 
package's weight, there's no way to ship that package.

### C++ Solution
```cpp
class Solution {
public:
    int shipWithinDays(vector<int>& weights, int days) {
        int n = weights.size();
        int lo = 0;
        int hi = 0;

        // Set the upper limit and lower limit
        for (int i = 0; i < n; i++) {
            hi += weights[i];
            lo = max(lo, weights[i]);
        }
        
        while (lo < hi) {
            int capacity = lo + (hi - lo) / 2;
            int days_required = 1;
            int day_capacity = weights[0];

            for (int i = 1; i < n; i++) {
                // Reach the max capacity, need to ship the next day
                if (day_capacity + weights[i] > capacity) {
                    day_capacity = weights[i];
                    days_required++;
                } else {
                    day_capacity += weights[i];
                }
            }
            
            if (days_required <= days) {
                // We either find an answer, or can still minimize
                hi = capacity;
            } else {
                lo = capacity + 1;
            }
        }

        return lo;
    }
};
```
### Complexity
- Time complexity will be `O(n log(totalWeight))`, since we perform binary
search with the upper limit of total weight of all packages, and reduce the
search space by half. The nested for loop takes O(n) time to calculate the
number of day required to ship all packages.
- Space complexity: `O(1)`
