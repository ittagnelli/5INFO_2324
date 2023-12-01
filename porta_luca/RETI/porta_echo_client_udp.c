#include <stdio.h>
#include <stdlib.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <string.h>
#include <unistd.h>

void error(char *msg) 
{
  perror(msg);
  exit(1);
}

int socket_create() 
{
    int socket_fd;

    if((socket_fd = socket(AF_INET, SOCK_DGRAM, IPPROTO_UDP)) < 0){
        error("Cannot create the socket");
        exit(1);
    }

    return socket_fd;
}

int socket_send(int socket_fd, char *ip, unsigned short port, char *buf) 
{
    struct sockaddr_in serveraddr; 
    int byte_sent;

    serveraddr.sin_family = AF_INET;
    serveraddr.sin_port = htons(port);
    serveraddr.sin_addr.s_addr = inet_addr(ip);

   if((byte_sent = sendto(socket_fd, buf, strlen(buf), 0,
         (struct sockaddr*)&serveraddr, sizeof(serveraddr))) < 0)
         error("Errore nell'invio dati");
    
    return byte_sent;
}

int main(int argc, char **argv) 
{
    unsigned short udp_port;
    char *ip;
    int socket_fd;
    int byte_sent;

    /* Verifico la presenza dei parametre IP e porta */ 
    if(argc != 4) {
        printf("uso: %s <IP> <porta> <string>\n", argv[0]);
        exit(1);
    }

    ip = argv[1];
    udp_port = (unsigned short)atoi(argv[2]);

    socket_fd = socket_create();

    byte_sent = socket_send(socket_fd, ip, udp_port, argv[3]); 

    printf("Inviato %d bytes con successo a %s\n", byte_sent, ip);

    close(socket_fd);
}