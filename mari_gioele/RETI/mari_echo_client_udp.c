#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <arpa/inet.h>

#define MAX_BUFFER_SIZE 1024
#define SERVER_PORT 12345

int main() {
    int sockfd;
    struct sockaddr_in server_addr;
    char buffer[MAX_BUFFER_SIZE];

    if ((sockfd = socket(AF_INET, SOCK_DGRAM, 0)) == -1) {
        perror("Errore nella creazione del socket");
        exit(EXIT_FAILURE);
    }

    memset(&server_addr, 0, sizeof(server_addr));
    server_addr.sin_family = AF_INET;
    server_addr.sin_port = htons(SERVER_PORT);
    server_addr.sin_addr.s_addr = INADDR_ANY;

    while (1) {
        printf("Inserisci un messaggio (o 'exit' per uscire): ");
        fgets(buffer, MAX_BUFFER_SIZE, stdin);

        sendto(sockfd, buffer, strlen(buffer), 0, (struct sockaddr*)&server_addr, sizeof(server_addr));

        if (strncmp(buffer, "exit", 4) == 0) {
            printf("Chiusura del client.\n");
            break;
        }

        recvfrom(sockfd, buffer, MAX_BUFFER_SIZE, 0, NULL, NULL);

        printf("Risposta dal server: %s", buffer);
    }

    close(sockfd);

    return 0;
}
