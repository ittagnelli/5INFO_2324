#include <stdio.h>
#include <stdlib.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <string.h>
#include <unistd.h>

/* 
man 7 ip
man 7 udp

 */

/* man perror */

#define BUFSIZE 1024

void error(char *msg) 
{
  perror(msg);
  exit(1);
}

int socket_create() 
{
    int socket_fd;

    if((socket_fd = socket(AF_INET, SOCK_DGRAM, IPPROTO_UDP)) < 0){
        error("Non è possibile creare il socket");
        exit(1);
    }

    return socket_fd;
}

int socket_send(int socket_fd, char *ip, unsigned short port, char *buf) 
{
    struct sockaddr_in serveraddr; /* indirizzo e porta server */  
    int byte_sent;

     /* prepara le informazioni sulla destinazioen del datagram */
    serveraddr.sin_family = AF_INET;
    serveraddr.sin_port = htons(port);
    serveraddr.sin_addr.s_addr = inet_addr(ip);

   if((byte_sent = sendto(socket_fd, buf, strlen(buf), MSG_CONFIRM,
         (struct sockaddr*)&serveraddr, sizeof(serveraddr))) < 0)
         error("Errore nell'invio dati");
    
    return byte_sent;
}

int wait_receive(int socket_fd, char *buf) {
    int byte_receive;
    struct sockaddr_in clientaddr;
    socklen_t client_struct_len;

    bzero(buf, BUFSIZE);

    client_struct_len = sizeof(clientaddr);
    if ((byte_receive = recvfrom(socket_fd, buf, BUFSIZE, MSG_WAITALL,
         (struct sockaddr*)&clientaddr, &client_struct_len)) < 0)
        error("Errore nella ricezione dati");
    return byte_receive;
}

int main(int argc, char **argv) 
{
    unsigned short udp_port; /* porta tcp di destinazione */
    char *ip;                /* indirizzo ip di destinazione */
    int socket_fd;           /* connection socket */  
    int byte_sent;           /* numero byte inviati */
    char buf[BUFSIZE];

    /* Verifico la presenza dei parametre IP e porta */ 
    if(argc != 4) {
        printf("uso: %s <IP> <porta> <string>\n", argv[0]);
        exit(1);
    }

    /* Acquisisco IP e numero di porta */
    ip = argv[1];
    udp_port = (unsigned short)atoi(argv[2]);

    /* Creo il socket */ 
    socket_fd = socket_create();

    /* invio sul socket la stringa */
    byte_sent = socket_send(socket_fd, ip, udp_port, argv[3]); 
    wait_receive(socket_fd, buf);
    printf("%s\n", buf);

    close(socket_fd);
}