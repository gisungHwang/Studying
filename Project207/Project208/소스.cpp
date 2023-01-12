#include <iostream>

using namespace std;

class Point
{
private:
	int xpos, ypos;
public:
	void Init(int x, int y)				//x값과 y값을 인수로 받아와 xpos에 x값을 ypos에 y값을 초기화
	{
		xpos = x;
		ypos = y;
	}
	void ShowPointInfo() const
	{
		cout << "[" << xpos << ", " << ypos << "]" << endl;
	}
};

class Circle
{
private:
	int rad;			// 원의 반지름을 의미
	Point center;		// 원의 중심을 의미
public:
	void Init(int x, int y, int r)
	{
		rad = r;					//	반지름은 받아온 인수 r로 초기화
		center.Init(x, y);			//인수로 받아온 x,y 값을 초기화
	}

	void ShowCircleInfo() const
	{
		cout << "radius : " << rad << endl;
		center.ShowPointInfo();
	}
};

class Ring
{
private:
	Circle inCircle;
	Circle outCircle;
public:
	void Init(int inX, int inY, int inR, int outX, int outY, int outR)
	{
		inCircle.Init(inX, inY, inR);
		outCircle.Init(outX, outY, outR);
	}
	void ShowRingInfo() const
	{
		cout << "Inner Circle Info" << endl;
		inCircle.ShowCircleInfo();
		cout << "Outter Circle Info" << endl;
		outCircle.ShowCircleInfo();
	}
};

int main(void)
{
	Ring ring;						//Ring의 객체 생성;
	ring.Init(1, 1, 4, 2, 2, 9);	//ring를 초기화	
	ring.ShowRingInfo();
	return 0;
}