#include <iostream>

using namespace std;

class Point
{
private:
	int xpos, ypos;
public:
	void Init(int x, int y)				//x���� y���� �μ��� �޾ƿ� xpos�� x���� ypos�� y���� �ʱ�ȭ
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
	int rad;			// ���� �������� �ǹ�
	Point center;		// ���� �߽��� �ǹ�
public:
	void Init(int x, int y, int r)
	{
		rad = r;					//	�������� �޾ƿ� �μ� r�� �ʱ�ȭ
		center.Init(x, y);			//�μ��� �޾ƿ� x,y ���� �ʱ�ȭ
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
	Ring ring;						//Ring�� ��ü ����;
	ring.Init(1, 1, 4, 2, 2, 9);	//ring�� �ʱ�ȭ	
	ring.ShowRingInfo();
	return 0;
}