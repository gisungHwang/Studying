#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <winsock2.h>

#define BUF_SIZE 30

SOCKET hServSock, hClntSock;

void ErrorHandling(const char* message);
void InitFileServer(char* port);
void ReadMsgClient(char* msg);

int main(int argc, char* argv[]) {
	if (argc != 2) {
		printf("usage: %s <port>\n", argv[0]);
		exit(1);
	}

	InitFileServer(argv[1]);
	ReadMsgClient(argv[1]);

	closesocket(hServSock);
	WSACleanup();

	return 0;
}

void InitFileServer(char* port) {
	WSADATA wsaData;

	SOCKADDR_IN servAdr;

	if (WSAStartup(MAKEWORD(2, 2), &wsaData) != 0)
		ErrorHandling("WSAStartup() error!!!");

	hServSock = socket(PF_INET, SOCK_STREAM, 0);

	memset(&servAdr, 0, sizeof(servAdr));
	servAdr.sin_family = AF_INET;
	servAdr.sin_addr.s_addr = htonl(INADDR_ANY);
	servAdr.sin_port = htons(atoi(port));

	bind(hServSock, (SOCKADDR*)&servAdr, sizeof(servAdr));
	

}

void ReadMsgClient(char* msg) {
	FILE* fp;
	SOCKET hClntSock;
	SOCKADDR_IN clntAdr;
	char buf[BUF_SIZE];
	int clntAdrSz;
	int readCnt;

	fp = fopen("file_class_server.c", "rb");
	clntAdrSz = sizeof(clntAdr);

	listen(hServSock, 5);
	hClntSock = accept(hServSock, (SOCKADDR*)&clntAdr, &clntAdrSz);

	while (1)
	{
		readCnt = fread((void*)buf, 1, BUF_SIZE, fp);
		if (readCnt < BUF_SIZE)
		{
			send(hClntSock, (char*)&buf, readCnt, 0);
			break;
		}
		send(hClntSock, (char*)&buf, BUF_SIZE, 0);
	}

	shutdown(hClntSock, SD_SEND);
	recv(hClntSock, (char*)buf, BUF_SIZE, 0);
	printf("message from client : %s \n", buf);

	fclose(fp);
	closesocket(hClntSock);
}

void ErrorHandling(const char* message) {
	fputs(message, stderr);
	fputc('\n', stderr);
	exit(1);
}