#pragma once
#include <iostream>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <winsock2.h>


#define BUF_SIZE 1024

class CSocketClient {
	
public:
	CSocketClient(int argc, char *argv[]);
	~CSocketClient();


	WSADATA wsaData;
	SOCKET hSocket;
	char message[BUF_SIZE];
	int strLen;
	SOCKADDR_IN servAdr;
	
	virtual void init(int argc, char *argv[]);

	void errorHandling(const char *message);
	void isConnected();

	void sendMsg(const char *message);

	void receive();

	void clean();

}