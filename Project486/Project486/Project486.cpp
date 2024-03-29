#include "pch.h"
#include <iostream>

using namespace std;

class SortRule													//추상클래스로 정의
{
public:
	virtual bool operator()(int num1, int num2) const = 0;		//operator함수를 순수가상함수로 정의하여 자식클래스에서 재정의 하겠다는 의미
};

class AscendingSort : public SortRule							// SortRule클래스를 상속받은 오름차순 정의 클래스
{
public:
	bool operator()(int num1, int num2) const					//functor가 호출되면 operator이 대신 호출
	{
		if (num1 > num2)										//num1이 더 크면 true를 반환
			return true;
		else 
			return false;
	}
};

class DescendingSort : public SortRule							// SortRule클래스를 상속받은 내림차순 정의 클래스
{
public:
	bool operator()(int num1, int num2) const					//functor가 호출되면 operator이 대신 호출
	{
		if (num1 < num2)										//num2가 더 크면 true를 반환
			return true;
		else 
			return false;
	}
};

class DataStorage												//int형 정수의 저장소 클래스
{
	int* arr;													//저장할 정수의 주소값을 저장
	int idx;													//배열의 데이터 개수
	const int MAX_LEN;											//저장할 수 있는 배열의 최대 길이
public:
	DataStorage(int arrlen) 
		: idx(0), MAX_LEN(arrlen)								//idx를 0으로 초기화 및 인수로 받은 arrlen을 MAX_LEN으로 초기화
	{
		arr = new int[MAX_LEN];									//저장할 정수의 최대 개수를 결정할 수 있도록 정의
	}
	void AddData(int num)										//정수형 데이터의 저장을 목적으로 정의된 함수
	{
		if (MAX_LEN <= idx)										// 데이터 개수가 저장할 수 있는 배열의 최대 길이보다 크거나 같으면 반환
		{
			cout << "더 이상 저장이 불가능합니다." << endl;
			return;
		}
		arr[idx++] = num;										//인수로 받아온 num을 배열형태로 추가
	}
	void ShowAllData()
	{
		for (int ii = 0; ii < idx; ii++)						//0부터 배열의 데이터 개수 만큼 순회하며 출력
			cout << arr[ii] << ' ';

		cout << endl;
	}
	void SortData(const SortRule &functor)						//매개변수 형이 SortRule의 참조형이므로, SortRule 클래스를 상속하는 AscendingSort클래스와 DescendingSort클래스의 객체는 인자로 전달 가능
	{															//버블정렬 사용
		for (int ii = 0; ii < idx - 1; ii++)					//0부터 idx-1까지 반복
		{
			for (int jj = 0; jj < (idx - 1)-ii; jj++)			
			{
				if (functor(arr[jj], arr[jj + 1]))				//functor의 함수 호출 결과를 통해 정렬이 진행 / functor에서 유도클래스의 operator()함수가 대신 호출
				{
					int kk = arr[jj];
					arr[jj] = arr[jj + 1];
					arr[jj+1] = kk;							//두 수를 비교 후 자리 교환

				}
			}
		}
	}
};

int main()
{
	DataStorage storage(5);								//DataStorage 클래스의 객체 생성 후 5를 인자값으로 넘겨줌
	storage.AddData(40);
	storage.AddData(30);
	storage.AddData(50);
	storage.AddData(20);
	storage.AddData(10);

	storage.SortData(AscendingSort());					//데이터를 저장 후 정렬을 진행(AscendingSort 객체를 임시객체로 선언하여 인자로 전달)
	storage.ShowAllData();

	storage.SortData(DescendingSort());					//데이터를 저장 후 정렬을 진행(DescendingSort 객체를 임시객체로 선언하여 인자로 전달)
	storage.ShowAllData();
	return 0;
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
