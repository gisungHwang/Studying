#include<iostream>
#include<vector>
#include<queue>
#include<algorithm>
#include<memory.h>

using namespace std;

struct Man {
	int f1;
	int f2;
	int time;
};
Man man[1002];
int k;
int n, m, a, b;

int n1[11];
int nm[11];
int nt[11];

int m1[11];
int mm[11];
int mt[11];

queue <int> q;
queue <int> q2;

void func() {
	int t = 0;
	
	int out = 0;
	memset(n1, -1, sizeof(n1));
	memset(m1, -1, sizeof(m1));

	while (true) {
		for (int i = 1; i <= k; i++)
			if (man[i].time == t)
				q.push(i);

		for (int i = 1; i <= n; i++) 
		{
			if (n1[i] == t) 
			{
				n1[i] = -1;
				q2.push(nm[i]);
			}
		}

		for (int i = 1; i <= n; i++)
		{
			if (q.empty())
				break;

			if (n1[i] == 1)
			{
				n1[i] = nt[i] + t;
				nm[i] = q.front();
				man[q.front()].f1 = i;
				q.pop();
			}
		}

		for (int i = 1; i <= n; i++)
		{
			if(m1[i] == t)
			{
				m1[i] = -1;
				out++;
			}
		}

		for (int i = 1; i <= n; i++)
		{
			if (q2.empty())
				break;

			if (m1[i] == -1)
			{
				m1[i] = mt[i] + t;
				mm[i] = q2.front();
				man[q2.front()].f2 = i;
				q2.pop();
			}
		}

		if (out == k)
			break;

		t++;
	}
}

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(0);
	cout.tie(0);

	int t;
	cin >> t;

	for (int o = 1; o <= t; o++) {
		cin >> n >> m >> k >> a >> b;
		for (int i = 1; i <= n; i++)
			cin >> nt[i];

		for (int i = 1; i <= m; i++)
			cin >> mt[i];

		for (int i = 1; i <= k; i++)
			cin >> man[i].time;
		func();

		int ans = 0;
		for (int i = 1; i <= k; i++)
		{
			if (man[i].f1 == a && man[i].f2 == b)
				ans += i;
		}
		if (ans == 0)
			cout << "#" << o << " " << -1 << "\n";
		else cout << "#" << o << ans << "\n";
	}

	return 0;
}