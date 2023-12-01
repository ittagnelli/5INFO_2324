#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <arpa/inet.h>
#include <unistd.h>

#define SERVER_IP "127.0.0.5"
#define PORT 2005
#define MAX_BUFFER_SIZE 1024

int main() {
    int client_socket;
    struct sockaddr_in server_addr;
    char buffer[MAX_BUFFER_SIZE];

    client_socket = socket(AF_INET, SOCK_STREAM, 0);
    server_addr.sin_family = AF_INET;
    server_addr.sin_port = htons(PORT);

    printf("Connesso al server %s:%d\n", SERVER_IP, PORT);

    while (1) {
        printf("Inserisci un messaggio (o 'q' per uscire): ");
        fgets(buffer, sizeof(buffer), stdin);

        send(client_socket, buffer, strlen(buffer), 0);

        if (buffer[0] == 'q') {
            break;
        }

        int bytes_received = recv(client_socket, buffer, sizeof(buffer), 0);
        if (bytes_received <= 0) {
            perror("Errore nella ricezione dei dati dal server");
            break;
        }

        buffer[bytes_received] = '\0';
        printf("Risposta dal server: %s", buffer);
    }

    close(client_socket);

    return 0;
}