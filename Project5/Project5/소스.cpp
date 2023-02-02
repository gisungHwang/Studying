#include <iostream>
#include <string>
using namespace std;

#define MIN_TABLE 0
#define MAX_TABLE 10
struct Menu {
	int food_num = 0;
	string food_name = "";
	int price = 0;
};

struct Order {
	Menu *food = NULL;
	int *food_quantity = 0;
	int table_num = 0;
	int order_count = 0;
	int total_price = 0;
	bool isChecked = false;
};

void print_order();
void new_order(Menu*, Order**, int&);
void find_order(Order**, int);
void check_order(Order**, int);
void del_order(Order**, int&);

int main()
{
	Menu menu[6] = { { 1,"그린샐러드",18000 },{ 2,"치킨샐러드",19000 },{ 3,"찹스테이크",32000 },
	{ 4,"티본스테이크",30000 },{ 5,"치즈파스타",17000 },{ 6,"치즈피자",15000 } };
	Order *order[10] = { NULL };

	int selectMenu = 0;
	int cnt = 0;

	while (true)
	{
		print_order();
		cin >> selectMenu;

		switch (selectMenu)
		{
		case 1:
			new_order(menu, order, cnt);
			break;
		case 2: find_order(order, cnt); break;
		case 3: check_order(order, cnt); break;
		case 4: del_order(order, cnt); break;
		case 0:
			delete(order);
			selectMenu = -1;
		default: cout << "비정상적인 입력입니다." << endl; break;
		}
	}
}

void new_order(Menu* m, Order **ptr_array_order, int& pos)
{
	Order *o = new Order;
	bool search = false;
	cout << "*주문받을 테이블번호(1-10) 선택 : "; cin >> o->table_num;

	//오류 체크
	if (o->table_num <= MIN_TABLE || o->table_num > MAX_TABLE)
	{
		cout << "테이블 번호 입력오류입니다. 처음화면으로 돌아갑니다." << endl;
		delete(o); return;
	}
	//end input error check

	cout << "* 주문할 음식 수 입력 : "; cin >> o->order_count;

	o->food = new Menu[o->order_count];
	o->food_quantity = new int[o->order_count];

	for (int i = 0; i < o->order_count; i++)
	{
		cout << "주문 " << (i + 1) << " 을 입력하세요 : ";
		string name; cin >> name;


		for (int j = 0; j < 6; j++)
		{
			if (name == m[j].food_name)
			{
				o->food[i] = m[j];
				search = true;
				break;
			}
		}
		if (search == false)
		{
			cout << "해당하는 주문은 없습니다. 처음화면으로 돌아갑니다." << endl;
			break;
		}

		cout << "수량을 입력하세요" << (i + 1) << " : ";
		cin >> o->food_quantity[i];


		o->total_price += o->food[i].price * o->food_quantity[i];
	}
	if (search == false)
	{
		delete(o);
		return;
	}
	*(ptr_array_order + pos++) = o; 

	cout << "주문이 등록됬습니다." << endl << endl;
	search = false;
}

void find_order(Order **ptr_array_order, int pos)
{
	int table_num = 0;

	cout << "*검색할 테이블번호(1-10) 선택 : "; cin >> table_num;

	if (table_num <= MIN_TABLE || table_num > MAX_TABLE)
	{
		cout << "테이블 번호 입력오류입니다. 처음화면으로 돌아갑니다." << endl;
		return;
	}

	for (int i = 0; i < pos; i++)
	{
		if (table_num == ptr_array_order[i]->table_num)
		{
			//start print 
			for (int j = 0; j < ptr_array_order[i]->order_count; j++)
			{
				cout << ptr_array_order[i]->food[j].food_name << " : " <<
					ptr_array_order[i]->food[j].price << " * " <<
					ptr_array_order[i]->food_quantity[j] << " = " <<
					ptr_array_order[i]->food[j].price * ptr_array_order[i]->food_quantity[j] << endl;
			}//end print

			cout << "주문금액 = " << ptr_array_order[i]->total_price << endl;
			int vat = ptr_array_order[i]->total_price * 0.1;
			cout << "부가세 = " << vat << endl;
			cout << "결제예정금액 = " << ptr_array_order[i]->total_price + vat << endl;
		}
	}
}

void check_order(Order** ptr_array_order, int pos)
{
	int table_num = 0;
	int received_money = 0;

	cout << "*결제할 테이블번호(1-10) 선택 : "; cin >> table_num;

	if (table_num <= MIN_TABLE || table_num > MAX_TABLE)
	{
		cout << "테이블 번호 입력오류입니다. 처음화면으로 돌아갑니다." << endl;
		return;
	}
	cout << "받은 금액 입력 : "; cin >> received_money;

	for (int i = 0; i < pos; i++)
	{
		if (table_num == ptr_array_order[i]->table_num)
		{
			if (received_money >= ptr_array_order[i]->total_price + ptr_array_order[i]->total_price*0.1)
			{
				cout << "반환 금액 = " << received_money - ((ptr_array_order[i]->total_price) + (ptr_array_order[i]->total_price*0.1)) << endl;
				ptr_array_order[i]->isChecked = true;
				cout << "결제가 완료되었습니다." << endl;
				break;
			}
			else
			{
				cout << "결제 금액이 부족합니다. 다시 결제해주세요." << endl;
				break; return;
			}
		}
	}
}

void del_order(Order** ptr_array_order, int& pos)
{
	int table_num = 0;
	cout << "*삭제할 테이블번호(1-10) 선택 : "; cin >> table_num;

	if (table_num <= MIN_TABLE || table_num > MAX_TABLE)
	{
		cout << "테이블 번호 입력오류입니다. 처음화면으로 돌아갑니다." << endl;
		return;
	}

	for (int i = 0; i < pos; i++)
	{
		if (ptr_array_order[i]->table_num == table_num)
		{
			if (ptr_array_order[i]->isChecked == false)
			{
				//ptr_array_order[i] = NULL;

				delete(ptr_array_order[i]);
				//start swap pointer
				for (int j = i; j < pos - 1; j++)
				{
					cout << "here";
					ptr_array_order[j] = ptr_array_order[j + 1];
					ptr_array_order[j]->table_num -= 1;
				}

				pos -= 1;
				cout << "삭제를 완료하였습니다." << endl;
				break;
			}
			else
			{
				cout << "결제완료한 주문은 삭제할 수 없습니다." << endl;
				break;
			}
		}
	}
}

void print_order()
{
	cout << "**** 해피 패밀리 레스토랑 ****" << endl;
	cout << "\t1.주문입력" << endl;
	cout << "\t2.주문검색" << endl;
	cout << "\t3.주문결제" << endl;
	cout << "\t4.주문삭제" << endl;
	cout << "\t0.종료" << endl;
	cout << "******************************" << endl;
}