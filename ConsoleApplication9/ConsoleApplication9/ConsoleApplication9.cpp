#include "pch.h"
#include <iostream>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define _CRT_SECURE_NO_WARNINGS

using namespace std;

// 학생의 데이터를 담는 구조체를 새로운 타입 element로 정의
typedef struct student {
	int num;
	char name[20]; // 이름은 4글자까지 가능
	int kor, math, eng, com;
}element;

// 이중 연결리스트의 자기참조구조체 구현
typedef struct DListNode {
	struct DListNode* llink;
	element data;
	struct DListNode* rlink;
}DListNode;

// 함수 원형
void init(DListNode* phead); // 처음에 노드를 초기화
void dinsert_node(DListNode* before, DListNode* new_node); // 새로운 노드를 before 노드 다음에 삽입
void search(DListNode* head, element data); // 학생 번호에 입력 받아 노드 탐색 후 출력
void sort_dinsert(DListNode* head); // 이중 연결리스트를 정렬
void display(DListNode* phead);// 연결 리스트 전체 출력
void free_node(DListNode* phead); // 동적 할당된 메모리 반환

int main() {
	FILE* fp;
	DListNode* head = (DListNode*)malloc(sizeof(DListNode)); // 헤드 노드 생성(데이터 필드는 empty)
	DListNode* tmp; // 임시로 데이터를 입력받는 노드
	element dat; // 데이터 임시로 입력 받는 구조체
	int flag; // 입력받는 메뉴

	// 연결 리스트 초기화
	init(head);


	

	// 메뉴 선택하여 조건에 맞게 함수 호출 
	while (1) {
		cout << "\n종료(0) 학생 데이터 입력(1) 학생 검색(2) 목록 보기(3)\n" << endl;
		cout << "메뉴 입력 : ";
		cin >> flag;

		switch (flag)
		{
		case 0:													//프로그램 종료 
			exit(1);
			break;

		case 1:													 // 데이터 입력 받아 새로운 노드 추가 후 삽입
			tmp = (DListNode*)malloc(sizeof(DListNode));

			cout<<"추가할 학생 번호: "; cin>>dat.num;
			cout<<"이름 : "; cin>>dat.name;
			cout << "국어 : "; cin >> dat.kor;
			cout << "수학 : "; cin>> dat.math;
			cout << "영어 : "; cin>> dat.eng;
			cout<<"컴퓨터 : "; cin >>dat.com;

			tmp->data = dat;							// 새로운 노드의 데이터 필드에 입력 받은 dat구조체를 대입
			dinsert_node(head, tmp);						// 노드 맨 앞에 삽입
			break;
				
		case 2:											// 학생 번호 입력 받아 리스트에서 탐색 후 출력
			printf("검색할 학생 번호 : ");
			scanf_s("%d", &dat.num);
			search(head, dat);								// 학생 번호 찾아 출력
			break;

		case 3:															// 리스트를 정렬하여 출력
			printf("\n<정렬된 목록 보기>\n\n");
			sort_dinsert(head);											 // 목록을 학생 번호 순대로 정렬
			display(head);												// 출력
			break;

		default:break;
		}

	}
	// 파일 열기
	fopen_s(&fp, "data.txt", "rt");
	if (fp == NULL) {
		printf("File not found\n");
		return 0;
	}

	// 파일로부터 데이터 입력 받아 tmp 노드에 저장후 노드 삽입
	while (!feof(fp)) {							//feof함수는 end of file로 파일이 끝을 나타내는 함수 
		fscanf_s(fp, "%d %s %d %d %d %d",
			&dat.num, dat.name, &dat.kor, &dat.math, &dat.eng, &dat.com);
		printf("%6d %10s %6d %6d %6d %6d\n",
			dat.num, dat.name, dat.kor, dat.math, dat.eng, dat.com);
		tmp = (DListNode*)malloc(sizeof(DListNode));					//DListNode타입 * 메모리를 동적할당하는 공간 생성하여  tmp에 담는다
		tmp->data = dat;												//tmp의 data에 임시 데이터를 담는다.
			
		dinsert_node(head, tmp);								 // head에 새로 만든 tmp를 삽입
	}
	free_node(head);
	fclose(fp);
}

void init(DListNode* phead) {				//리스트 생성을 초기화 하는 매서드
	phead->llink = phead;					//phead생성 후 왼쪽 링크필드에 초기엔 아무것도 없어서 자기 자신을 가르키도록 phead 포인터 값을 그대로 대입
	phead->rlink = phead;					//phead생성 후 오른쪽 링크필드에 초기엔 아무것도 없어서 자기 자신을 가르키도록 phead 포인터 값을 그대로 대입
}

void dinsert_node(DListNode* before, DListNode* new_node) {			//new_node를 before노드 다음에 삽입하기 위한 메서드
	// new_node의 링크 필드 먼저 생성
	new_node->llink = before;						//new_node의 llink에는 before 주소를 저장
	new_node->rlink = before->rlink;					//new_node의 rlink가 before rlink에 

	before->rlink->llink = new_node;				//before의 rrlink가 가르키고 있는 link가 new_node의 주소를 저장
	before->rlink = new_node;					// before의 rlink에는 new_node 주소를 저장

}

void search(DListNode* head, element data) {			//data에서 학생 번호를 입력받아 탐색 후 출력하는 메서드
	DListNode* p;

	for (p = head->rlink; p != head; p = p->rlink) {			
		if (p->data.num == data.num) {
			printf("%6d %10s %6d %6d %6d %6d\n",
				p->data.num, p->data.name, p->data.kor, p->data.math, p->data.eng, p->data.com);
			return;
		}
	}
	printf("%d 번 학생의 번호 검색 실패\n\n", data.num);
}

void sort_dinsert(DListNode* head) {				//학생 번호에 따라 오름차순 정렬하는 메서드
	DListNode* p, *q;
	element tmp;

	// 오른쪽으로 이동하여 작은 값 찾으며 정렬
	for (p = head->rlink; p->rlink != head; p = p->rlink) {
		for (q = p->rlink; q != head; q = q->rlink) {
			if (q->data.num < p->data.num) // q의 num이 p의 num보다 크면 
			{
				// q와 p의 swap
				tmp = p->data;
				p->data = q->data;			// q와 p의 자리 바꿔줌
				q->data = tmp;
			}
		}
	}
}

void display(DListNode* phead) {												//리스트의 데이터들을 출력해주는 함수
	DListNode* p;

	printf("-------------------------------------------------------\n");
	printf("|번 호| 이 름 | 언어 | 수리 | 영어 |컴퓨터|\n");
	printf("-------------------------------------------------------\n");

	for (p = phead->rlink; p != phead; p = p->rlink) {
		printf("|%3d  |  %5s |  %4d  |  %4d  | %4d  | %5d   |\n",
			p->data.num, p->data.name, p->data.kor, p->data.math, p->data.eng, p->data.com);
	}
	printf("--------------------------------------------------------\n");
}

void free_node(DListNode* phead) {			//각 노드에 접근하여 동적 할당한 메모리를 해제하는 메서드
	DListNode* p = phead->rlink, *next;
	while (p != phead) {
		next = p;
		free(p);
		p = p->rlink;
	}
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
