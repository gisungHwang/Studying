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
	Menu menu[6] = { { 1,"�׸�������",18000 },{ 2,"ġŲ������",19000 },{ 3,"��������ũ",32000 },
	{ 4,"Ƽ��������ũ",30000 },{ 5,"ġ���Ľ�Ÿ",17000 },{ 6,"ġ������",15000 } };
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
		default: cout << "���������� �Է��Դϴ�." << endl; break;
		}
	}
}

void new_order(Menu* m, Order **ptr_array_order, int& pos)
{
	Order *o = new Order;
	bool search = false;
	cout << "*�ֹ����� ���̺��ȣ(1-10) ���� : "; cin >> o->table_num;

	//���� üũ
	if (o->table_num <= MIN_TABLE || o->table_num > MAX_TABLE)
	{
		cout << "���̺� ��ȣ �Է¿����Դϴ�. ó��ȭ������ ���ư��ϴ�." << endl;
		delete(o); return;
	}
	//end input error check

	cout << "* �ֹ��� ���� �� �Է� : "; cin >> o->order_count;

	o->food = new Menu[o->order_count];
	o->food_quantity = new int[o->order_count];

	for (int i = 0; i < o->order_count; i++)
	{
		cout << "�ֹ� " << (i + 1) << " �� �Է��ϼ��� : ";
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
			cout << "�ش��ϴ� �ֹ��� �����ϴ�. ó��ȭ������ ���ư��ϴ�." << endl;
			break;
		}

		cout << "������ �Է��ϼ���" << (i + 1) << " : ";
		cin >> o->food_quantity[i];


		o->total_price += o->food[i].price * o->food_quantity[i];
	}
	if (search == false)
	{
		delete(o);
		return;
	}
	*(ptr_array_order + pos++) = o; 

	cout << "�ֹ��� ��ω���ϴ�." << endl << endl;
	search = false;
}

void find_order(Order **ptr_array_order, int pos)
{
	int table_num = 0;

	cout << "*�˻��� ���̺��ȣ(1-10) ���� : "; cin >> table_num;

	if (table_num <= MIN_TABLE || table_num > MAX_TABLE)
	{
		cout << "���̺� ��ȣ �Է¿����Դϴ�. ó��ȭ������ ���ư��ϴ�." << endl;
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

			cout << "�ֹ��ݾ� = " << ptr_array_order[i]->total_price << endl;
			int vat = ptr_array_order[i]->total_price * 0.1;
			cout << "�ΰ��� = " << vat << endl;
			cout << "���������ݾ� = " << ptr_array_order[i]->total_price + vat << endl;
		}
	}
}

void check_order(Order** ptr_array_order, int pos)
{
	int table_num = 0;
	int received_money = 0;

	cout << "*������ ���̺��ȣ(1-10) ���� : "; cin >> table_num;

	if (table_num <= MIN_TABLE || table_num > MAX_TABLE)
	{
		cout << "���̺� ��ȣ �Է¿����Դϴ�. ó��ȭ������ ���ư��ϴ�." << endl;
		return;
	}
	cout << "���� �ݾ� �Է� : "; cin >> received_money;

	for (int i = 0; i < pos; i++)
	{
		if (table_num == ptr_array_order[i]->table_num)
		{
			if (received_money >= ptr_array_order[i]->total_price + ptr_array_order[i]->total_price*0.1)
			{
				cout << "��ȯ �ݾ� = " << received_money - ((ptr_array_order[i]->total_price) + (ptr_array_order[i]->total_price*0.1)) << endl;
				ptr_array_order[i]->isChecked = true;
				cout << "������ �Ϸ�Ǿ����ϴ�." << endl;
				break;
			}
			else
			{
				cout << "���� �ݾ��� �����մϴ�. �ٽ� �������ּ���." << endl;
				break; return;
			}
		}
	}
}

void del_order(Order** ptr_array_order, int& pos)
{
	int table_num = 0;
	cout << "*������ ���̺��ȣ(1-10) ���� : "; cin >> table_num;

	if (table_num <= MIN_TABLE || table_num > MAX_TABLE)
	{
		cout << "���̺� ��ȣ �Է¿����Դϴ�. ó��ȭ������ ���ư��ϴ�." << endl;
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
				cout << "������ �Ϸ��Ͽ����ϴ�." << endl;
				break;
			}
			else
			{
				cout << "�����Ϸ��� �ֹ��� ������ �� �����ϴ�." << endl;
				break;
			}
		}
	}
}

void print_order()
{
	cout << "**** ���� �йи� ������� ****" << endl;
	cout << "\t1.�ֹ��Է�" << endl;
	cout << "\t2.�ֹ��˻�" << endl;
	cout << "\t3.�ֹ�����" << endl;
	cout << "\t4.�ֹ�����" << endl;
	cout << "\t0.����" << endl;
	cout << "******************************" << endl;
}