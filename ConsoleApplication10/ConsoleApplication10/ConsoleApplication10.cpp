#include "pch.h"
#include <iostream>
#include <vector>
#include "Node.h"
#include "ConsoleApplication10.h"

using namespace std;

int main()

{
	Node * root = new Node('A');					//root노드를 값 A로 생성

	root->addChildNode(new Node('B'));			//서브트리로 B, C, D 추가
	root->addChildNode(new Node('C'));
	root->addChildNode(new Node('D'));
	root->printChildNodes();					//A의 자식노드를 출력
	cout << endl << endl;

	root->getNode(root, 'B')->addChildNode(new Node('E'));	//노드 B를 찾아서 서브트리 E, F 추가
	root->getNode(root, 'B')->addChildNode(new Node('F'));
	root->getNode(root, 'B')->printChildNodes();				// 노드 B를 찾아서 트리 B를 출력
	cout << endl << endl;

	root->getNode(root, 'C')->addChildNode(new Node('G'));			///노드 C를 찾아서 서브트리 G 추가
	root->getNode(root, 'C')->printChildNodes();					//노드 C를 찾아서 트리 C를 출력
	cout << endl << endl;

	root->getNode(root, 'D')->addChildNode(new Node('H'));			//노드 D를 찾아서 서브트리 H, I, J를 추가
	root->getNode(root, 'D')->addChildNode(new Node('I'));
	root->getNode(root, 'D')->addChildNode(new Node('J'));
	root->getNode(root, 'D')->printChildNodes();					//노드 D를 찾아서 트리 D를 출력
	cout << endl << endl;

	root->getNode(root, 'E')->addChildNode(new Node('L'));			//노드 E를 찾아서 서브트리 L, K 추가
	root->getNode(root, 'E')->addChildNode(new Node('K'));
	root->getNode(root, 'E')->printChildNodes();					//노드 E를 찾아서 트리 E를 출력
	cout << endl << endl;

	root->getNode(root, 'H')->addChildNode(new Node('M'));		// 노드 H를 찾아서 서브트리 M 추가
	root->getNode(root, 'H')->printChildNodes();				// 노드 H를 찾아서 트리 H를 출력
	cout << endl << endl;

	root->printTree(root, 0);									//루트(root)노드인 A의 노드들 나열.
	cout << endl;

	root->removeChild(root, 'G');							//트리에서 G 노드를 찾아 제거
	cout << endl;

	root->printTree(root, 0);								//G노드를 제거 한 후의 트리 출력
}

// 프로그램 실행: <Ctrl+F5> 또는 [디버그] > [디버깅하지 않고 시작] 메뉴
// 프로그램 디버그: <F5> 키 또는 [디버그] > [디버깅 시작] 메뉴

// 시작을 위한 팁: 
//   1. [솔루션 탐색기] 창을 사용하여 파일을 추가/관리합니다.
//   2. [팀 탐색기] 창을 사용하여 소스 제어에 연결합니다.
//   3. [출력] 창을 사용하여 빌드 출력 및 기타 메시지를 확인합니다.
//   4. [오류 목록] 창을 사용하여 오류를 봅니다.
//   5. [프로젝트] > [새 항목 추가]로 이동하여 새 코드 파일을 만들거나, [프로젝트] > [기존 항목 추가]로 이동하여 기존 코드 파일을 프로젝트에 추가합니다.
//   6. 나중에 이 프로젝트를 다시 열려면 [파일] > [열기] > [프로젝트]로 이동하고 .sln 파일을 선택합니다.
