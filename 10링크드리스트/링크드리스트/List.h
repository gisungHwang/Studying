#pragma once

class List
{
private:
	class Node					//���� Ŭ���� ����
	{
	public:
		int data;
		Node* nextNode;
	};

	void valid(int count);				//����ó���� �ϱ� ���� �Լ� 
	int count;							//����Ʈ�� ũ�⸦ ������ ����
	Node* Head = new Node;				//����Ʈ�� �����ϱ� ���� Head ��带 ��������� ����

public:
	List();								//��ü ����
	
	int get(int index);					//�ش� index ������ ���
	void add(int data);					//���ο� ��� �߰� 
	void add(int index, int data);		//�ش� index�� ���ο� ��� �߰�
	int size();							//List�� ���̸� ��ȯ
	void set(int index, int data);		//������ �� ����
	void remove(int index);				//�ش� index ����
	bool isEmpty();						//��ü�� ����ִ��� Ȯ��
};