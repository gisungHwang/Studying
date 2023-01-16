#include "Student.h"

int Student::last_num;

const int Student::Def_Kor = -1;
const int Student::Def_Eng = -1;
const int Student::Def_Math = -1;

int Student::GetStuCount()			//�л� �� �˷��ִ� �޼ҵ�
{
	return last_num;
}

Student::Student(string name)
	:number(last_num)				//number�� last_num���� �ʱ�ȭ
{
	last_num++;
	this->name = name;				//�μ��� �޾ƿ� name �ʱ�ȭ
	SetKor(Def_Kor);
	SetEng(Def_Eng);
	SetMath(Def_Math);
}

void Student::SetKor(int kor)			// ���� ���� 
{
	if (kor < 0 || kor > 100)			//�μ��� �޾ƿ� ���� ������ 0 �̸��̰ų� 100�� �ʰ� �� Def_Kor�� -1�� �ʱ�ȭ
	{
		kor = Def_Kor;					
	}
	this->kor = kor;					//�޾ƿ� �μ��� ���� ������ �ʱ�ȭ
}

void Student::SetEng(int eng)			//��������
{
	if (eng < 0 || eng > 100)			//�μ��� �޾ƿ� ���� ������ 0 �̸��̰ų� 100�� �ʰ� �� Def_Eng�� -1�� �ʱ�ȭ
	{
		eng = Def_Eng;					
	}
	this->eng = eng;					//�μ��� �޾ƿ� ���� ������ 0 �̸��̰ų� 100�� �ʰ��� �ƴ� �� �޾ƿ� �μ��� ���������� �ʱ�ȭ
}

void Student::SetMath(int math)			//��������
{
	if (math < 0 || math > 100)			//�μ��� �޾ƿ� ���� ������ 0 �̸��̰ų� 100�� �ʰ� �� Def_Math�� -1�� �ʱ�ȭ
	{
		math = Def_Math;
	}
	this->math = math;					//�μ��� �޾ƿ� ���� ������ 0 �̸��̰ų� 100�� �ʰ��� �ƴ� �� �޾ƿ� �μ��� ���������� �ʱ�ȭ
}

void Student::SetName(string name)
{
	this->name = name;
}

void Student::SetNumber(int number)
{
	this->number = number;
}

int Student::GetKor()const
{
	return this->kor;			
}

int Student::GetEng()const
{
	return this->eng;
}

int Student::GetMath()const
{
	return this->math;				//�������� ��ȯ
}

string Student::GetName()const
{
	return this->name;				//�̸� ��ȯ
}

int Student::GetNumber()const
{
	return this->number + 1;		//�迭�� 0���� �����̱� ������ +1�� ����
}

void Student::SetSum()			//��� ������ �հ踦 ��Ÿ���� �޼���
{
	int sum = 0;			
	sum += (kor + eng + math);
	this->sum = sum;
}

int Student::GetSum()const
{
	return this->sum;
}

void Student::SetAverage()
{
	double average = 0.0;						//��� �ʱ�ȭ;
	average = GetSum() / (double) 3.0;			//�հ踦 ������ ���� ������ ����� ����
	this->average = average;
}

double Student::GetAverage()const
{
	return this->average;						//��� ��ȯ
}

void Student::View()						//View�޼��带 ���� Student�� private�� ����� ��������� ����
{
	cout << "�л� �̸� :" << GetName() << endl;
	cout << "�л� ��ȣ :" << GetNumber() << endl;
	cout << "���� ���� :" << GetKor() << endl;
	cout << "���� ���� :" << GetEng() << endl;
	cout << "���� ���� :" << GetMath() << endl;
	cout << "��ü ���� :" << GetSum() << endl;
	cout << "��ü ��� :" << GetAverage() << endl;
	cout << "---------------------------" << endl;
}
