---
title: "0347. Top K Frequent Elements"
link: "https://leetcode.com/problems/top-k-frequent-elements/"
topic: Arrays & Hashing
---

## Solution

- Count the frequency of each elements and save into a map
- Use the bucket sort to sort the frequency from least to greatest. We can use bucket sort thanks
  to the number of elements in the input is at most 1000, hence we only need array of size 1001
  to store the bucket sort results.
- Traverse the bucket sort array, from end to begin, and retrieve the k most frequent elements

## C++ Solution

```cpp
class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        int n = nums.size();
        unordered_map<int, int> freq;
        for (int& num: nums) {
            freq[num]++;
        }
        vector<vector<int>> cnt(1001);
        for (auto [k,v]: freq) {
            cnt[v].push_back(k);
        }
        vector<int> ans;
        for (int i = 1000; i >= 0; i--) {
            if (k == 0) break;
            while (!cnt[i].empty()) {
                if (k > 0) {
                    ans.push_back(cnt[i][cnt[i].size()-1]);
                    cnt[i].pop_back();
                    k--;
                }
            }
        }
        return ans;
    }
};
```

## Complexity

- O(N) with N is the length of input array
