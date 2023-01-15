//#include "pch.h"
#include <iostream>
#include <cstring>
#pragma warning(disable:4996)

using namespace std;

const int NAME_LEN = 20;

// ���α׷� ������� ���� �޴�
enum { MAKE = 1, DEPOSIT, WITHDRAW, INQUIRE, EXIT };

// �ſ���
enum { LEVEL_A = 7, LEVEL_B = 4, LEVEL_C = 2 };

// ������ ����
enum { NORMAL = 1, CREDIT = 2 };


class Account					//���� ���� Ŭ����
{
private:
	int accID;					//�� ����
	int balance;				//�ܾ�
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
	return money;					//�ܾ��� ��ȯ
}

void Account::ShowAccInfo() const
{
	cout << "����ID: " << accID << endl;
	cout << "��  ��: " << cusName << endl;
	cout << "��  ��: " << balance << endl;
}

Account::~Account()
{
	delete[]cusName;
}

class NormalAccount : public Account					//�ּ����� ���ڸ� �����ϴ� ���� ����ݽ� ������ ���뿹�ݰ��� Ŭ���� ���� / ���뿹�ݰ����� NormalAccount�� AccountŬ������ ����� �޴´�
{
private:
	int interRate;										//������ %������ ��Ÿ���� �������
public:
	NormalAccount(int ID, int money, const char* name, int rate)
		: Account(ID, money, name), interRate(rate)
	{  }

	virtual void Deposit(int money)
	{
		Account::Deposit(money);							// �����߰�
		Account::Deposit(money*(interRate / 100.0));		// �����߰�
	}
};

class HighCreditAccount : public NormalAccount			//�ſ뵵�� ���� �����Ը� ������ ����ϴ� ���� ������ ������ �ſ�ŷڰ��� Ŭ���� ���� / NormalAccount Ŭ������ ����� �޴´�.
{
private:
	int specialRate;									//�ſ뵵�� ���� ������ ���� ������%�� ��Ÿ���� �������
public:
	HighCreditAccount(int ID, int money, const char* name, int rate, int special)
		: NormalAccount(ID, money, name, rate), specialRate(special)
	{  }

	virtual void Deposit(int money)
	{
		NormalAccount::Deposit(money);					// ���ݰ� �����߰� 
		Account::Deposit(money*(specialRate / 100.0));   // Ư�������߰�
	}
};

class AccountHandler									//���� ��Ʈ�� Ŭ����
{
private:
	Account * accArr[100];								// ������ 
	int accNum;											//������ ��

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

void AccountHandler::ShowMenu(void) const				//�޴��� �����ִ� �޼���
{
	cout << "-----Menu------" << endl;
	cout << "1. ���°���" << endl;
	cout << "2. ��    ��" << endl;
	cout << "3. ��    ��" << endl;
	cout << "4. �������� ��ü ���" << endl;
	cout << "5. ���α׷� ����" << endl;
}

void AccountHandler::MakeAccount(void)						//���� ���� ���� �޼���
{
	int sel;
	cout << "[������������]" << endl;
	cout << "1.���뿹�ݰ��� ";
	cout << "2.�ſ�ŷڰ��� " << endl;
	cout << "����: ";
	cin >> sel;

	if (sel == NORMAL)
		MakeNormalAccount();
	else
		MakeCreditAccount();
}

void AccountHandler::MakeNormalAccount(void)				//���뿹�ݰ��� ���� �޼���
{
	int id;
	char name[NAME_LEN];
	int balance;
	int interRate;

	cout << "[���뿹�ݰ��� ����]" << endl;
	cout << "����ID: ";	cin >> id;
	cout << "��  ��: ";	cin >> name;
	cout << "�Աݾ�: ";	cin >> balance;
	cout << "������: ";	cin >> interRate;
	cout << endl;

	accArr[accNum++] = new NormalAccount(id, balance, name, interRate);			//���뿹�ݰ��� ����
}

void AccountHandler::MakeCreditAccount(void)				//�ſ�ŷڰ��� ���� �޼��� / �ſ��� 3���� �� �ϳ� ����
{
	int id;
	char name[NAME_LEN];
	int balance;
	int interRate;
	int creditLevel;

	cout << "[�ſ�ŷڰ��� ����]" << endl;
	cout << "����ID: ";	cin >> id;
	cout << "��  ��: ";	cin >> name;
	cout << "�Աݾ�: ";	cin >> balance;
	cout << "������: ";	cin >> interRate;
	cout << "�ſ���(1toA, 2toB, 3toC): ";	cin >> creditLevel;
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

void AccountHandler::DepositMoney(void)				//�Ա� �޼���
{
	int money;
	int id;
	cout << "[��    ��]" << endl;
	cout << "����ID: ";	cin >> id;
	cout << "�Աݾ�: ";	cin >> money;

	for (int ii = 0; ii < accNum; ii++)
	{
		if (accArr[ii]->GetAccID() == id)
		{
			accArr[ii]->Deposit(money);
			cout << "�ԱݿϷ�" << endl << endl;
			return;
		}
	}
	cout << "��ȿ���� ���� ID �Դϴ�." << endl << endl;
}

void AccountHandler::WithdrawMoney(void)			//��� �޼���
{
	int money;
	int id;
	cout << "[��    ��]" << endl;
	cout << "����ID: ";	cin >> id;
	cout << "��ݾ�: ";	cin >> money;

	for (int ii = 0; ii < accNum; ii++)
	{
		if (accArr[ii]->GetAccID() == id)
		{
			if (accArr[ii]->Withdraw(money) == 0)
			{
				cout << "�ܾ׺���" << endl << endl;
				return;
			}

			cout << "��ݿϷ�" << endl << endl;
			return;
		}
	}
	cout << "��ȿ���� ���� ID �Դϴ�." << endl << endl;
}

AccountHandler::AccountHandler() : accNum(0)
{  }

void AccountHandler::ShowAllAccInfo(void) const				//��� ���� ������ �����ִ� �޼���
{
	for (int ii = 0; ii < accNum; ii++)
	{
		accArr[ii]->ShowAccInfo();
		cout << endl;
	}
}

AccountHandler::~AccountHandler()							//��� ���¸� �����ϸ� �Ҹ�
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
		cout << "����: ";
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
			cout << "�߸��� �����Դϴ�!!!!!!" << endl;
		}
	}
	return 0;
}