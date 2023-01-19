#pragma once
#include <iostream>
using namespace std;

struct Node {
	int data;
	Node* Llink;
	Node* Rlink;
};

struct HeadNode {
	Node* Lhead;				// ���� ����Ʈ�� �ݴ��� ����
	Node* Rhead;				// ���� ���Ḯ��Ʈ ����
};

class doubleList {

public:
	
	HeadNode* createList() {			//���߿��Ḯ��Ʈ ����
		HeadNode* H = new HeadNode;
		H->Lhead = NULL;
		H->Rhead = NULL;
		return H;						
	}

	void addEndNode(HeadNode* H, int adddata) {			//���߿��Ḯ��Ʈ ���� ��� ���� �޼���
		Node* prevNode;
		Node* newNode = new Node;
		newNode->data = adddata;
		newNode->Llink = NULL;
		newNode->Rlink = NULL;

		if (H->Rhead == NULL) {							// ����Ʈ�� ������� ��
			H->Rhead = newNode;
			H->Lhead = newNode;
		}
		else { // ����Ʈ�� ��尡 ���� ��
			prevNode = H->Lhead;  // ����Ʈ�� ���������� Lhead�� ����Ű�� ���� ���̹Ƿ� �̰� prevNode�� 
			prevNode->Rlink = newNode;
			newNode->Llink = prevNode;
			H->Lhead = newNode; // �� ��尡 ������ ��尡 �ȴ�.
		}
	}

	
	void addThisNode(HeadNode* H, int afterthisdata, int adddata) {				//� Ư�� ��� �ڿ� ��带 ������ �� ���ϴ� �޼���
		Node* prevNode;
		Node* newNode = new Node;
		newNode->data = adddata;												//�μ��� �޾ƿ� �����͸� ���ο� ��忡 ����
		newNode->Llink = NULL;													//���ο� ����� Llink��  null�� �ʱ�ȭ
		newNode->Rlink = NULL;													//���ο� ����� Rlink��  null�� �ʱ�ȭ		

		prevNode = H->Rhead;

		while (prevNode->data != afterthisdata) {
			prevNode = prevNode->Rlink;
		}

		newNode->Rlink = prevNode->Rlink;		 //1.�� ��尡 ������尡 ����Ű�� ��带 ����Ű��
		newNode->Llink = prevNode;				 // 2.������� Llink�� ������带 ����Ű��
		prevNode->Rlink = newNode;				// 3.��������� Rlink�� ����带 ����Ű��
		newNode->Rlink->Llink = newNode;		// 4.newNode Rlink�� ����Ű�� Llink�� newNode�� ����Ű��
	}

	
	void deleteNode(HeadNode* H, int deldata) {					//Ư�� ��� ���� �޼���
		Node* delNode;
		delNode = H->Rhead;

		if (delNode == NULL)								// ����Ʈ�� �� ��� ����
			return;										

		while (delNode->data != deldata) {					//�μ��� ���� deldata�� ���� ��ġ�� �����Ϳ� ���� ������ ������ �̵�
			delNode = delNode->Rlink;
		}

		if (delNode == H->Lhead) {								//������ ��尡 ����Ʈ�� ������ ����� ��
			if (delNode == H->Rhead) {							// ������ ��尡 ������ ����� �� 
				H->Rhead = NULL;								//������ ��� �ʱ�ȭ
				H->Lhead = NULL;								//����Ʈ�� ������ ��� �ʱ�ȭ
			}
			else {
				delNode->Llink->Rlink = NULL;					//�����ҳ�� �ٷ� �� ����� Rlink�� NULL
				H->Lhead = delNode->Llink;						// ����� Lhead�� �����ҳ�尡 ����Ű�� �ִ� ��带 ����Ű��
			}
		}
		else if (delNode == H->Rhead) {							//������ ��尡 ����Ʈ�� ù ����� ��
			H->Rhead = delNode->Rlink;							
			delNode->Rlink->Llink = NULL;
		}
		else {
			delNode->Llink->Rlink = delNode->Rlink;
			delNode->Rlink->Llink = delNode->Llink;
		}
		delete delNode;														//��� ����
		cout << deldata << "�� ������ ��带 �����߽��ϴ�." << endl;
	}

	void printList(HeadNode* L) {											//���߿��Ḯ��Ʈ ��� �޼���

		Node* p;												//��� ������� ����Ʈ ���

		p = L->Rhead;

		if (p == NULL) {											// ����Ʈ�� �� ���
			cout << endl << "���� ����Ʈ�� ����ֽ��ϴ�." << endl << endl;
			return;
		}

		cout << "���Ḯ��Ʈ ��� = ( ";

		while (p != NULL) {										//while ���� ����Ʈ�� null�� �ƴ� ������ �ݺ�
			cout << p->data;									//p�� ����Ű�� �ִ� ���� �����͸� ���
			p = p->Rlink;										//p�� ���� ���� �̵�
			if (p != NULL)										//���� ����Ʈ�� null�� �ƴҰ�� -->�� ���
				cout << " --> ";
		}
		cout << " )" << endl << endl;
	}

};
