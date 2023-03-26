﻿//#include <stdio.h>
//#include <stdlib.h>
//#include <string.h>
//#include <winsock2.h>
//
//#define BUF_SIZE 30
//
//void ErrorHandling(const char* message);
//void RunFileServer(char* port);
//
//int main(int argc, char* argv[]) {
//	if (argc != 2) {
//		printf("usage: %s <port>\n", argv[0]);
//		exit(1);
//	}
//
//	RunFileServer(argv[1]);
//
//	return 0;
//}
//
//void RunFileServer(char* port) {
//	WSADATA wsaData;
//	SOCKET hServSock, hClntSock;
//	FILE* fp;
//	char buf[BUF_SIZE];
//	int readCnt;
//
//	SOCKADDR_IN servAdr, clntAdr;
//	int clntAdrSz;
//
//	if (WSAStartup(MAKEWORD(2, 2), &wsaData) != 0)
//		ErrorHandling("WSAStartup() error!!!");
//
//	fp = fopen("file_server_win.c", "rb");
//	hServSock = socket(PF_INET, SOCK_STREAM, 0);
//
//	memset(&servAdr, 0, sizeof(servAdr));
//	servAdr.sin_family = AF_INET;
//	servAdr.sin_addr.s_addr = htonl(INADDR_ANY);
//	servAdr.sin_port = htons(atoi(port));
//
//	bind(hServSock, (SOCKADDR*)&servAdr, sizeof(servAdr));
//	listen(hServSock, 5);
//
//	clntAdrSz = sizeof(clntAdr);
//	hClntSock = accept(hServSock, (SOCKADDR*)&clntAdr, &clntAdrSz);
//
//	while (1)
//	{
//		readCnt = fread((void*)buf, 1, BUF_SIZE, fp);
//		if (readCnt < BUF_SIZE)
//		{
//			send(hClntSock, (char*)&buf, readCnt, 0);
//			break;
//		}
//		send(hClntSock, (char*)&buf, BUF_SIZE, 0);
//	}
//
//	shutdown(hClntSock, SD_SEND);
//	recv(hClntSock, (char*)buf, BUF_SIZE, 0);
//	printf("message from client : %s \n", buf);
//
//	fclose(fp);
//	closesocket(hClntSock);
//	closesocket(hServSock);
//	WSACleanup();
//}
//
//
//
//void ErrorHandling(const char* message) {
//	fputs(message, stderr);
//	fputc('\n', stderr);
//	exit(1);
//}