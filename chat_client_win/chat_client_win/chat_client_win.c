
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <winsock2.h>

#define BUF_SIZE 1024
void ErrorHandling(const char *message);

int main(int argc, char *argv[])
{
	WSADATA wsaData;
	SOCKET hSocket1;
	char message1[BUF_SIZE];
	int strLen;
	SOCKADDR_IN servAdr;

	if (argc != 3) {
		printf("Usage : %s <IP> <port>\n", argv[0]);
		exit(1);
	}

	if (WSAStartup(MAKEWORD(2, 2), &wsaData) != 0)
		ErrorHandling("WSAStartup() error!");

	hSocket1 = socket(PF_INET, SOCK_STREAM, 0);
	printf("PF_INET : %d\n", PF_INET);
	printf("hSocket : %d\n", hSocket1);
	if (hSocket1 == INVALID_SOCKET)
		ErrorHandling("socket() error");

	memset(&servAdr, 0, sizeof(servAdr));
	servAdr.sin_family = AF_INET;
	servAdr.sin_addr.s_addr = inet_addr(argv[1]);
	printf("ip : %s\n", argv[1]);
	servAdr.sin_port = htons(atoi(argv[2]));
	printf("port : %s\n", argv[2]);

	if (connect(hSocket1, (SOCKADDR*)&servAdr, sizeof(servAdr)) == SOCKET_ERROR)
		ErrorHandling("connect() error!");
	else
		puts("Connected......");

	while (1)
	{
		fputs("Chat_Input message(Q to quit): ", stdout);
		fgets(message1, BUF_SIZE, stdin);
		printf("BUF_SIZE  : %d\n", BUF_SIZE);
		printf("stdout  : %d\n", stdout);
		printf("stdin  : %d\n", stdin);

		if (!strcmp(message1, "q\n") || !strcmp(message1, "Q\n"))
			break;

		send(hSocket1, message1, strlen(message1), 0);
		printf("strlen(message1) : %d\n", strlen(message1));
		strLen = recv(hSocket1, message1, BUF_SIZE - 1, 0);
		message1[strLen] = 0;
		printf("Message from server: %s\n", message1);
	}

	closesocket(hSocket1);
	WSACleanup();
	return 0;
}

void ErrorHandling(char *message)
{
	fputs(message, stderr);
	fputc('\n', stderr);
	exit(1);
}
