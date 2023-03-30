#include "pch.h"
#include <iostream>
#include <string>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <winsock2.h>
#include "socket_client.h"

using namespace std;


int main(int argc, char *argv[])
{


	if (argc != 3) {
		cout << "Usage : %s <IP> <port>\n" << argv[0];
		exit(1);
	}
	socket_client *G_Socket = new socket_client(argv);

	//G_Socket->InitSocket(argv);
	G_Socket->ConnectSocket();

	G_Socket->CloseSocket();

	return 0;
}