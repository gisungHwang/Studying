
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <winsock2.h>

SOCKET servSock;

#define BUF_SIZE 30
void ErrorHandling(char *message);
void InitSocket(char *argv[]);
void ConnectSocket();
void Transmission(char *msg);

int main(int argc, char *argv[])
{
	if (argc != 2) {
		printf("Usage : %s <port>\n", argv[0]);
		exit(1);
	}
	InitSocket(argv);
	ConnectSocket();

	closesocket(servSock);
	WSACleanup();
	return 0;
}

void InitSocket(char *argv[]) {

	WSADATA wsaData;
	SOCKADDR_IN servAdr;

	if (WSAStartup(MAKEWORD(2, 2), &wsaData) != 0)
		ErrorHandling("WSAStartup() error!");

	servSock = socket(PF_INET, SOCK_DGRAM, 0);
	if (servSock == INVALID_SOCKET)
		ErrorHandling("UDP socket creation error");

	memset(&servAdr, 0, sizeof(servAdr));
	servAdr.sin_family = AF_INET;
	servAdr.sin_addr.s_addr = htonl(INADDR_ANY);
	servAdr.sin_port = htons(atoi(argv[1]));

	if (bind(servSock, (SOCKADDR*)&servAdr, sizeof(servAdr)) == SOCKET_ERROR)
		ErrorHandling("bind() error");

}

void ConnectSocket() {

	char message[BUF_SIZE];

	while (1)
	{
		Transmission(message);
	}

}

void Transmission(char *msg) {

	int strLen;
	int clntAdrSz;
	SOCKADDR_IN clntAdr;

	clntAdrSz = sizeof(clntAdr);
	strLen = recvfrom(servSock, msg, BUF_SIZE, 0,
		(SOCKADDR*)&clntAdr, &clntAdrSz);
	printf("message : %s", msg);
	sendto(servSock, msg, strLen, 0,
		(SOCKADDR*)&clntAdr, sizeof(clntAdr));

}

void ErrorHandling(char *message)
{
	fputs(message, stderr);
	fputc('\n', stderr);
	exit(1);
}