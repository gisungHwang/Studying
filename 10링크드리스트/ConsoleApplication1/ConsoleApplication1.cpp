// ConsoleApplication1.cpp : 이 파일에는 'main' 함수가 포함됩니다. 거기서 프로그램 실행이 시작되고 종료됩니다.
//

#include "pch.h"
#include <iostream>
#include<list>
#include<vector>

using namespace std;
int main()
{
	int array[50];
	// 배열의 이름은 그 배열의 첫번째 주소 
	// 배열은 메모리에 연속적으로 저장된다.
	// + 1 연산 메모리에 연속적으로 저장된다. 
	//  동적 메모리 늘리고 줄이고 ,  삽입 삭제 성능 떨어진다  이동연산

	int* array2 = array + 1;

	array[4];  // 랜덤엑세스 
	cout << array << "\n";
	cout << &array[0] << "\n";
	
	cout << array + 1 << "\n";
	cout << &array[1] << "\n";
	
	cout << *(array + 1) << "\n";
	cout << array[1] << "\n";

	// list 
	// 리스트 의 포인터를 저장한다 
	//공간을 가르키는 주소 
	list<int>* list2 = new list<int>(10);
	list<int> list3;

	// 삽입 삭제 

	list3.push_back(10);

	int ccc =list3.pop_back;


	vector<int> abbb;

	abbb.push_back(20);

	list2->push_back(10);







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
