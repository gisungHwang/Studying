#pragma once
#include <string>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <winsock2.h>

using namespace std;

#define BUF_SIZE 1024
#define OPSZ 4
class socket_server
{
public:
	socket_server(char *argv[]);
	~socket_server();

	WSADATA wsaData;
	SOCKET hServSock, hClntSock;
	char opinfo[BUF_SIZE];
	int result, opndCnt, i;
	int recvCnt, recvLen;
	SOCKADDR_IN servAdr, clntAdr;
	int clntAdrSize;

	string WSAErr = "WSAStartup() error!";

	void InitSocket(char *argv[]);
	void ConnectSocket();
	int Calculate(int opnum, int opnds[], char op);
	void ErrorHandling(string message);
	void CloseSokcet();

};

