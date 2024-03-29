#include "pch.h"
#include <iostream>
#include <string>
#include<list>


using namespace std;


class PermanentWorker
{

private:
	string name;
	int salary;					//월 급여

public:
	PermanentWorker(string tname, int money)
		: salary(money), name(tname) {}

	int GetPay() const									// 인수로 받아온 money를 급여로 반환
	{
		return salary;
	}

	void ShowSalaryInfo() const							//직원정보를 보여주는 메서드
	{
		cout << "name : " << name << endl;
		cout << "salary : " << GetPay() << endl << endl;
	}
};

class EmployeeHandler								//직원 관리를 위한 클래스
{

private:
	list<PermanentWorker*> empList;				//객체의 주소 값을 저장하는 방식으로 객체를 저장
	int empNum;										//직원들의 수를 나타내는 멤버변수

public:
	EmployeeHandler() : empNum(0) { }

	void AddEmployee(PermanentWorker* emp)			//정규직 직원을 추가하는 메서드 / PermanentWorker 객체의 주소 값을 전달
	{
		empList.push_back(emp);						//직원 리스트에 주소 값을 넣어 직원 추가
	}

	void ShowAllSalaryInfo() const					//직원리스트에 있는 모든 직원 급여 정보를 보여주는 메서드
	{
		for (auto emp : empList)
		{
			emp->ShowSalaryInfo();
		}
	}

	void ShowTotalSalary() const					//직원리스트에 있는 모든 직원의 월 급여 총 합을 보여주는 메서드
	{
		int sum = 0;
		for (auto emp : empList)
		{
			sum += emp->GetPay();
		}

		cout << "salary sum : " << sum << endl;
	}

	~EmployeeHandler()								//EmployeeHandler의 소멸자로 직원 리스트를 순회하며 순차적으로 지우는 메서드
	{
		for (auto emp : empList)
			delete emp;
	}
};

int main(void)
{
	EmployeeHandler handler;								//직원관리를 목적으로 설계된 컨트롤 클래스의 객채생성 

	handler.AddEmployee(new PermanentWorker("Kim", 1000));		//새로운 직원정보 등록
	handler.AddEmployee(new PermanentWorker("Lee", 1500));
	handler.AddEmployee(new PermanentWorker("Hwang", 2000));

	handler.ShowAllSalaryInfo();									//모든 직원의 이번 달 급여정보 

	handler.ShowTotalSalary();									//이번 달에 지불해야 할 급여의 총합
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
