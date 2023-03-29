#include "socket_client.h"


socket_client::socket_client(char *argv[]) {
	this->InitSocket(argv);
};


socket_client::~socket_client() {

};

void socket_client::InitSocket(char *argv[]) {


	if (WSAStartup(MAKEWORD(2, 2), &wsaData) != 0)
		ErrorHandling(errMsg);

	hSocket = socket(PF_INET, SOCK_STREAM, 0);
	if (hSocket == INVALID_SOCKET)
		ErrorHandling(socketErr);

	memset(&servAdr, 0, sizeof(servAdr));
	servAdr.sin_family = AF_INET;
	servAdr.sin_addr.s_addr = inet_addr(argv[1]);
	servAdr.sin_port = htons(atoi(argv[2]));

	if (connect(hSocket, (SOCKADDR*)&servAdr, sizeof(servAdr)) == SOCKET_ERROR)
		ErrorHandling(conErr);
	else
		puts("Connected....");

}

void socket_client::ConnectSocket() {

	fputs("Operand count: ", stdout);
	cin >> opndCnt;

	opmsg[0] = (char)opndCnt;

	for (i = 0; i < opndCnt; i++)
	{
		printf("Operand %d: ", i + 1);
		cin >> opmsg[i*OPSZ + 1];
	}
	fgetc(stdin);
	fputs("Operator: ", stdout);
	cin >> opmsg[opndCnt*OPSZ + 1];
	send(hSocket, opmsg, opndCnt*OPSZ + 2, 0);
	recv(hSocket, (char*)result, RLT_SIZE, 0);

	cout << "Operation result: " << (int)result << "\n";
}

void socket_client::ErrorHandling(string message)
{
	fputs(message.c_str(), stderr);
	fputc('\n', stderr);
	exit(1);
}

void socket_client::CloseSocket()
{
	closesocket(hSocket);
	WSACleanup();
}