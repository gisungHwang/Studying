#pragma once
#include <iostream>
#include <string>

using namespace std;

class Student
{								//private로 선언
	static int last_num;		//학생 번호 정적으로 선언
	int number;					//학생 번호
	string name;				//학생 이름
	int kor;
	int eng;
	int math;
	static const int Def_Kor;	//국어점수 디폴트 값
	static const int Def_Eng;	//영어점수 디폴트 값
	static const int Def_Math;	//수학점수 디폴트 값
	int sum;
	double average;

public:

	static int GetStuCount();	//정적 메서드
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