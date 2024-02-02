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

int socket_receive(int socket_fd, char *buf, struct sockaddr_in *clientaddr)
{
    int msg_size;
    socklen_t client_struct_len = sizeof(struct sockaddr_in); // Inizializza la lunghezza
    memset(clientaddr, 0, sizeof(struct sockaddr_in)); // Assicurati che la struttura sia inizializzata

    if ((msg_size = recvfrom(socket_fd, buf, BUFSIZE, 0,
         (struct sockaddr*)clientaddr, &client_struct_len)) < 0)
        error("Errore nella ricezione dati");
    
    return msg_size;
}

int socket_send(int socket_fd, struct sockaddr_in clientaddr, char *buf) 
{
    int byte_sent;

    if((byte_sent = sendto(socket_fd, buf, strlen(buf), 0,
         (struct sockaddr*)&clientaddr, sizeof(clientaddr))) < 0)
         error("Errore nell'invio dati");
    return byte_sent;
}

int main(int argc, char **argv) 
{
    unsigned short udp_port; /* UDP port in ascolto */
    int socket_fd;           /* welcoming socket file descriptor */
    char buf[BUFSIZE];       /* RX buffer */
    int msg_size;            /* dimensione messaggio ricevuto */
    int byte_sent;
    struct sockaddr_in client_addr; /* client address */
    
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
        memset(&client_addr, '0', sizeof(client_addr));
        bzero(buf, BUFSIZE);

        msg_size = socket_receive(socket_fd, buf, &client_addr);
        printf("UDP server ha ricevuto %d byte: %s\n", msg_size, buf);

        byte_sent = socket_send(socket_fd, client_addr, buf);
        printf("UDP server ha mandato %s all'indirizzo %s\n", buf, inet_ntoa(client_addr.sin_addr));
    }
}