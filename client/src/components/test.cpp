#include <bits/stdc++.h>
using namespace std;

long long countPartitions(string s, int k)
{
    int n = s.size();
    vector<int> prefix(n), suffix(n);
    unordered_set<char> seen;

    for (int i = 0; i < n; ++i)
    {
        seen.insert(s[i]);
        prefix[i] = seen.size();
    }

    seen.clear();

    for (int i = n - 1; i >= 0; --i)
    {
        seen.insert(s[i]);
        suffix[i] = seen.size();
    }

    long long count = 0;
    for (int i = 0; i < n - 1; ++i)
    {
        if (prefix[i] > k && suffix[i + 1] > k)
            ++count;
    }

    return count;
}

int main()
{
    string s;
    int k;
    cin >> s >> k;
    cout << countPartitions(s, k) << endl;
    return 0;
}
