#include "pch.h"
#include "socket_client.h"


CSocketClient::CSocketClient(int argc, char *argv[])
{
	this->init(argc, argv);
};
CSocketClient::~CSocketClient() 
{
};

void CSocketClient::init(int argc, char *argv[])
{
	if (argc != 3) {
		printf("Usage : %s <IP> <port>\n", argv[0]);
		exit(1);
	}

	if (WSAStartup(MAKEWORD(2, 2), &wsaData) != 0)
		errorHandling("WSAStartup() error!");

	hSocket = socket(PF_INET, SOCK_STREAM, 0);
	if (hSocket == INVALID_SOCKET)
		errorHandling("socket() error");

	memset(&servAdr, 0, sizeof(servAdr));
	servAdr.sin_family = AF_INET;

	servAdr.sin_addr.s_addr = inet_addr(argv[1]);
	servAdr.sin_port = htons(atoi(argv[2]));

	this->isConnected();
}


void CSocketClient::isConnected() 
{
	if (connect(hSocket, (SOCKADDR*)&servAdr, sizeof(servAdr)) == SOCKET_ERROR)
		errorHandling("connect() error!");
	else
		puts("Connected...");
};

void CSocketClient::sendMsg(const char *messagev)
{

	send(this->hSocket, messagev, strlen(message), 0);
};

void CSocketClient::receive() 
{
	strLen = recv(hSocket, message, BUF_SIZE - 1, 0);
	message[strLen] = 0;
	printf("Message from server: %s", message);
};

void CSocketClient::errorHandling(const char *message)
{
	fputs(message, stderr);
	fputc('\n', stderr);
	exit(1);
};

void CSocketClient::clean() 
{
	closesocket(hSocket);
	WSACleanup();
};

