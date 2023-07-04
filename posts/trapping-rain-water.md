---
title: "0042. Trapping Rain Water"
link: "https://leetcode.com/problems/trapping-rain-water/"
topic: Dynamic Programming, Two Pointers
---

## Dynamic Programming

The trapped rain at one position will be calculated by getting the min height
between the highest bar on the left and on the right. In other word, at position
i we have:

- `trapped_rain[i] = min_height(max_height_left, max_height_right) - height[i]`

In order to get the max height of the bars before and after `i` index, we first
calculate `prefix` and `suffix` array: `left_max` and `right_max`. Then for
each index i, we calculate the trapped rain water at i and add it to the
final answer, using the formula above.

Hint: This problem can also be done using two pointers by switching back and
forth between left and right. If `max_left` < `max_right`, we consider the
next bar from the left (increment the left pointer) and calculate trapped
water, and vice versa. At the same time, update `max_left` and `max_right`.

## C++ Solution

```cpp
#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int trap(vector<int>& height) {
        int n = height.size();
        int ans = 0;
        vector<int> left_max(n, 0);
        vector<int> right_max(n, 0);

        // Calculate the max height of all bars on the left of i
        for (int i = 1; i < n; i++) {
            left_max[i] = max(left_max[i - 1], height[i - 1]);
        }

        // Calculate the max height of all bars on the right of i
        for (int i = n - 2; i >= 0; i--) {
            right_max[i] = max(right_max[i + 1], height[i + 1]);
        }

        for (int i = 0; i < n; i++) {
            int min_height = min(left_max[i], right_max[i]);
            if (min_height > height[i]) {
                ans += min_height - height[i];
            }
        }

        return ans;
    }
};

int main() {
    Solution s;
    vector<int> height{0,1,0,2,1,0,1,3,2,1,2,1};
    int ans = s.trap(height);
    cout << ans << '\n';
    return 0;
}
```
