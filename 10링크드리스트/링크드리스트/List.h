#pragma once

class List
{
private:
	class Node					//내부 클래스 선언
	{
	public:
		int data;
		Node* nextNode;
	};

	void valid(int count);				//예외처리를 하기 위한 함수 
	int count;							//리스트의 크기를 저장할 변수
	Node* Head = new Node;				//리스트에 접근하기 위한 Head 노드를 멤버변수로 선언

public:
	List();								//객체 생성
	
	int get(int index);					//해당 index 데이터 출력
	void add(int data);					//새로운 노드 추가 
	void add(int index, int data);		//해당 index에 새로운 노드 추가
	int size();							//List의 길이를 반환
	void set(int index, int data);		//데이터 값 변경
	void remove(int index);				//해당 index 삭제
	bool isEmpty();						//객체가 비어있는지 확인
};