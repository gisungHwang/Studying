#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include<time.h>

#define MAX_QUEUE_SIZE 100

using namespace std;

typedef struct
{
	int id;
	int arrival_time;
	int service_time;
} element;

typedef struct
{
	element data[MAX_QUEUE_SIZE]; //element Ÿ������ �迭����
	int front, rear;
} QueueType;

void init_queue(QueueType *q)
{
	q->front = 0;
	q->rear = 0;
}

int is_empty(QueueType *q)
{
	return (q->front == q->rear);
}

int is_full(QueueType *q)
{
	return ((q->rear + 1) % MAX_QUEUE_SIZE == q->front);
}

void enqueue(QueueType *q, element item)			//���� ť
{
	if (is_full(q))
	{
		printf("��ȭ�����Դϴ�.");
	}
	q->rear = (q->rear + 1) % MAX_QUEUE_SIZE;
	q->data[q->rear] = item;
}

element dequeue(QueueType *q)				//���� ť
{
	if (is_empty(q))
	{
		printf("��������Դϴ�.");
	}
	q->front = (q->front + 1) % MAX_QUEUE_SIZE;
	return q->data[q->front];
}

int main(void)
{
	int minutes = 60; 
	int total_wait = 0; 
	int total_customers = 0; 
	int a_service_time = 0;
	int	b_service_time = 0; 
	int a_service_customer; 
	int	b_service_customer; 
	bool aCounter = true; 
	bool bCounter = true; 
	QueueType q;
	init_queue(&q);
	srand(time(NULL)); //rand()�� �ʱ�ȭ���ִ� ����
	for (int clock = 0; clock < minutes; clock++)
	{
		printf("\n=====================����ð�=%d��==========================\n", clock);
		printf("<����> Aâ�� ���Կ��� %d, Bâ�� ���Կ��� %d (0: ����, 1: ����)\n", aCounter, bCounter);
		if ((rand() % 10) < 3)
		{
			element customer;
			customer.id = total_customers++; //���� ���ڷ� ��Ī��. ex) �� 1, �� 2
			customer.arrival_time = clock;
			customer.service_time = rand() % 3 + 1;  //�����ð��� ��������  ����
			enqueue(&q, customer);
			printf("�� %d�� %d�п� ���ɴϴ�. �� ����ó���ð�=%d\n", customer.id, customer.arrival_time, customer.service_time);
		}

		if (a_service_time > 0) //aâ�� ���� ���� �ð��� 0���� Ŭ ���
		{
			printf("�� %d�� Aâ������ ����ó�����Դϴ�.\n", a_service_customer);
			a_service_time--;

			if (a_service_time == 0)
			{
				printf("(Aâ���� %d�к��� �����ϴ�.)\n", clock + 1);
				aCounter = true;
			}
		}
		else if (aCounter) //aâ�� ���񽺰� �������� ���
		{
			if (!is_empty(&q))
			{
				element customer = dequeue(&q);
				a_service_customer = customer.id;
				a_service_time = customer.service_time;

				printf("�� %d�� %d�п� Aâ������ ������ �����մϴ�. ���ð��� %d���̾����ϴ�.\n", customer.id, clock, clock - customer.arrival_time);
				aCounter = false;
				total_wait += clock - customer.arrival_time;
			}
		}

		if (b_service_time > 0) //bâ�� ���� ���� �ð��� 0���� Ŭ ���
		{
			printf("�� %d�� Bâ������ ����ó�����Դϴ�.\n", b_service_customer);
			b_service_time--;

			if (b_service_time == 0)
			{
				printf("(Bâ���� %d�к��� �����ϴ�.)\n", clock + 1);
				bCounter = true;
			}
		}
		else if (bCounter) //bâ�� ���񽺰� �������� ���
		{
			if (!is_empty(&q))
			{
				element customer = dequeue(&q);
				b_service_customer = customer.id;
				b_service_time = customer.service_time;
				printf("�� %d�� %d�п� Bâ������ ������ �����մϴ�. ���ð��� %d���̾����ϴ�.\n", customer.id, clock, clock - customer.arrival_time);
				bCounter = false;
				total_wait += clock - customer.arrival_time;
			}
		}
	}
	printf("��ü ��� �ð� = %d�� \n", total_wait);
	return 0;
}
