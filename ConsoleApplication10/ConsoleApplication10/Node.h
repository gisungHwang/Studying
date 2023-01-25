#pragma once
#include<vector>
#include<iostream>

using namespace std;

class Node
{
private:

	char data;						//����� ��
	int level;						//Ʈ���� ����
	int degree = 0;					//����� ����
	vector<Node*> childNodes;		//childNodes: ����� �ڽ� ���� ���� �迭�� ����

public:
		
	Node(char key)	
	{			
		data = key;
		level = 1;
	}

	void setData(char da) {
		data = da;
	}

	char getData() {
		return data;
	}

	void setLevel(int le) {
		level = le;
	}
	
	int getLevel() {
		return level;
	}

	void setDegree(int de) {
		degree = de;
	}

	char getDegree() {
		return degree;
	}

	void addChildNode(Node* node) {
		childNodes.push_back(node);
		setDegree(childNodes.size());
		cout << "degree : " << getDegree()<< endl;
	}
	
	void printChildNodes() {
		cout << getData() << ": (";
		for (int i = 0; i < childNodes.size(); i++) {
			cout << childNodes[i]->getData() << ",";
		}
	}

	vector<Node*> getChildNodes() {
		return childNodes;
	}

	Node* getNode(Node* node, char key) {
		vector<Node*> v = node->getChildNodes();

		if (v.size() == 0); {
			return NULL;
		}
		for(int i = 0; i<v.size(); i++)
			if (v[i]->getData() == key) {
				return v[i];
			}
			else {
				Node* no = getNode(v[i], key);
				if (NULL != no)
					return no;
			}
		return NULL;
	}

	bool printTree(Node* node, int num) {
		if (num == 0) {
			cout << getData();
			num++;
		}

		vector<Node*> childNodes = node->getChildNodes();

		if (childNodes.size() == 0)
			return false;

		if (childNodes.size() > 0) {
			cout << "(";
			for (int i = 0; i < childNodes.size(); i++) {
				cout << childNodes[i]->getData() << ",";
				printTree(childNodes[i], num);
			}
		}
		cout << ")";
		return false;
	}

	void removeChild(Node* node, char key) {
		vector<Node*> v = node->getChildNodes();

		for (int i = 0; i < v.size(); i++) {
			if (v[i]->getData()== key) {
				if (v[i]->getDegree() != 0) {
					cout << "�ڽĳ�尡 �־ ���� �� �����ϴ�." << endl;
				}else {
					free(v[i]);
					v.erase(v.begin() + i);
					node->childNodes = v;
				}
			}else {
				removeChild(v[i], key);
			}
		}
	}
};

