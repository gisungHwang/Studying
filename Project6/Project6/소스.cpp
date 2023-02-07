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
	element data[MAX_QUEUE_SIZE]; //element 타입으로 배열선언
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

void enqueue(QueueType *q, element item)			//삽입 큐
{
	if (is_full(q))
	{
		printf("포화상태입니다.");
	}
	q->rear = (q->rear + 1) % MAX_QUEUE_SIZE;
	q->data[q->rear] = item;
}

element dequeue(QueueType *q)				//삭제 큐
{
	if (is_empty(q))
	{
		printf("공백상태입니다.");
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
	srand(time(NULL)); //rand()를 초기화해주는 역할
	for (int clock = 0; clock < minutes; clock++)
	{
		printf("\n=====================현재시각=%d분==========================\n", clock);
		printf("<현재> A창고 출입여부 %d, B창고 출입여부 %d (0: 닫힘, 1: 열림)\n", aCounter, bCounter);
		if ((rand() % 10) < 3)
		{
			element customer;
			customer.id = total_customers++; //고객을 숫자로 지칭함. ex) 고객 1, 고객 2
			customer.arrival_time = clock;
			customer.service_time = rand() % 3 + 1;  //업무시간을 랜덤으로  조정
			enqueue(&q, customer);
			printf("고객 %d이 %d분에 들어옵니다. 고객 업무처리시간=%d\n", customer.id, customer.arrival_time, customer.service_time);
		}

		if (a_service_time > 0) //a창구 고객의 서비스 시간이 0보다 클 경우
		{
			printf("고객 %d이 A창구에서 업무처리중입니다.\n", a_service_customer);
			a_service_time--;

			if (a_service_time == 0)
			{
				printf("(A창구가 %d분부터 열립니다.)\n", clock + 1);
				aCounter = true;
			}
		}
		else if (aCounter) //a창구 서비스가 열려있을 경우
		{
			if (!is_empty(&q))
			{
				element customer = dequeue(&q);
				a_service_customer = customer.id;
				a_service_time = customer.service_time;

				printf("고객 %d이 %d분에 A창구에서 업무를 시작합니다. 대기시간은 %d분이었습니다.\n", customer.id, clock, clock - customer.arrival_time);
				aCounter = false;
				total_wait += clock - customer.arrival_time;
			}
		}

		if (b_service_time > 0) //b창구 고객의 서비스 시간이 0보다 클 경우
		{
			printf("고객 %d이 B창구에서 업무처리중입니다.\n", b_service_customer);
			b_service_time--;

			if (b_service_time == 0)
			{
				printf("(B창구가 %d분부터 열립니다.)\n", clock + 1);
				bCounter = true;
			}
		}
		else if (bCounter) //b창구 서비스가 열려있을 경우
		{
			if (!is_empty(&q))
			{
				element customer = dequeue(&q);
				b_service_customer = customer.id;
				b_service_time = customer.service_time;
				printf("고객 %d이 %d분에 B창구에서 업무를 시작합니다. 대기시간은 %d분이었습니다.\n", customer.id, clock, clock - customer.arrival_time);
				bCounter = false;
				total_wait += clock - customer.arrival_time;
			}
		}
	}
	printf("전체 대기 시간 = %d분 \n", total_wait);
	return 0;
}
