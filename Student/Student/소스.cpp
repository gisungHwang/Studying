#include <iostream>
#include "Student.h"

using namespace std;

int main(void)
{
	Student* arr[3];				//��ü�� �ּҰ��� �迭���·� ����

	arr[0] = new Student("�����");
	arr[1] = new Student("�����");
	arr[2] = new Student("�̰���");

	arr[0]->SetKor(100);
	arr[0]->SetEng(100);
	arr[0]->SetMath(100);
	arr[0]->SetSum();
	arr[0]->SetAverage();

	arr[1]->SetKor(90);
	arr[1]->SetEng(90);
	arr[1]->SetMath(90);
	arr[1]->SetSum();
	arr[1]->SetAverage();

	arr[2]->SetKor(80);
	arr[2]->SetEng(70);
	arr[2]->SetMath(90);
	arr[2]->SetSum();
	arr[2]->SetAverage();

	//�л� ��� ���
	cout << "���� �л� ��:" << Student::GetStuCount() << endl;
	cout << "---------------------------------" << endl;

	for (int i = 0; i < 3; i++)
		arr[i]->View();

	//�л� ��ü �Ҹ�
	for (int i = 0; i < 3; i++)
		delete arr[i];

	return 0;
}