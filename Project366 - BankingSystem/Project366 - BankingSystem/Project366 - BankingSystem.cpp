#include "pch.h"
#include <iostream>
#include <cstring>

using namespace std;

const int NAME_LEN = 20;

//프로그램 사용자 선택 메뉴
enum { MAKE=1, DEPOSIT, WITHDRAW, INQUIRE, EXIT };

//신용등급
enum {LEVEL_A=7, LEVEL_B=4, LEVEL_C=2};

//계좌의 종류
enum {NORMAL=1, CREDIT=2};

class Account			//계좌 정보 클래스
{
private:
	int accID;
	int balance;
	char * cusName;
public:
	Account(int ID, int money, char * name);
	Account(const Account & ref);

	int GetAccID() const;
	virtual void Deposit(int money);
	int Withdraw(int money);
	void ShowAccInfo() const;
	~Account();
};

Account::Account(int ID, int money, char * name)
	: accID(ID), balance(money)
{
	cusName = new char[strlen(name) + 1];
	strcpy(cusName, name);
}

Account::Account(const Account & ref)
	:accID(ref.accID), balance(ref.balance)
{
	cusName = new char[strlen(ref.cusName) + 1];
	strcpy(cusName, ref.cusName);
}

int Account::GetAccID() const { return accID; }

void Account::Deposit(int money)
{
	balance += money;
}

int Account::Withdraw(int money)
{
	if (balance < money)
		return 0;

	balance -= money;
	return money;
}

void Account::ShowAccInfo() const
{
	cout << "계좌 ID : " << accID << endl;
	cout << "이름 : " << cusName << endl;
	cout << "잔액 : " << balance << endl;
}

Account::~Account()
{
	delete[] cusName;
}

class NormalAccount : public Account								//최소한의 이자를 지급하는 자율 입출금식 계좌인 보통예금계좌 클래스 생성 / 보통예금계좌인 NormalAccount가 Account클래스의 상속을 받는다 
{
private:
	int interRate;												//이자율 %단위를 나타내는 멤버변수
public:
	NormalAccount(int ID, int money, char * name, int rate)
		: Account(ID, money, name), interRate(rate)
	{ }

	virtual void Deposit(int money)
	{
		Account::Deposit(money);								//원금 추가
		Account::Deposit(money * (interRate / 100.0));			//이자 추가
	}
};

class HighCreditAccount : public NormalAccount					//신용도가 높은 고객에게만 개설을 허용하는 높은 이율의 계좌인 신용신뢰계좌 클래스 생성 / NormalAccount 클래스의 상속을 받는다.
{
private:
	int specialRate;											//높은 이자 멤버변수
public:
	HighCreditAccount(int ID, int money, char * name, int rate, int special)
		:NormalAccount(ID, money, name, rate), specialRate(special)
	{ }
	virtual void Deposit(int money)
	{
	NormalAccount:Deposit(money);								//원금과 이자추가
		Account::Deposit(money*(specialRate / 100.0));			//특별 이자추가
	}
};

class AccountHandler
{
private:
	Account * accArr[100];										//
	int accNum;													//계좌의 수
public:
	AccountHandler();
	void ShowMenu(void) const;
	void DepositMoney(void);
	void WithdrawMoney(void);
	void ShowAllAccInfo(void) const;
	~AccountHandler();

protected:
	void MakeNormalAccount(void);
	void MakeCreditAccount(void);
};

void AccountHandler::ShowMenu(void) const
{
	cout << "-----------Menu----------" << endl;
	cout << "1.계좌 개설" << endl;
	cout << "2. 입  금" << endl;
	cout << "3. 출  금" << endl;
	cout << "4. 계좌정보 전체 출력" << endl;
	cout << "5. 프로그램 종료" << endl;
}

void AccountHandler::MakeAccount(void)
{
	int sel;
	cout << "계좌종류선택 : "
}
//void AccountHandler::ShowAllAccInfo(void) const
//{
//	for (int i = 0; i < accNum; i++)
//	{
//		accArr[i]->ShowAccInfo();
//		cout << endl;
//	}
//}
//
//AccountHandler::~AccountHandler()
//{
//	for (int i = 0; i < accNum; i++)
//		delete accArr[i];
//}



//void ShowMenu(void)
//{
//	cout << "-----Menu------" << endl;
//	cout << "1. 계좌개설" << endl;
//	cout << "2. 입  금" << endl;
//	cout << "3. 출  금" << endl;
//	cout << "4. 계좌정보 전체 출력" << endl;
//	cout << "5. 프로그램 종료" << endl;
//}
//
//void MakeAccount(void)	//계좌 개설
//{
//	int id;
//	char name[NAME_LEN];
//	int balance;
//
//	cout << "[계좌개설]" << endl;
//	cout << "계좌ID: ";	cin >> id;
//	cout << "이  름: ";	cin >> name;
//	cout << "입금액: ";	cin >> balance;
//	cout << endl;
//
//	accArr[accNum].accID = id;
//	accArr[accNum].balance = balance;
//	strcpy_s(accArr[accNum].cusName, name);  //문자열 복사 함수
//	accNum++;
//}
//
//void DepositMoney(void) // 입금
//{
//	int money;
//	int id;
//	cout << "[입    금]" << endl;
//	cout << "계좌ID: ";	cin >> id;
//	cout << "입금액: ";	cin >> money;
//
//	for (int i = 0; i < accNum; i++)
//	{
//		if (accArr[i].accID == id)
//		{
//			accArr[i].balance += money;
//			cout << "입금완료" << endl << endl;
//			return;
//		}
//	}
//	cout << "유효하지 않은 ID 입니다...." << endl << endl;
//}
//
//void WithdrawMoney(void) // 출금
//{
//	int money;
//	int id;
//	cout << "[출    금]" << endl;
//	cout << "계좌ID: ";	cin >> id;
//	cout << "출금액: ";	cin >> money;
//
//	for (int i = 0; i < accNum; i++)
//	{
//		if (accArr[i].accID == id)
//		{
//			if (accArr[i].balance < money)
//			{
//				cout << "잔액부족!!!!!" << endl << endl;
//				return;
//			}
//
//			accArr[i].balance -= money;
//			cout << "출금완료" << endl << endl;
//			return;
//		}
//	}
//	cout << "유효하지 않은 ID 입니다...." << endl << endl;
//}
//
//void ShowAllAccInfo(void)  // 모든 계좌 보기
//{
//	for (int i = 0; i < accNum; i++)
//	{
//		cout << "계좌ID: " << accArr[i].accID << endl;
//		cout << "이  름: " << accArr[i].cusName << endl;
//		cout << "잔  액: " << accArr[i].balance << endl << endl;
//	}
//}


int main(void)
{
	int choice;

	while (1)
	{
		ShowMenu();
		cout << "선택: ";
		cin >> choice;
		cout << endl;

		switch (choice)
		{
		case MAKE:
			MakeAccount();
			break;
		case DEPOSIT:
			DepositMoney();
			break;
		case WITHDRAW:
			WithdrawMoney();
			break;
		case INQUIRE:
			ShowAllAccInfo();
			break;
		case EXIT:
			return 0;
		default:
			cout << "잘못된 선택!!!!!!!!!!!" << endl;
		}
	}
	return 0;
}