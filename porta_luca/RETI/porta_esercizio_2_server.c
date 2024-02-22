#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <arpa/inet.h>
#include <unistd.h>

#define PORT 2005
#define MAX_BUFFER_SIZE 1024

int main() {
    int server_socket, client_socket;
    struct sockaddr_in server_addr, client_addr;
    socklen_t client_len = sizeof(client_addr);
    server_socket = socket(AF_INET, SOCK_STREAM, 0);
    if (server_socket == -1) {
        perror("Errore nella creazione del socket");
        exit(EXIT_FAILURE);
    }
    server_addr.sin_family = AF_INET;
    server_addr.sin_addr.s_addr = INADDR_ANY;
    server_addr.sin_port = htons(PORT);
    if (bind(server_socket, (struct sockaddr *)&server_addr, sizeof(server_addr)) == -1) {
        perror("Errore nel binding del socket");
        exit(EXIT_FAILURE);
    }
    if (listen(server_socket, 5) == -1) {
        perror("Errore nell'ascolto delle connessioni");
        exit(EXIT_FAILURE);
    }

    printf("Server in ascolto sulla porta %d...\n", PORT);

    while (1) {
        client_socket = accept(server_socket, (struct sockaddr *)&client_addr, &client_len);
        if (client_socket == -1) {
            perror("Errore nell'accettazione della connessione");
            exit(EXIT_FAILURE);
        }

        printf("Client connesso\n");

        char buffer[MAX_BUFFER_SIZE];
        int bytes_received;

        while (1) {
            bytes_received = recv(client_socket, buffer, sizeof(buffer), 0);
            if (bytes_received <= 0) {
                break;
            }
            send(client_socket, buffer, bytes_received, 0);
        }

        printf("Client disconnesso\n");
        close(client_socket);
    }

    close(server_socket);
    return 0;
}