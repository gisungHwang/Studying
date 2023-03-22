#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <winsock2.h>

#define BUF_SIZE 1024

void error_handling(char *message);
void create_server_socket(int port, SOCKET *server_socket);
void accept_client_connection(SOCKET server_socket);
void handle_client_message(SOCKET client_socket);

int main(int argc, char *argv[]) {
	if (argc != 2) {
		printf("Usage: %s <port>\n", argv[0]);
		exit(1);
	}

	WSADATA wsaData;
	if (WSAStartup(MAKEWORD(2, 2), &wsaData) != 0) {
		error_handling("WSAStartup() error!");
	}

	SOCKET server_socket;
	create_server_socket(atoi(argv[1]), &server_socket);

	accept_client_connection(server_socket);

	closesocket(server_socket);
	WSACleanup();

	return 0;
}

void create_server_socket(int port, SOCKET *server_socket) {
	*server_socket = socket(PF_INET, SOCK_STREAM, 0);
	if (*server_socket == INVALID_SOCKET) {
		error_handling("socket() error");
	}

	SOCKADDR_IN server_address;
	memset(&server_address, 0, sizeof(server_address));
	server_address.sin_family = AF_INET;
	server_address.sin_addr.s_addr = htonl(INADDR_ANY);
	server_address.sin_port = htons(port);

	if (bind(*server_socket, (SOCKADDR*)&server_address, sizeof(server_address)) == SOCKET_ERROR) {
		error_handling("bind() error");
	}

	if (listen(*server_socket, 5) == SOCKET_ERROR) {
		error_handling("listen() error");
	}
}

void accept_client_connection(SOCKET server_socket) {
	SOCKADDR_IN client_address;
	int client_address_size = sizeof(client_address);

	for (int i = 1; i <= 5; i++) {
		SOCKET client_socket = accept(server_socket, (SOCKADDR*)&client_address, &client_address_size);
		if (client_socket == INVALID_SOCKET) {
			error_handling("accept() error");
		}
		else {
			printf("Connected client %d\n", i);
		}

		handle_client_message(client_socket);

		closesocket(client_socket);
	}
}

void handle_client_message(SOCKET client_socket) {
	char buffer[BUF_SIZE];

	while (1) {
		int received_bytes = recv(client_socket, buffer, BUF_SIZE, 0);
		if (received_bytes == SOCKET_ERROR) {
			error_handling("recv() error");
		}
		else if (received_bytes == 0) {
			printf("Client disconnected\n");
			break;
		}

		send(client_socket, buffer, received_bytes, 0);
	}
}

void error_handling(char *message) {
	fputs(message, stderr);
	fputc('\n', stderr);
	exit(1);
}