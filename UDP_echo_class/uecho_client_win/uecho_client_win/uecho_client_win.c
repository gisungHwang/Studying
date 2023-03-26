
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <winsock2.h>

#define BUF_SIZE 30

SOCKADDR_IN servAdr;
SOCKET sock;

void ErrorHandling(const char *message);
void InitSocket(char *argv[]);
void ConnectSocket();
void Transmission(char *msg);

int main(int argc, char *argv[])
{
	if (argc != 3) {
		printf("Usage : %s <IP> <port>\n", argv[0]);
		exit(1);
	}
	
	InitSocket(argv);
	ConnectSocket();

	closesocket(sock);
	WSACleanup();
	return 0;
}

void InitSocket(char *argv[]) {
	WSADATA wsaData;

	if (WSAStartup(MAKEWORD(2, 2), &wsaData) != 0)
		ErrorHandling("WSAStartup() error!");

	sock = socket(PF_INET, SOCK_DGRAM, 0);
	if (sock == INVALID_SOCKET)
		ErrorHandling("socket() error");

	memset(&servAdr, 0, sizeof(servAdr));
	servAdr.sin_family = AF_INET;
	servAdr.sin_addr.s_addr = inet_addr(argv[1]);
	servAdr.sin_port = htons(atoi(argv[2]));


}

void ConnectSocket() {

	char message[BUF_SIZE];

	connect(sock, (SOCKADDR*)&servAdr, sizeof(servAdr));

	while (1)
	{
		fputs("Insert message(q to quit): ", stdout);
		fgets(message, sizeof(message), stdin);

		if (!strcmp(message, "q\n") || !strcmp(message, "Q\n"))
			break;

		Transmission(message);
	}

}

void Transmission(char *msg) {
	int strLen;

	send(sock, msg, strlen(msg), 0);
	strLen = recv(sock, msg, sizeof(msg) - 1, 0);

	msg[strLen] = 0;
	printf("Message from server: %s", msg);

}


void ErrorHandling(char *message)
{
	fputs(message, stderr);
	fputc('\n', stderr);
	exit(1);
}
