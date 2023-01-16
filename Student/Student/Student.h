#pragma once
#include <iostream>
#include <string>

using namespace std;

class Student
{								//private�� ����
	static int last_num;		//�л� ��ȣ �������� ����
	int number;					//�л� ��ȣ
	string name;				//�л� �̸�
	int kor;
	int eng;
	int math;
	static const int Def_Kor;	//�������� ����Ʈ ��
	static const int Def_Eng;	//�������� ����Ʈ ��
	static const int Def_Math;	//�������� ����Ʈ ��
	int sum;
	double average;

public:

	static int GetStuCount();	//���� �޼���
	Student(string name);
	void SetKor(int kor);
	void SetEng(int eng);
	void SetMath(int math);
	void SetName(string name);
	void SetNumber(int number);
	void SetSum();
	void SetAverage();
	int GetKor()const;
	int GetEng()const;
	int GetMath()const;
	string GetName()const;
	int GetNumber()const;
	int GetSum()const;
	double GetAverage()const;
	void View();
};