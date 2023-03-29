// operator_class.cpp : 이 파일에는 'main' 함수가 포함됩니다. 거기서 프로그램 실행이 시작되고 종료됩니다.
//

#include <iostream>
#include <string>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <winsock2.h>
#include "socket_client.h"

using namespace std;
//#define BUF_SIZE 1024
//#define RLT_SIZE 4
//#define OPSZ 4
//
//SOCKET hSocket;
//
//string errMsg = "WSAStartup() error!!!1!";
//string socketErr = "socket() error!!";
//string conErr = "connect() error!!";
//
//void ConnectSocket() {
//
//	int result, opndCnt, i;
//	char opmsg[BUF_SIZE];
//
//	fputs("Operand count: ", stdout);
//	cin >> opndCnt;
//
//	opmsg[0] = (char)opndCnt;
//
//	for (i = 0; i < opndCnt; i++)
//	{
//		printf("Operand %d: ", i + 1);
//		cin >> opmsg[i*OPSZ + 1];
//	}
//	fgetc(stdin);
//	fputs("Operator: ", stdout);
//	cin >> opmsg[opndCnt*OPSZ + 1];
//	send(hSocket, opmsg, opndCnt*OPSZ + 2, 0);
//	recv(hSocket, (char*)result, RLT_SIZE, 0);
//
//	cout << "Operation result: %d \n" << result;
//}
//
//void ErrorHandling(string message)
//{
//	fputs(message.c_str(), stderr);
//	fputc('\n', stderr);
//	exit(1);
//}
//
//void InitSocket(char *argv[]) {
//
//	WSADATA wsaData;
//	SOCKADDR_IN servAdr;
//
//	if (WSAStartup(MAKEWORD(2, 2), &wsaData) != 0)
//		ErrorHandling(errMsg);
//
//	hSocket = socket(PF_INET, SOCK_STREAM, 0);
//	if (hSocket == INVALID_SOCKET)
//		ErrorHandling(socketErr);
//
//	memset(&servAdr, 0, sizeof(servAdr));
//	servAdr.sin_family = AF_INET;
//	servAdr.sin_addr.s_addr = inet_addr(argv[1]);
//	servAdr.sin_port = htons(atoi(argv[2]));
//
//	if (connect(hSocket, (SOCKADDR*)&servAdr, sizeof(servAdr)) == SOCKET_ERROR)
//		ErrorHandling(conErr);
//	else
//		puts("Connected....");
//
//}

int main(int argc, char *argv[])
{
	

	if (argc != 3) {
		cout << "Usage : %s <IP> <port>\n" << argv[0];
		exit(1);
	}
	socket_client *G_Socket = new socket_client(argv);

	G_Socket->InitSocket(argv);
	G_Socket->ConnectSocket();

	G_Socket->CloseSocket();
	
	return 0;
}
