#include <iostream>

using namespace std;

class FruitSeller
{
private:
	int APPLE_PRICE;			//판매할 사과의 가격
	int numOfApples;			//가지고 있는 사과의 수
	int myMoney;				//판매 수익

public:
	void InitMembers(int price, int num, int money)		//인수로 받은 가격, 숫자 , 돈을 각각 초기화
	{
		APPLE_PRICE = price;
		numOfApples = num;
		myMoney = money;
	}
	int SaleApples(int money)			// 사과 구매액이 함수 인자로 전달 / num을 반환받기 위해 void가 아닌 int로 타입을 받음
	{
		if (money < 0)
		{
			cout << "잘못된 정보가 전달되어 판매를 취소합니다." << endl;
			return 0;
		}	
		int num = money / APPLE_PRICE;	//구매할 수 있는 사과의 개수를 구함
		numOfApples -= num;				//보유한 사과의 개수에서 판매한 사과의 개수를 빼주고 다시 numOfApples에 담아줌
		myMoney += money;				//판매수익에 사과를 판 돈을 더해줌
		return num;						//판매한 과일의 수를 반환
	}
	void ShowSalesResult() const
	{
		cout << "남은 사과 : " << numOfApples << endl;
		cout << "판매 수익 : " << myMoney << endl;
	}
};

class FruitBuyer
{
private:
	int myMoney;				//구매할 돈
	int numOfApples;			//사과의 수
public:
	void InitMembers(int money)		// 구매자의 돈을 인수로 받아 구매할 돈으로 초기화
	{
		myMoney = money;
		numOfApples = 0;		//사과 구매 이전으로 0으로 초기화
	}
	void BuyApples(FruitSeller &seller, int money)
	{
		if (money < 0)
		{
			cout << "잘못된 정보가 전달되어 구매를 취소합니다." << endl;
			return;
		}
		numOfApples += seller.SaleApples(money);		//FruitSeller의 객체 seller의 SaleApples의 메소드에 매개변수로 돈을 넘겨 구매한 사과의 수를 반환 받아 나의 구매한 사과 개수에 담는다.
		myMoney -= money;								//보유한 돈에서 사과를 구매한 돈을 빼서 다시 myMoney에 저장ㄴ
	}
	void ShowBuyResult() const
	{
		cout << "현재 잔액 : " << myMoney << endl;
		cout << "사과 개수 : " << numOfApples << endl;
	}
};

int main(void)
{
	FruitSeller seller;					//FruitSeller 객체 생성
	seller.InitMembers(1000, 20, 0);	//매개변수로 값을 초기화
	FruitBuyer buyer;					//FruitBuyer 객체 생성
	buyer.InitMembers(5000);			// 구매자의 돈을 5000원으로 초기화
	buyer.BuyApples(seller, 2000);		//구매자가 seller과 2000원을 매개변수로 넘겨 seller의 주소와 2000원을 인자로 받아 사과를 구매

	cout << "과일 판매자의 현황" << endl;
	seller.ShowSalesResult();
	cout << "과일 구매자의 현황" << endl;
	buyer.ShowBuyResult();
	return 0;
}