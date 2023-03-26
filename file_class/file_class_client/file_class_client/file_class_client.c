
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <winsock2.h>

#define BUF_SIZE 30
void ErrorHandling(char *message);
void InitSocket(char *argv[]);
void ConnectServer();

SOCKET hSocket;
SOCKADDR_IN servAdr;


int main(int argc, char *argv[])
{
	
	if (argc != 3) {
		printf("usage: %s <IP> <port>\n", argv[0]);
		exit(1);
	}

	InitSocket(argv);
	ConnectServer();

	closesocket(hSocket);
	WSACleanup();
	return 0;
}

void InitSocket(char *argv[]) {

	WSADATA wsaData;

	if (WSAStartup(MAKEWORD(2, 2), &wsaData) != 0)
		ErrorHandling("WSAStartup() error!!!!!!");


	hSocket = socket(PF_INET, SOCK_STREAM, 0);

	memset(&servAdr, 0, sizeof(servAdr));
	servAdr.sin_family = AF_INET;
	servAdr.sin_addr.s_addr = inet_addr(argv[1]);
	servAdr.sin_port = htons(atoi(argv[2]));

}

void ConnectServer() {

	FILE *fp;

	fp = fopen("receive.dat", "wb");
	char buf[BUF_SIZE];
	int readCnt;

	connect(hSocket, (SOCKADDR*)&servAdr, sizeof(servAdr));

	while ((readCnt = recv(hSocket, buf, BUF_SIZE, 0)) != 0)
			fwrite((void*)buf, 1, readCnt, fp);

	puts(" Received file data!");
	send(hSocket, "Thank you", 10, 0);
	
	fclose(fp);

}

void ErrorHandling(char *message)
{
	fputs(message, stderr);
	fputc('\n', stderr);
	exit(1);
}

