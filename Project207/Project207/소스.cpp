#include <iostream>

using namespace std;

class FruitSeller
{
private:
	int APPLE_PRICE;			//�Ǹ��� ����� ����
	int numOfApples;			//������ �ִ� ����� ��
	int myMoney;				//�Ǹ� ����

public:
	void InitMembers(int price, int num, int money)		//�μ��� ���� ����, ���� , ���� ���� �ʱ�ȭ
	{
		APPLE_PRICE = price;
		numOfApples = num;
		myMoney = money;
	}
	int SaleApples(int money)			// ��� ���ž��� �Լ� ���ڷ� ���� / num�� ��ȯ�ޱ� ���� void�� �ƴ� int�� Ÿ���� ����
	{
		if (money < 0)
		{
			cout << "�߸��� ������ ���޵Ǿ� �ǸŸ� ����մϴ�." << endl;
			return 0;
		}	
		int num = money / APPLE_PRICE;	//������ �� �ִ� ����� ������ ����
		numOfApples -= num;				//������ ����� �������� �Ǹ��� ����� ������ ���ְ� �ٽ� numOfApples�� �����
		myMoney += money;				//�Ǹż��Ϳ� ����� �� ���� ������
		return num;						//�Ǹ��� ������ ���� ��ȯ
	}
	void ShowSalesResult() const
	{
		cout << "���� ��� : " << numOfApples << endl;
		cout << "�Ǹ� ���� : " << myMoney << endl;
	}
};

class FruitBuyer
{
private:
	int myMoney;				//������ ��
	int numOfApples;			//����� ��
public:
	void InitMembers(int money)		// �������� ���� �μ��� �޾� ������ ������ �ʱ�ȭ
	{
		myMoney = money;
		numOfApples = 0;		//��� ���� �������� 0���� �ʱ�ȭ
	}
	void BuyApples(FruitSeller &seller, int money)
	{
		if (money < 0)
		{
			cout << "�߸��� ������ ���޵Ǿ� ���Ÿ� ����մϴ�." << endl;
			return;
		}
		numOfApples += seller.SaleApples(money);		//FruitSeller�� ��ü seller�� SaleApples�� �޼ҵ忡 �Ű������� ���� �Ѱ� ������ ����� ���� ��ȯ �޾� ���� ������ ��� ������ ��´�.
		myMoney -= money;								//������ ������ ����� ������ ���� ���� �ٽ� myMoney�� ���夤
	}
	void ShowBuyResult() const
	{
		cout << "���� �ܾ� : " << myMoney << endl;
		cout << "��� ���� : " << numOfApples << endl;
	}
};

int main(void)
{
	FruitSeller seller;					//FruitSeller ��ü ����
	seller.InitMembers(1000, 20, 0);	//�Ű������� ���� �ʱ�ȭ
	FruitBuyer buyer;					//FruitBuyer ��ü ����
	buyer.InitMembers(5000);			// �������� ���� 5000������ �ʱ�ȭ
	buyer.BuyApples(seller, 2000);		//�����ڰ� seller�� 2000���� �Ű������� �Ѱ� seller�� �ּҿ� 2000���� ���ڷ� �޾� ����� ����

	cout << "���� �Ǹ����� ��Ȳ" << endl;
	seller.ShowSalesResult();
	cout << "���� �������� ��Ȳ" << endl;
	buyer.ShowBuyResult();
	return 0;
}