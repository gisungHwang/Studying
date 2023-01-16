#include "Student.h"

int Student::last_num;

const int Student::Def_Kor = -1;
const int Student::Def_Eng = -1;
const int Student::Def_Math = -1;

int Student::GetStuCount()			//학생 수 알려주는 메소드
{
	return last_num;
}

Student::Student(string name)
	:number(last_num)				//number을 last_num으로 초기화
{
	last_num++;
	this->name = name;				//인수로 받아온 name 초기화
	SetKor(Def_Kor);
	SetEng(Def_Eng);
	SetMath(Def_Math);
}

void Student::SetKor(int kor)			// 국어 점수 
{
	if (kor < 0 || kor > 100)			//인수로 받아온 국어 점수가 0 미만이거나 100을 초과 시 Def_Kor인 -1로 초기화
	{
		kor = Def_Kor;					
	}
	this->kor = kor;					//받아온 인수인 국어 점수를 초기화
}

void Student::SetEng(int eng)			//영어점수
{
	if (eng < 0 || eng > 100)			//인수로 받아온 영어 점수가 0 미만이거나 100을 초과 시 Def_Eng인 -1로 초기화
	{
		eng = Def_Eng;					
	}
	this->eng = eng;					//인수로 받아온 영어 점수가 0 미만이거나 100을 초과가 아닐 시 받아온 인수를 영어점수로 초기화
}

void Student::SetMath(int math)			//수학점수
{
	if (math < 0 || math > 100)			//인수로 받아온 수학 점수가 0 미만이거나 100을 초과 시 Def_Math인 -1로 초기화
	{
		math = Def_Math;
	}
	this->math = math;					//인수로 받아온 수학 점수가 0 미만이거나 100을 초과가 아닐 시 받아온 인수를 수학점수로 초기화
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
	return this->math;				//수학점수 반환
}

string Student::GetName()const
{
	return this->name;				//이름 반환
}

int Student::GetNumber()const
{
	return this->number + 1;		//배열은 0부터 시작이기 때문에 +1을 해줌
}

void Student::SetSum()			//모든 과목의 합계를 나타내는 메서드
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
	double average = 0.0;						//평균 초기화;
	average = GetSum() / (double) 3.0;			//합계를 과목의 수로 나누어 평균을 구함
	this->average = average;
}

double Student::GetAverage()const
{
	return this->average;						//평균 반환
}

void Student::View()						//View메서드를 통해 Student의 private로 선언된 멤버변수에 접근
{
	cout << "학생 이름 :" << GetName() << endl;
	cout << "학생 번호 :" << GetNumber() << endl;
	cout << "국어 성적 :" << GetKor() << endl;
	cout << "영어 성적 :" << GetEng() << endl;
	cout << "수학 성적 :" << GetMath() << endl;
	cout << "전체 총점 :" << GetSum() << endl;
	cout << "전체 평균 :" << GetAverage() << endl;
	cout << "---------------------------" << endl;
}
