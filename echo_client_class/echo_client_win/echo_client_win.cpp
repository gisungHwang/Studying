#include "pch.h"
#include <iostream>
#include "socket_client.h"

using namespace std;



int main(int argc, char *argv[])
{
	CSocketClient * G_Socket = new CSocketClient(argc, argv);
	



	while (1)
	{
		fputs("Input message(Q to quit): ", stdout);
		G_Socket->sendMsg(fgets(G_Socket->message, BUF_SIZE, stdin));

		if (!strcmp(G_Socket->message, "q\n") || !strcmp(G_Socket->message, "Q\n"))
			break;

	}
	//G_Socket->receive();
	//G_Socket->clean();

	return 0;
}


