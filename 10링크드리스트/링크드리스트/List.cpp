#include "pch.h"
#include <iostream>
#include "List.h"

using namespace std;

List::List()				// 리스트 초기화 
{
	Head->nextNode = NULL;			//Head의 nextNode를  NULL로 초기화;
	List::count = 0;				//리스트의 멤버변수 count 초기화
}

int List::get(int index)			//해당 index의 데이터를 출력해주는 메서드
{
	try
	{
		valid(index);				//유효성 검사
	}	
	catch (const char* msg)			
	{
		cout << msg << endl;		//예외 발생 시 List::valid 메서드의 throw에서 던진 문자열 출력
		return 0;					//List::get에 반환값이 필요;
	}

	Node* temp = Head;							//Node의 Head 객체 주소 값을 temp로 선언	
	for (int ii = 0; ii <= index; ii++) {			//0부터 받아온 인수까지 순회하며 해당 index의 위치를 나타냄
		temp = temp->nextNode;
	}
	return temp->data;								//해당 index의 data를 반환
}

void List::valid(int count)							//유효성을 검증하기위한 메서드
{
	if (count > List::count)						//받아온 인수가 리스트의 count보다 클 경우 throw를 던짐
	{
		throw "Error : 유효하지 않은 index 입니다.";
	}
}

int List::size()						//리스트의 크기를 저장하는 count를 반환하는 메서드
{
	return List::count;
}

void List::add(int data)					//인수로 받아온 데이터 추가 메서드
{
	Node* NewNode = new Node;				//Node의 주소값을 저장하는 객체 생성
	NewNode->data = data;					//인수로 받아온 data를 멤버변수에 초기화
	NewNode->nextNode = NULL;				//멤버변수인 nextNode를 null로 초기화

	if (Head->nextNode == NULL)				//Head노드의 nextNode가 null값이면 NewNode로 초기화
	{
		Head->nextNode = NewNode;
	}
	else
	{
		Node* temp = Head;					//Node의 Head 객체 주소 값을 temp로 선언	
		while (temp->nextNode != NULL)
		{
			temp = temp->nextNode;
		}
		temp->nextNode = NewNode;
	}

	List::count++;							//리스트의 수 ++
}

void List::add(int index, int data)			//add메서드 오버로딩으로 인수를 2개 받아와 데이터 추가
{
	try
	{
		valid(index);
	}
	catch (const char* msg)
	{
		cout << msg << endl;				//예외 발생 시 List::valid 메서드의 throw에서 던진 문자열 출력
		return;
	}

	Node* NewNode = new Node;					//Node의 주소값을 저장하는 NewNode객체 생성
	NewNode->data = data;						//인수로 받아온 data를 멤버변수에 초기화
	NewNode->nextNode = NULL;					//멤버변수인 nextNode를 null로 초기화

	if (Head->nextNode == NULL)					//Head의 nextNode가 Null일 시 Head의 nextNode를 NewNode로 초기화
	{
		Head->nextNode = NewNode;
	}
	else
	{											
		Node* temp = Head;							//Node의 Head 객체 주소 값을 temp로 선언	
		for (int ii = 0; ii < count; ii++)				//0부터 리스트의 수만큼 순회
		{
			temp = temp->nextNode;
		}
		NewNode->nextNode = temp->nextNode;					//다음 리스트에 연결
		temp->nextNode = NewNode;							//맨 뒤의 nextNode에 NewNode로 초기화 하며 리스트를 이어줌
	}
	List::count++;											//데이터 의 수 ++
}

void List::set(int index, int data)				//데이터의 값을 변경하는 메서드
{
	try
	{
		valid(index);							//List::valid 메서드를 통한 유효성 검사
	}
	catch (const char* msg)
	{
		cout << msg << endl;
		return;
	}

	Node* temp = Head;							//Node의 Head 객체 주소 값을 temp로 선언	
	for (int ii = 0; ii <= index; ii++)			//인수로 받아온 index는 0으로 for문을 한번만 돌림
	{
		temp = temp->nextNode;					// temp를 temp 다음의 노드로 초기화
	}
	temp->data = data;						//main에서 받아온 (0,100)을 index와 data에 넣어 for문이 한번만 돌아가 temp는 data가 10에서 100으로 바뀜;
}

void List::remove(int index)				//데이터 제거 메서드
{
	try
	{
		valid(index);					
	}
	catch (const char* msg)
	{
		cout << msg << endl;
		return;
	}

	Node* temp = Head;						//Node의 Head 객체 주소 값을 temp로 선언	
	Node* remove = Head;					//Node의 Head 객체 주소 값을 remove로 선언	

	for (int ii = 0; ii < index; ii++)		//0부터 받아온 인수의 전까지 순회하며 temp와 remove의 위치를 조정
	{
		temp = temp->nextNode;				// temp를 temp 다음의 노드로 초기화
		remove = remove->nextNode;			// remove를 remove 다음의 노드로 초기화
	}
	remove = remove->nextNode;				// remove를 remove 다음의 노드로 초기화

	temp->nextNode = remove->nextNode;		//temp의 다음 노드를 remove->nextNode로 연결
	remove->nextNode = NULL;				//마지막 노드에 Null값
	delete remove;							//해당 remove의 index 삭제
	List::count--;							//제거 후 리스트의 숫자 --;
}

bool List::isEmpty()				//객체가 비어있는지 확인하는 메서드
{
	Node* head = Head;					//Node의 Head 객체 주소 값을 head로 선언	
	if (head->nextNode == NULL)		
	{
		return true;
	}
	else
	{
		return false;
	}
}


