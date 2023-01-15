//#include "pch.h"
#include <iostream>
#include <cstring>
#pragma warning(disable:4996)

using namespace std;

const int NAME_LEN = 20;

// 프로그램 사용자의 선택 메뉴
enum { MAKE = 1, DEPOSIT, WITHDRAW, INQUIRE, EXIT };

// 신용등급
enum { LEVEL_A = 7, LEVEL_B = 4, LEVEL_C = 2 };

// 계좌의 종류
enum { NORMAL = 1, CREDIT = 2 };


class Account					//계좌 정보 클래스
{
private:
	int accID;					//고객 계좌
	int balance;				//잔액
	char* cusName;				

public:
	Account(int ID, int money, const char* name);
	Account(const Account & ref);

	int GetAccID() const;
	virtual void Deposit(int money);
	int Withdraw(int money);
	void ShowAccInfo() const;
	~Account();
};

Account::Account(int ID, int money, const char* name)
	: accID(ID), balance(money)
{
	cusName = new char[strlen(name) + 1];
	strcpy(cusName, name);
}

Account::Account(const Account & ref)
	: accID(ref.accID), balance(ref.balance)
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
	return money;					//잔액을 반환
}

void Account::ShowAccInfo() const
{
	cout << "계좌ID: " << accID << endl;
	cout << "이  름: " << cusName << endl;
	cout << "잔  액: " << balance << endl;
}

Account::~Account()
{
	delete[]cusName;
}

class NormalAccount : public Account					//최소한의 이자를 지급하는 자율 입출금식 계좌인 보통예금계좌 클래스 생성 / 보통예금계좌인 NormalAccount가 Account클래스의 상속을 받는다
{
private:
	int interRate;										//이자율 %단위를 나타내는 멤버변수
public:
	NormalAccount(int ID, int money, const char* name, int rate)
		: Account(ID, money, name), interRate(rate)
	{  }

	virtual void Deposit(int money)
	{
		Account::Deposit(money);							// 원금추가
		Account::Deposit(money*(interRate / 100.0));		// 이자추가
	}
};

class HighCreditAccount : public NormalAccount			//신용도가 높은 고객에게만 개설을 허용하는 높은 이율의 계좌인 신용신뢰계좌 클래스 생성 / NormalAccount 클래스의 상속을 받는다.
{
private:
	int specialRate;									//신용도가 높은 고객들의 높은 이자율%를 나타내는 멤버변수
public:
	HighCreditAccount(int ID, int money, const char* name, int rate, int special)
		: NormalAccount(ID, money, name, rate), specialRate(special)
	{  }

	virtual void Deposit(int money)
	{
		NormalAccount::Deposit(money);					// 원금과 이자추가 
		Account::Deposit(money*(specialRate / 100.0));   // 특별이자추가
	}
};

class AccountHandler									//계좌 컨트롤 클래스
{
private:
	Account * accArr[100];								// 계좌의 
	int accNum;											//계좌의 수

public:
	AccountHandler();
	void ShowMenu(void) const;
	void MakeAccount(void);
	void DepositMoney(void);
	void WithdrawMoney(void);
	void ShowAllAccInfo(void) const;
	~AccountHandler();

protected:
	void MakeNormalAccount(void);
	void MakeCreditAccount(void);
};

void AccountHandler::ShowMenu(void) const				//메뉴를 보여주는 메서드
{
	cout << "-----Menu------" << endl;
	cout << "1. 계좌개설" << endl;
	cout << "2. 입    금" << endl;
	cout << "3. 출    금" << endl;
	cout << "4. 계좌정보 전체 출력" << endl;
	cout << "5. 프로그램 종료" << endl;
}

void AccountHandler::MakeAccount(void)						//계좌 종류 선택 메서드
{
	int sel;
	cout << "[계좌종류선택]" << endl;
	cout << "1.보통예금계좌 ";
	cout << "2.신용신뢰계좌 " << endl;
	cout << "선택: ";
	cin >> sel;

	if (sel == NORMAL)
		MakeNormalAccount();
	else
		MakeCreditAccount();
}

void AccountHandler::MakeNormalAccount(void)				//보통예금계좌 생성 메서드
{
	int id;
	char name[NAME_LEN];
	int balance;
	int interRate;

	cout << "[보통예금계좌 개설]" << endl;
	cout << "계좌ID: ";	cin >> id;
	cout << "이  름: ";	cin >> name;
	cout << "입금액: ";	cin >> balance;
	cout << "이자율: ";	cin >> interRate;
	cout << endl;

	accArr[accNum++] = new NormalAccount(id, balance, name, interRate);			//보통예금계좌 생성
}

void AccountHandler::MakeCreditAccount(void)				//신용신뢰계좌 생성 메서드 / 신용등급 3가지 중 하나 선택
{
	int id;
	char name[NAME_LEN];
	int balance;
	int interRate;
	int creditLevel;

	cout << "[신용신뢰계좌 개설]" << endl;
	cout << "계좌ID: ";	cin >> id;
	cout << "이  름: ";	cin >> name;
	cout << "입금액: ";	cin >> balance;
	cout << "이자율: ";	cin >> interRate;
	cout << "신용등급(1toA, 2toB, 3toC): ";	cin >> creditLevel;
	cout << endl;

	switch (creditLevel)
	{
	case 1:
		accArr[accNum++] = new HighCreditAccount(id, balance, name, interRate, LEVEL_A);
		break;
	case 2:
		accArr[accNum++] = new HighCreditAccount(id, balance, name, interRate, LEVEL_B);
		break;
	case 3:
		accArr[accNum++] = new HighCreditAccount(id, balance, name, interRate, LEVEL_C);
	}
}

void AccountHandler::DepositMoney(void)				//입금 메서드
{
	int money;
	int id;
	cout << "[입    금]" << endl;
	cout << "계좌ID: ";	cin >> id;
	cout << "입금액: ";	cin >> money;

	for (int ii = 0; ii < accNum; ii++)
	{
		if (accArr[ii]->GetAccID() == id)
		{
			accArr[ii]->Deposit(money);
			cout << "입금완료" << endl << endl;
			return;
		}
	}
	cout << "유효하지 않은 ID 입니다." << endl << endl;
}

void AccountHandler::WithdrawMoney(void)			//출금 메서드
{
	int money;
	int id;
	cout << "[출    금]" << endl;
	cout << "계좌ID: ";	cin >> id;
	cout << "출금액: ";	cin >> money;

	for (int ii = 0; ii < accNum; ii++)
	{
		if (accArr[ii]->GetAccID() == id)
		{
			if (accArr[ii]->Withdraw(money) == 0)
			{
				cout << "잔액부족" << endl << endl;
				return;
			}

			cout << "출금완료" << endl << endl;
			return;
		}
	}
	cout << "유효하지 않은 ID 입니다." << endl << endl;
}

AccountHandler::AccountHandler() : accNum(0)
{  }

void AccountHandler::ShowAllAccInfo(void) const				//모든 계좌 정보를 보여주는 메서드
{
	for (int ii = 0; ii < accNum; ii++)
	{
		accArr[ii]->ShowAccInfo();
		cout << endl;
	}
}

AccountHandler::~AccountHandler()							//모든 계좌를 삭제하며 소멸
{
	for (int ii = 0; ii < accNum; ii++)
		delete accArr[ii];
}

int main(void)
{
	AccountHandler manager;
	int choice;

	while (1)
	{
		manager.ShowMenu();
		cout << "선택: ";
		cin >> choice;
		cout << endl;

		switch (choice)
		{
		case MAKE:
			manager.MakeAccount();
			break;
		case DEPOSIT:
			manager.DepositMoney();
			break;
		case WITHDRAW:
			manager.WithdrawMoney();
			break;
		case INQUIRE:
			manager.ShowAllAccInfo();
			break;
		case EXIT:
			return 0;
		default:
			cout << "잘못된 선택입니다!!!!!!" << endl;
		}
	}
	return 0;
}