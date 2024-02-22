#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <string.h>

/* 
man 7 ip
man 7 udp
 */

typedef struct udp_response
{
    int msg_size;
    struct sockaddr_in clientaddr; /* client address */
    socklen_t client_struct_len; /* lunghezza dell'indirizzo del client */
    char *buf;
    int buf_size;
} udp_response;

#define BUFSIZE 1024

/* man perror */
void error(char *msg) 
{
  perror(msg);
  exit(1);
}

int socket_create() 
{
    int socket_fd;

    if((socket_fd = socket(AF_INET, SOCK_DGRAM, IPPROTO_UDP)) < 0){
        error("Errore nella creazione del socket");
        exit(1);
    }
    return socket_fd;
}

void socket_bind(int socket_fd, unsigned short udp_port) 
{
    struct sockaddr_in serveraddr; /* server address */
  
    /* inizializza la struttura che contiene le informazioni del socket */
    memset(&serveraddr, '0', sizeof(serveraddr));

    /* prepara le informazioni per mettere il server in ascolto */
    serveraddr.sin_family = AF_INET; /* socket IP */
    serveraddr.sin_addr.s_addr = htonl(INADDR_ANY); /* 0.0.0.0 */
    serveraddr.sin_port = htons(udp_port); /* porta UDP in network order*/

    /* bind del socket con indirizzo e porta */
    if(bind(socket_fd, (struct sockaddr *) &serveraddr, sizeof(serveraddr)) < 0) 
        error("Errore nella fase di binding");
}

struct sockaddr_in socket_receive(int socket_fd, char *buf)
{
    int msg_size;
    struct sockaddr_in clientaddr; /* client address */
    socklen_t client_struct_len; /* lunghezza dell'indirizzo del client */

    /* inizializza la struttura che contiene le informazioni del socket */
    memset(&clientaddr, '0', sizeof(clientaddr));

    bzero(buf, BUFSIZE);
    if ((msg_size = recvfrom(socket_fd, buf, BUFSIZE, 0,
         (struct sockaddr*)&clientaddr, &client_struct_len)) < 0)
        error("Errore nella ricezione dati");
    
    return clientaddr;
}

int socket_send(int socket_fd, struct sockaddr_in client, char *buf) {
    int byte_sent;

   if((byte_sent = sendto(socket_fd, buf, strlen(buf), 0,
         (struct sockaddr*)&client, sizeof(client))) < 0)
         error("Errore nell'invio dati");
    
    return byte_sent;
}

int main(int argc, char **argv) 
{
    unsigned short udp_port; /* UDP port in ascolto */
    int socket_fd;           /* welcoming socket file descriptor */
    char buf[BUFSIZE];       /* RX buffer */

    /* Verifico la presenza del parametro porta e lo leggo*/ 
    if(argc != 2) {
        printf("uso: %s <porta>\n", argv[0]);
        exit(1);
    }
    udp_port = (unsigned short)atoi(argv[1]);

    /* Creo il socket */ 
    socket_fd = socket_create();

    /* bind del socket a IP e porta */
    socket_bind(socket_fd, udp_port);

    /* ciclo principale del server */
    printf("Server UDP pronto e in ascolto sulla porta %d\n\n", udp_port);
    for(;;) {
        struct sockaddr_in client_response = socket_receive(socket_fd, buf);
        printf("UDP server ha ricevuto %ld byte: %s\n", strlen(buf), buf);
        
        // int msg_size = socket_send(socket_fd, client_response, buf);
        // printf("UDP server ha inviato %i byte: %s\n", msg_size, buf);
    }
}