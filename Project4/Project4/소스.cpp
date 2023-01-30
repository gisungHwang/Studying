#include <iostream>
#include <string>
#include <map>

using namespace std;

map<string, int> kimcoder;
map<string, int>::iterator iter;

int main() {
	cout << "insert" << endl;
	kimcoder["Korean"] = 79;
	kimcoder["Math"] = 84;
	kimcoder.insert(make_pair(("English"), 81));
	kimcoder.insert(make_pair(("Science"), 83));
	kimcoder.insert(make_pair(("Programming"), 97));

	for (iter = kimcoder.begin(); iter != kimcoder.end(); iter++) {
		cout << iter->first << " : " << iter->second << "Á¡" << endl;
	}
	cout << endl;

	cout << "Erase" << endl;
	kimcoder.erase("English");

	for (iter = kimcoder.begin(); iter != kimcoder.end(); iter++) {
		cout << iter->first << " : " << iter->second << "Á¡" << endl;
	}
	cout << endl;

	cout << "Check" << endl;
	cout << kimcoder["Programming"] << endl;
	cout << endl;

	cout << "Count" << endl;
	if (kimcoder.count("English") > 0) {
		cout << "exixt!" << endl;
	}
	else cout << "not Here" << endl << endl;
	
	cout << "Change value" << endl;
	kimcoder["Science"] += 10;
	kimcoder["Programming"] = 100;

	for (iter = kimcoder.begin(); iter != kimcoder.end(); iter++) {
		cout << iter->first << " : " << iter->second << "Á¡" << endl;
	}
}

