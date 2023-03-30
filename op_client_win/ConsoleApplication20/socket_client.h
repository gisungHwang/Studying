#pragma once
#include <iostream>
#include <string>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <winsock2.h>

using namespace std;

#define BUF_SIZE 1024
#define RLT_SIZE 4
#define OPSZ 4

class socket_client
{
public:
	socket_client(char *argv[]);
	~socket_client();


	WSADATA wsaData;
	SOCKADDR_IN servAdr;
	int result, opndCnt, i;
	//char result;
	char opmsg[BUF_SIZE];
	SOCKET hSocket;

	string errMsg = "WSAStartup() error!!!1!";
	string socketErr = "socket() error!!";
	string conErr = "connect() error!!";

	void InitSocket(char *argv[]);
	void ConnectSocket();
	void ErrorHandling(string message);
	void CloseSocket();

};

