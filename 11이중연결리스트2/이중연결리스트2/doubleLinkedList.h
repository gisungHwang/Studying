#pragma once
#include <iostream>
using namespace std;

struct Node {
	int data;
	Node* Llink;
	Node* Rlink;
};

struct HeadNode {
	Node* Lhead;				// 원래 리스트의 반대쪽 방향
	Node* Rhead;				// 원래 연결리스트 방향
};

class doubleList {

public:
	
	HeadNode* createList() {			//이중연결리스트 생성
		HeadNode* H = new HeadNode;
		H->Lhead = NULL;
		H->Rhead = NULL;
		return H;						
	}

	void addEndNode(HeadNode* H, int adddata) {			//이중연결리스트 끝에 노드 삽입 메서드
		Node* prevNode;
		Node* newNode = new Node;
		newNode->data = adddata;
		newNode->Llink = NULL;
		newNode->Rlink = NULL;

		if (H->Rhead == NULL) {							// 리스트가 비어있을 때
			H->Rhead = newNode;
			H->Lhead = newNode;
		}
		else { // 리스트에 노드가 있을 때
			prevNode = H->Lhead;  // 리스트의 마지막노드는 Lhead가 가리키고 있을 것이므로 이걸 prevNode로 
			prevNode->Rlink = newNode;
			newNode->Llink = prevNode;
			H->Lhead = newNode; // 새 노드가 마지막 노드가 된다.
		}
	}

	
	void addThisNode(HeadNode* H, int afterthisdata, int adddata) {				//어떤 특정 노드 뒤에 노드를 삽입할 지 정하는 메서드
		Node* prevNode;
		Node* newNode = new Node;
		newNode->data = adddata;												//인수로 받아온 데이터를 새로운 노드에 삽입
		newNode->Llink = NULL;													//새로운 노드의 Llink를  null로 초기화
		newNode->Rlink = NULL;													//새로운 노드의 Rlink를  null로 초기화		

		prevNode = H->Rhead;

		while (prevNode->data != afterthisdata) {
			prevNode = prevNode->Rlink;
		}

		newNode->Rlink = prevNode->Rlink;		 //1.새 노드가 이전노드가 가리키던 노드를 가리키게
		newNode->Llink = prevNode;				 // 2.새노드의 Llink가 이전노드를 가리키게
		prevNode->Rlink = newNode;				// 3.이전노드의 Rlink가 새노드를 가리키게
		newNode->Rlink->Llink = newNode;		// 4.newNode Rlink가 가르키던 Llink가 newNode를 가르키게
	}

	
	void deleteNode(HeadNode* H, int deldata) {					//특정 노드 삭제 메서드
		Node* delNode;
		delNode = H->Rhead;

		if (delNode == NULL)								// 리스트가 빈 경우 리턴
			return;										

		while (delNode->data != deldata) {					//인수로 받은 deldata가 현재 위치의 데이터와 같을 때까지 옆으로 이동
			delNode = delNode->Rlink;
		}

		if (delNode == H->Lhead) {								//삭제할 노드가 리스트의 마지막 노드일 때
			if (delNode == H->Rhead) {							// 삭제할 노드가 유일한 노드일 때 
				H->Rhead = NULL;								//유일한 노드 초기화
				H->Lhead = NULL;								//리스트의 마지막 노드 초기화
			}
			else {
				delNode->Llink->Rlink = NULL;					//삭제할노드 바로 앞 노드의 Rlink가 NULL
				H->Lhead = delNode->Llink;						// 헤드의 Lhead가 삭제할노드가 가르키고 있던 노드를 가리키게
			}
		}
		else if (delNode == H->Rhead) {							//삭제할 노드가 리스트의 첫 노드일 때
			H->Rhead = delNode->Rlink;							
			delNode->Rlink->Llink = NULL;
		}
		else {
			delNode->Llink->Rlink = delNode->Rlink;
			delNode->Rlink->Llink = delNode->Llink;
		}
		delete delNode;														//노드 삭제
		cout << deldata << "를 가지는 노드를 삭제했습니다." << endl;
	}

	void printList(HeadNode* L) {											//이중연결리스트 출력 메서드

		Node* p;												//노드 순서대로 리스트 출력

		p = L->Rhead;

		if (p == NULL) {											// 리스트가 빈 경우
			cout << endl << "연결 리스트가 비어있습니다." << endl << endl;
			return;
		}

		cout << "연결리스트 목록 = ( ";

		while (p != NULL) {										//while 문을 리스트가 null이 아닐 때까지 반복
			cout << p->data;									//p가 가르키고 있는 현재 데이터를 출력
			p = p->Rlink;										//p가 다음 노드로 이동
			if (p != NULL)										//다음 리스트가 null이 아닐경우 -->를 출력
				cout << " --> ";
		}
		cout << " )" << endl << endl;
	}

};
