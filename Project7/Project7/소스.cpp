#include <iostream>
#include <string.h>
#include <string>

using namespace std;

class Menu {
public:
	static int sche_show();
	static int seat_show();
	static string reservation_name();
	static int show();
	static int Air_show();
};
int Menu::Air_show() {
	cout << "------------------------------" << endl;
	cout << "1~3번 까지의 비행기 중 하나를 선택하세요." << endl;
	cout << "------------------------------" << endl;
	int in;
	cin >> in;
	return in;
}
int Menu::show() {
	cout << "------------------------------" << endl;
	cout << " 1. 예약" << endl;
	cout << " 2. 예약 취소" << endl;
	cout << " 3. 예약 현황" << endl;
	cout << " 4. 종료" << endl;
	cout << "------------------------------" << endl;
	int in;
	cin >> in;
	return in;
}
int Menu::sche_show() {
	cout << "------------------------------" << endl;
	cout << "1. 06시 " << endl;
	cout << "2. 12시 " << endl;
	cout << "3. 18시 " << endl;
	cout << "------------------------------" << endl;
	int in;
	cin >> in;
	return in;
}
int Menu::seat_show() {
	cout << "------------------------------" << endl;
	cout << "1~10번 까지의 좌석번호를 입력하세요." << endl;
	cout << "------------------------------" << endl;
	int in;
	cin >> in;
	return in;
}
string Menu::reservation_name() {
	cout << "------------------------------" << endl;
	cout << "예약자의 이름을 입력 하세요." << endl;
	cout << "------------------------------" << endl;
	string s;
	std::cin >> s;
	return s;
}

class Seat {
	string name;
	int number;
public:
	Seat() {
		set_name(" -----");
		set_number(number);
	}
	string get_name() {
		return name;
	}
	void set_name(string name) {
		this->name = name;
	}
	void set_number(int number) {
		this->number = number;
	}
	int get_number() {
		return number;
	}
};

class Schedule {
	int time;
	Seat *seat;
public:
	Schedule(int time) {
		seat = new Seat[10];
		this->time = time;
	}
	~Schedule() {
		delete[] seat;
	}

	void show_reserve() {
		cout << time << "시 비행기" << endl << endl;
		for (int i = 0; i < 10; i++) {
			seat[i].set_number(i + 1);
			cout << seat[i].get_number() << "." << seat[i].get_name() << "  ";
		}
		cout << endl;
	}
	string get_get_name() {
		return seat->get_name();
	}
	void set_Time(int time) {
		this->time = time;
	}
	void reserve(int number, string name) {
		seat[number - 1].set_name(name);
	}
	void cancle(int number, string name) {
		seat[number - 1].set_name(" Empty");
	}
};

class AirPlane {
	int number;
	Schedule *sche1, *sche2, *sche3;
public:
	AirPlane(int number) {
		this->number = number;
		sche1 = new Schedule(06);
		sche2 = new Schedule(12);
		sche3 = new Schedule(18);
	}
	~AirPlane() { delete[] sche1, sche2, sche3; }

	void reserved(int time) {
		if (time == 1) {
			sche1->show_reserve();
			int seat_number = Menu::seat_show();
			string name = Menu::reservation_name();
			string name2 = sche1->get_get_name();
			if (name != name2) {
				sche1->reserve(seat_number, name);
			}
			else {
				cout << "예약자 이름이 중복 되었습니다!" << endl;
			}
		}
		else if (time == 2) {
			sche2->show_reserve();
			int seat_number = Menu::seat_show();
			string name = Menu::reservation_name();
			string name2 = sche1->get_get_name();
			if (name != name2) {
				sche2->reserve(seat_number, name);
			}
			else {
				cout << "예약자 이름이 중복 되었습니다!" << endl;
			}
		}
		else if (time == 3) {
			sche3->show_reserve();
			int seat_number = Menu::seat_show();
			string name = Menu::reservation_name();
			string name2 = sche1->get_get_name();
			if (name != name2) {
				sche3->reserve(seat_number, name);
			}
			else {
				cout << "예약자 이름이 중복 되었습니다!" << endl;
			}
		}
	}

	void cancle(int time) {
		if (time == 1) {
			sche1->show_reserve();
			int seat_number = Menu::seat_show();
			string name = Menu::reservation_name();
			string name2 = sche1->get_get_name();
			if (name == name2) {
				sche1->cancle(seat_number, name);
			}
			else {
				cout << "예약한 이름이 아닙니다." << endl;
			}
		}
		else if (time == 2) {
			sche2->show_reserve();
			int seat_number = Menu::seat_show();
			string name = Menu::reservation_name();
			string name2 = sche2->get_get_name();
			if (name == name2) {
				sche2->cancle(seat_number, name);
			}
			else {
				cout << "예약한 이름이 아닙니다." << endl;
			}
		}
		else if (time == 3) {
			sche3->show_reserve();
			int seat_number = Menu::seat_show();
			string name = Menu::reservation_name();
			string name2 = sche3->get_get_name();
			if (name == name2) {
				sche2->cancle(seat_number, name);
			}
			else {
				cout << "예약한 이름이 아닙니다." << endl;
			}
		}
	}
	void show_Info() {
		sche1->show_reserve();
		sche2->show_reserve();
		sche3->show_reserve();
	}

};

int main() {
	cout << "연세 항공에 오신걸 환영 합니다" << endl;
	cout << "서울 - 제주 운행중입니다" << endl;
	AirPlane *a[3];
	for (int i = 0; i < 3; i++) {
		a[i] = new AirPlane(i + 1);
	}

	while (1) {
		int Menu_number = Menu::show();
		if (Menu_number == 1) {
			int Air_number = Menu::Air_show();
			cout << Air_number << "번 비행기를 선택하셨습니다." << endl;
			int sche_number = Menu::sche_show();
			if (sche_number == 1) {
				a[Air_number - 1]->reserved(sche_number);
			}
			else if (sche_number == 2) {
				a[Air_number - 1]->reserved(sche_number);
			}
			else if (sche_number == 3) {
				a[Air_number - 1]->reserved(sche_number);
			}
		}
		else if (Menu_number == 2) {
			int Air_number = Menu::Air_show();
			cout << Air_number << "번 비행기를 선택하셨습니다." << endl;
			int sche_number = Menu::sche_show();
			if (sche_number == 1) {
				a[Air_number - 1]->cancle(sche_number);
			}
			else if (sche_number == 2) {
				a[Air_number - 1]->cancle(sche_number);
			}
			else if (sche_number == 3) {
				a[Air_number - 1]->cancle(sche_number);
			}
		}
		else if (Menu_number == 3) {
			for (int i = 0; i < 3; i++) {
				cout << i + 1 << "번 비행기 예약 현황" << endl << endl;;
				a[i]->show_Info();
				cout << "------------------------------" << endl;

			}

		}
		else if (Menu_number == 4) {
			break;
		}
		else {
			cout << "잘못 입력했습니다." << endl;
		}
	}
}