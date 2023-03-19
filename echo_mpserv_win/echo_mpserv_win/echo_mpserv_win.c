#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <winsock2.h>
#include <process.h>

#define BUF_SIZE 30
void ErrorHandling(char *message);
void ReadChildproc(int sig);

int main(int argc, char *argv[])
{
	WSADATA wsaData;
	SOCKET servSock, clntSock;
	struct sockaddr_in servAdr, clntAdr;

	HANDLE pid;
	int strLen;
	char buf[BUF_SIZE];
	if (argc != 2) {
		printf("Usage : %s <port>\n", argv[0]);
		exit(1);
	}

	if (WSAStartup(MAKEWORD(2, 2), &wsaData) != 0)
		ErrorHandling("WSAStartup() error");


	servSock = socket(PF_INET, SOCK_STREAM, 0);
	memset(&servAdr, 0, sizeof(servAdr));
	servAdr.sin_family = AF_INET;
	servAdr.sin_addr.s_addr = htonl(INADDR_ANY);
	servAdr.sin_port = htons(atoi(argv[1]));
	printf("port : %s\n", argv[1]);

	if (bind(servSock, (struct sockaddr*) &servAdr, sizeof(servAdr)) == SOCKET_ERROR)
		ErrorHandling("bind() error");

	if (listen(servSock, 5) == SOCKET_ERROR)
		ErrorHandling("listen() error");

	while (1)
	{
		int clntAdrSz = sizeof(clntAdr);
		//printf("clntAdrSz : %d\n", clntAdrSz);
		clntSock = accept(servSock, (struct sockaddr*)&clntAdr, &clntAdrSz);

		if (clntSock == INVALID_SOCKET)
			continue;
		else
			puts("new client connected...");

		pid = (HANDLE)_beginthreadex(NULL, 0, (void*)ReadChildproc, (LPVOID)clntSock, 0, NULL);
		if (pid == NULL)
		{
			closesocket(clntSock);
			continue;
		}
	}
	closesocket(servSock);
	WSACleanup();
	return 0;
}

void ReadChildproc(int clntSock)
{
	int strLen;
	char buf[BUF_SIZE];
	while ((strLen = recv(clntSock, buf, BUF_SIZE, 0)) != 0)
	{
		printf("clntSock : %d  ", clntSock);
		printf("message : %s\n", buf);
		send(clntSock, buf, strLen, 0);
	}

	closesocket(clntSock);
	puts("client disconnected...");
	return;
}

void ErrorHandling(char *message)
{
	fputs(message, stderr);
	fputc('\n', stderr);
	exit(1);
}