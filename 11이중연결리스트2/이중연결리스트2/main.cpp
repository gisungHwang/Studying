#include "pch.h"
#include <iostream>
#include "doubleLinkedList.h"
using namespace std;

void main()
{
	doubleList list;
	HeadNode* L;
	L = list.createList();

	cout << "1. 빈 연결 리스트를 생성했습니다." << endl << endl;

	int data1, data2, data3;
	cout << "2. 연결 리스트에 추가할 노드의 데이터를 3개 정해주세요: ";
	cin >> data1 >> data2 >> data3;
	list.addEndNode(L, data1);			//이중연결리스트 끝에 data1을 삽입
	list.printList(L);
	list.addEndNode(L, data2);			//이중연결리스트 끝에 data2을 삽입
	list.printList(L);
	list.addEndNode(L, data3);			//이중연결리스트 끝에 data3을 삽입	
	list.printList(L);
	cout << endl;


	cout << "3-1. 어떤 노드 뒤에 노드를 추가할건가요? ";;
	cin >> data1;
	cout << "3-2. 그 노드 뒤에 어떤 데이터를 가진 노드를 추가할건가요? ";
	cin >> data2;
	list.addThisNode(L, data1, data2);		//매개변수로 지정한 data1 값 뒤에 data2 값을 삽입
	list.printList(L);
	cout << endl;

	cout << "4-1. 삭제하고자 하는 노드를 알려주세요 : ";
	cin >> data1;
	list.deleteNode(L, data1);						//입력한 데이터를 deleteNode 메서드에 매개변수로 보내 삭제
	list.printList(L);
	cout << endl;

	cout << "4-2. 삭제하고자 하는 노드를 또 알려주세요 : ";
	cin >> data2;
	list.deleteNode(L, data2);						//입력한 데이터를 deleteNode 메서드에 매개변수로 보내 삭제
	list.printList(L);
	cout << endl;

	cout << "4-3. 삭제하고자 하는 노드를 또 알려주세요 : ";
	cin >> data3;
	list.deleteNode(L, data3);						//입력한 데이터를 deleteNode 메서드에 매개변수로 보내 삭제
	list.printList(L);
	cout << endl;

	cout << "4-4. 삭제하고자 하는 노드를 또 알려주세요 : ";
	cin >> data1;
	list.deleteNode(L, data1);						//입력한 데이터를 deleteNode 메서드에 매개변수로 보내 삭제
	list.printList(L);
	cout << endl;

	cout << "연산을 끝내겠습니다." << endl;

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
