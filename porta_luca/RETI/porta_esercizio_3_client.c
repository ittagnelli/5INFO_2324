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

    if((socket_fd = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP)) < 0){
        error("Cannot create the socket");
        exit(1);
    }

    return socket_fd;
}

void socket_connect(int socket_fd, char *ip, unsigned short tcp_port)
{
    struct in_addr server_ip;
    struct sockaddr_in serveraddr;

    inet_aton(ip, &server_ip);

    memset(&serveraddr, '0', sizeof(serveraddr));
    serveraddr.sin_family = AF_INET;
    serveraddr.sin_addr = server_ip;
    serveraddr.sin_port = htons(tcp_port);
    
    if(connect(socket_fd, 
                (struct sockaddr *)&serveraddr,
                sizeof(struct sockaddr)) == -1) {
            perror("Errone nella connessione al server");
            exit(1);
    }
}

int socket_send(int socket_fd, char *buf) 
{
    int byte_sent;

    if((byte_sent = write(socket_fd, buf, strlen(buf))) < 0)
        error("Errore nell'invio dati");
    
    return byte_sent;
}

int main(int argc, char **argv) 
{
    unsigned short tcp_port;
    char *ip;
    int socket_fd;  
    int byte_sent;

    if(argc != 4) {
        printf("uso: %s <IP> <porta> <string>\n", argv[0]);
        exit(1);
    }

    ip = argv[1];
    tcp_port = (unsigned short)atoi(argv[2]);

    socket_fd = socket_create();

    socket_connect(socket_fd, ip, tcp_port);
    printf("Socket connesso con il server %s sulla porta %d\n", ip, tcp_port);

     byte_sent = socket_send(socket_fd, argv[3]); 

    printf("Inviato %d bytes con successo\n", byte_sent);

    close(socket_fd);
}
