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

struct sockaddr_in ipclient;



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

int socket_receive(int socket_fd, char *buf)
{
    int msg_size;
    struct sockaddr_in clientaddr; /* client address */
    socklen_t client_struct_len; /* lunghezza dell'indirizzo del client */
  
    /* inizializza la struttura che contiene le informazioni del socket */
    memset(&clientaddr, '0', sizeof(clientaddr));

    bzero(buf, BUFSIZE);
    client_struct_len = sizeof(clientaddr);
    if ((msg_size = recvfrom(socket_fd, buf, BUFSIZE, 0,
         (struct sockaddr*)&clientaddr, &client_struct_len)) < 0)
        error("Errore nella ricezione dati");

        ipclient = clientaddr;
    
    return msg_size;
}

int socket_send(int socket_fd, char *ip, unsigned short port, char *buf) 
{
    struct sockaddr_in clientaddr; /* indirizzo e porta server */  
    int byte_sent;

     /* prepara le informazioni sulla destinazioen del datagram */
    clientaddr.sin_family = AF_INET;
    clientaddr.sin_port = htons(port);
    clientaddr.sin_addr.s_addr = inet_addr(ip);

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
        msg_size = socket_receive(socket_fd, buf);
        printf("\nUDP server ha ricevuto %d byte: %s\n", msg_size, buf);

        if ((msg_size = sendto(socket_fd, buf, strlen(buf), 0, (struct sockaddr*)&ipclient, sizeof(ipclient))) < 0)
        {
            error("Errore nell'invio dati");
        }

        printf("Inviato!\n");
        

        

    }
}