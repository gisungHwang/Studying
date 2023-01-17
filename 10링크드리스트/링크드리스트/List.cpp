#include "pch.h"
#include <iostream>
#include "List.h"

using namespace std;

List::List()				// ����Ʈ �ʱ�ȭ 
{
	Head->nextNode = NULL;			//Head�� nextNode��  NULL�� �ʱ�ȭ;
	List::count = 0;				//����Ʈ�� ������� count �ʱ�ȭ
}

int List::get(int index)			//�ش� index�� �����͸� ������ִ� �޼���
{
	try
	{
		valid(index);				//��ȿ�� �˻�
	}	
	catch (const char* msg)			
	{
		cout << msg << endl;		//���� �߻� �� List::valid �޼����� throw���� ���� ���ڿ� ���
		return 0;					//List::get�� ��ȯ���� �ʿ�;
	}

	Node* temp = Head;							//Node�� Head ��ü �ּ� ���� temp�� ����	
	for (int ii = 0; ii <= index; ii++) {			//0���� �޾ƿ� �μ����� ��ȸ�ϸ� �ش� index�� ��ġ�� ��Ÿ��
		temp = temp->nextNode;
	}
	return temp->data;								//�ش� index�� data�� ��ȯ
}

void List::valid(int count)							//��ȿ���� �����ϱ����� �޼���
{
	if (count > List::count)						//�޾ƿ� �μ��� ����Ʈ�� count���� Ŭ ��� throw�� ����
	{
		throw "Error : ��ȿ���� ���� index �Դϴ�.";
	}
}

int List::size()						//����Ʈ�� ũ�⸦ �����ϴ� count�� ��ȯ�ϴ� �޼���
{
	return List::count;
}

void List::add(int data)					//�μ��� �޾ƿ� ������ �߰� �޼���
{
	Node* NewNode = new Node;				//Node�� �ּҰ��� �����ϴ� ��ü ����
	NewNode->data = data;					//�μ��� �޾ƿ� data�� ��������� �ʱ�ȭ
	NewNode->nextNode = NULL;				//��������� nextNode�� null�� �ʱ�ȭ

	if (Head->nextNode == NULL)				//Head����� nextNode�� null���̸� NewNode�� �ʱ�ȭ
	{
		Head->nextNode = NewNode;
	}
	else
	{
		Node* temp = Head;					//Node�� Head ��ü �ּ� ���� temp�� ����	
		while (temp->nextNode != NULL)
		{
			temp = temp->nextNode;
		}
		temp->nextNode = NewNode;
	}

	List::count++;							//����Ʈ�� �� ++
}

void List::add(int index, int data)			//add�޼��� �����ε����� �μ��� 2�� �޾ƿ� ������ �߰�
{
	try
	{
		valid(index);
	}
	catch (const char* msg)
	{
		cout << msg << endl;				//���� �߻� �� List::valid �޼����� throw���� ���� ���ڿ� ���
		return;
	}

	Node* NewNode = new Node;					//Node�� �ּҰ��� �����ϴ� NewNode��ü ����
	NewNode->data = data;						//�μ��� �޾ƿ� data�� ��������� �ʱ�ȭ
	NewNode->nextNode = NULL;					//��������� nextNode�� null�� �ʱ�ȭ

	if (Head->nextNode == NULL)					//Head�� nextNode�� Null�� �� Head�� nextNode�� NewNode�� �ʱ�ȭ
	{
		Head->nextNode = NewNode;
	}
	else
	{											
		Node* temp = Head;							//Node�� Head ��ü �ּ� ���� temp�� ����	
		for (int ii = 0; ii < count; ii++)				//0���� ����Ʈ�� ����ŭ ��ȸ
		{
			temp = temp->nextNode;
		}
		NewNode->nextNode = temp->nextNode;					//���� ����Ʈ�� ����
		temp->nextNode = NewNode;							//�� ���� nextNode�� NewNode�� �ʱ�ȭ �ϸ� ����Ʈ�� �̾���
	}
	List::count++;											//������ �� �� ++
}

void List::set(int index, int data)				//�������� ���� �����ϴ� �޼���
{
	try
	{
		valid(index);							//List::valid �޼��带 ���� ��ȿ�� �˻�
	}
	catch (const char* msg)
	{
		cout << msg << endl;
		return;
	}

	Node* temp = Head;							//Node�� Head ��ü �ּ� ���� temp�� ����	
	for (int ii = 0; ii <= index; ii++)			//�μ��� �޾ƿ� index�� 0���� for���� �ѹ��� ����
	{
		temp = temp->nextNode;					// temp�� temp ������ ���� �ʱ�ȭ
	}
	temp->data = data;						//main���� �޾ƿ� (0,100)�� index�� data�� �־� for���� �ѹ��� ���ư� temp�� data�� 10���� 100���� �ٲ�;
}

void List::remove(int index)				//������ ���� �޼���
{
	try
	{
		valid(index);					
	}
	catch (const char* msg)
	{
		cout << msg << endl;
		return;
	}

	Node* temp = Head;						//Node�� Head ��ü �ּ� ���� temp�� ����	
	Node* remove = Head;					//Node�� Head ��ü �ּ� ���� remove�� ����	

	for (int ii = 0; ii < index; ii++)		//0���� �޾ƿ� �μ��� ������ ��ȸ�ϸ� temp�� remove�� ��ġ�� ����
	{
		temp = temp->nextNode;				// temp�� temp ������ ���� �ʱ�ȭ
		remove = remove->nextNode;			// remove�� remove ������ ���� �ʱ�ȭ
	}
	remove = remove->nextNode;				// remove�� remove ������ ���� �ʱ�ȭ

	temp->nextNode = remove->nextNode;		//temp�� ���� ��带 remove->nextNode�� ����
	remove->nextNode = NULL;				//������ ��忡 Null��
	delete remove;							//�ش� remove�� index ����
	List::count--;							//���� �� ����Ʈ�� ���� --;
}

bool List::isEmpty()				//��ü�� ����ִ��� Ȯ���ϴ� �޼���
{
	Node* head = Head;					//Node�� Head ��ü �ּ� ���� head�� ����	
	if (head->nextNode == NULL)		
	{
		return true;
	}
	else
	{
		return false;
	}
}


