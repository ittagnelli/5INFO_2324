#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <string.h>

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
        error("Errore nella creazione del socket");
        exit(1);
    }
    return socket_fd;
}

void socket_bind(int socket_fd, unsigned short udp_port) 
{
    struct sockaddr_in serveraddr;
  
    memset(&serveraddr, '0', sizeof(serveraddr));

    serveraddr.sin_family = AF_INET;
    serveraddr.sin_addr.s_addr = htonl(INADDR_ANY);
    serveraddr.sin_port = htons(udp_port);

    if(bind(socket_fd, (struct sockaddr *) &serveraddr, sizeof(serveraddr)) < 0) 
        error("Errore nella fase di binding");
}

int socket_receive(int socket_fd, char *buf)
{
    int msg_size;
    struct sockaddr_in clientaddr;
    socklen_t client_struct_len;

    memset(&clientaddr, '0', sizeof(clientaddr));

    bzero(buf, BUFSIZE);
    if ((msg_size = recvfrom(socket_fd, buf, BUFSIZE, 0,
         (struct sockaddr*)&clientaddr, &client_struct_len)) < 0)
        error("Errore nella ricezione dati");
    
    return msg_size;
}

int main(int argc, char **argv) 
{
    unsigned short udp_port;
    int socket_fd;
    char buf[BUFSIZE];
    int msg_size;

    if(argc != 2) {
        printf("uso: %s <porta>\n", argv[0]);
        exit(1);
    }
    udp_port = (unsigned short)atoi(argv[1]);

    socket_fd = socket_create();

    socket_bind(socket_fd, udp_port);

    printf("Server UDP pronto e in ascolto sulla porta %d\n\n", udp_port);
    for(;;) {
        msg_size = socket_receive(socket_fd, buf);
        printf("UDP server ha ricevuto %d byte: %s\n", msg_size, buf);
    }
}