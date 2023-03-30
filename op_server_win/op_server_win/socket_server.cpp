#include "pch.h"
#include "socket_server.h"


socket_server::socket_server(char *argv[])
{
}


socket_server::~socket_server()
{
}

void socket_server::InitSocket(char *argv[])
{
	if (WSAStartup(MAKEWORD(2, 2), &wsaData) != 0)
		ErrorHandling(WSAErr);

	hServSock = socket(PF_INET, SOCK_STREAM, 0);
	if (hServSock == INVALID_SOCKET)
		ErrorHandling("socket() error");

	memset(&servAdr, 0, sizeof(servAdr));
	servAdr.sin_family = AF_INET;
	servAdr.sin_addr.s_addr = htonl(INADDR_ANY);
	servAdr.sin_port = htons(atoi(argv[1]));

	if (bind(hServSock, (SOCKADDR*)&servAdr, sizeof(servAdr)) == SOCKET_ERROR)
		ErrorHandling("bind() error");
	if (listen(hServSock, 5) == SOCKET_ERROR)
		ErrorHandling("listen() error");

}

void socket_server::ConnectSocket()
{

	clntAdrSize = sizeof(clntAdr);

	for (i = 0; i < 5; i++)
	{
		opndCnt = 0;
		hClntSock = accept(hServSock, (SOCKADDR*)&clntAdr, &clntAdrSize);
		recv(hClntSock, (char*)&opndCnt, 1, 0);

		recvLen = 0;
		while ((opndCnt*OPSZ + 1) > recvLen)
		{
			recvCnt = recv(hClntSock, &opinfo[recvLen], BUF_SIZE - 1, 0);
			recvLen += recvCnt;
		}

		printf("Operand count : %d \n", opndCnt);

		result = Calculate(opndCnt, (int*)opinfo, opinfo[recvLen - 1]);

		printf("Operation result: %d \n", result);

		send(hClntSock, (char*)&result, sizeof(result), 0);
		closesocket(hClntSock);
	}

}

int socket_server::Calculate(int opnum, int opnds[], char op)
{
	int result = opnds[0], i;
	printf("op : %c \n", op);
	switch (op)
	{
	case '+':
		for (i = 1; i < opnum; i++) result += opnds[i];
		break;
	case '-':
		for (i = 1; i < opnum; i++) result -= opnds[i];
		break;
	case '*':
		for (i = 1; i < opnum; i++) result *= opnds[i];
		break;
	}

	for (i = 0; i < opnum; i++)
	{
		printf("Operand : %d \n", opnds[i]);
	}

	return result;

}

void socket_server::ErrorHandling(string message)
{
	fputs(message.c_str(), stderr);
	fputc('\n', stderr);
	exit(1);

}

void socket_server::CloseSokcet()
{
	closesocket(hServSock);
	WSACleanup();

}
