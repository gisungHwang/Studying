#include <iostream>
#include <cstring>

using namespace std;

class PermanentWorker
{
private:
	char name[100];
	int salary;

public:
	PermanentWorker(const char* name, int money)
		:salary(money)
	{
		strcpy_s(this->name, strlen(name) + 1, name);
	}
	int GetPay() const
	{
		return salary;
	}
	void ShowSalaryinfo() const
	{
		cout << "name: " << name << endl;
		cout << "salary: " << GetPay() << endl << endl;
	}
};

class EmployeeHandler
{
private:
	PermanentWorker* empList[50];
	int empNum;
public:
	EmployeeHandler() : empNum(0)
	{
	}
	void AddEmployee(PermanentWorker* emp)
	{
		empList[empNum++] = emp;
	}
	void ShowAllSalaryInfo() const
	{
		for (int ii = 0; ii < empNum; ii++)
			empList[ii]->ShowSalaryinfo();
	}
	void ShowTotalSalary() const
	{
		int sum = 0;
		for (int ii = 0; ii < empNum; ii++)
			sum += empList[ii]->GetPay();

		cout << "salary sum: " << sum << endl;
	}
	~EmployeeHandler()
	{
		for (int ii = 0; ii < empNum; ii++)
			delete empList[ii];
	}
};

int main()
{
	EmployeeHandler handler;

	handler.AddEmployee(new PermanentWorker("kIM", 1000));
	handler.AddEmployee(new PermanentWorker("LEE", 1000));
	handler.AddEmployee(new PermanentWorker("HWANG", 1000));

	handler.ShowAllSalaryInfo();

	handler.ShowTotalSalary();
	return 0;
}