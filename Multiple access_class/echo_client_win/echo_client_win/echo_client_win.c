
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <winsock2.h>

#define BUF_SIZE 1024
SOCKET hSocket;


void ErrorHandling(const char *message);
void Init(char *argv[]);
void ConnectSocket();


int main(int argc, char *argv[])
{
	

	if (argc != 3) {
		printf("Usage : %s <IP> <port>\n", argv[0]);
		exit(1);
	}

	Init(argv);
	ConnectSocket();

	closesocket(hSocket);
	WSACleanup();
	return 0;
}

void Init(char *argv[]) {

	WSADATA wsaData;
	SOCKADDR_IN servAdr;

	if (WSAStartup(MAKEWORD(2, 2), &wsaData) != 0)
		ErrorHandling("WSAStartup() error!");

	hSocket = socket(PF_INET, SOCK_STREAM, 0);
	printf("hSocket : %d\n", hSocket);
	if (hSocket == INVALID_SOCKET)
		ErrorHandling("socket() error");

	memset(&servAdr, 0, sizeof(servAdr));
	servAdr.sin_family = AF_INET;
	servAdr.sin_addr.s_addr = inet_addr(argv[1]);
	printf("ip : %s\n", argv[1]);
	servAdr.sin_port = htons(atoi(argv[2]));
	printf("port : %s\n", argv[2]);

	if (connect(hSocket, (SOCKADDR*)&servAdr, sizeof(servAdr)) == SOCKET_ERROR)
		ErrorHandling("connect() error!");
	else
		puts("Connected......");

}

void ConnectSocket() {

	char message[BUF_SIZE];
	int strLen;

	while (1)
	{
		fputs("Input message(Q to quit): ", stdout);
		fgets(message, BUF_SIZE, stdin);
		printf("BUF_SIZE  : %d\n", BUF_SIZE);
		printf("stdout  : %d\n", stdout);
		printf("stdin  : %d\n", stdin);

		if (!strcmp(message, "q\n") || !strcmp(message, "Q\n"))
			break;

		send(hSocket, message, strlen(message), 0);
		strLen = recv(hSocket, message, BUF_SIZE - 1, 0);
		printf("strlen(message) : %d\n", strlen(message));
		message[strLen] = 0;
		printf("Message from server: %s\n", message);
	}

}

void ErrorHandling(char *message)
{
	fputs(message, stderr);
	fputc('\n', stderr);
	exit(1);
}
