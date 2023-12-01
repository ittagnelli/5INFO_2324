#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <arpa/inet.h>

#define MAX_BUFFER_SIZE 1024
#define SERVER_PORT 12345

int main() {
    int sockfd;
    struct sockaddr_in server_addr, client_addr;
    socklen_t client_addr_len = sizeof(client_addr);
    char buffer[MAX_BUFFER_SIZE];

    if ((sockfd = socket(AF_INET, SOCK_DGRAM, 0)) == -1) {
        perror("Errore nella creazione del socket");
        exit(EXIT_FAILURE);
    }

    memset(&server_addr, 0, sizeof(server_addr));
    server_addr.sin_family = AF_INET;
    server_addr.sin_port = htons(SERVER_PORT);
    server_addr.sin_addr.s_addr = INADDR_ANY;

    if (bind(sockfd, (struct sockaddr*)&server_addr, sizeof(server_addr)) == -1) {
        perror("Errore nel binding");
        exit(EXIT_FAILURE);
    }

    printf("Server in ascolto sulla porta %d...\n", SERVER_PORT);

    while (1) {
        // Ricezione del messaggio dal client
        ssize_t recv_len = recvfrom(sockfd, buffer, MAX_BUFFER_SIZE, 0, (struct sockaddr*)&client_addr, &client_addr_len);
        if (recv_len == -1) {
            perror("Errore nella ricezione del messaggio");
            exit(EXIT_FAILURE);
        }

        buffer[recv_len] = '\0';  // Aggiunta del terminatore di stringa

        // Invio della risposta al client
        if (sendto(sockfd, buffer, strlen(buffer), 0, (struct sockaddr*)&client_addr, client_addr_len) == -1) {
            perror("Errore nell'invio della risposta");
            exit(EXIT_FAILURE);
        }

        printf("Messaggio ricevuto dal client %s:%d: %s\n", inet_ntoa(client_addr.sin_addr), ntohs(client_addr.sin_port), buffer);
    }

    // Il programma non raggiungerà mai questo punto, ma per completezza
    close(sockfd);

    return 0;
}
