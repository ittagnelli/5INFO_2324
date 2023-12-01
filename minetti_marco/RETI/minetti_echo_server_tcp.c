#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <string.h>

#define BUFSIZE 1024
#define MAX_CONN 10

void error(char *msg)
{
    perror(msg);
    exit(1);
}

int socket_create()
{
    int socket_fd;

    if ((socket_fd = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP)) < 0)
    {
        error("Errore nella creazione del socket");
        exit(1);
    }
    return socket_fd;
}

void socket_bind(int socket_fd, unsigned short tcp_port)
{
    struct sockaddr_in serveraddr;

    memset(&serveraddr, '0', sizeof(serveraddr));
    serveraddr.sin_family = AF_INET;
    serveraddr.sin_addr.s_addr = htonl(INADDR_ANY);
    serveraddr.sin_port = htons(tcp_port);

    if (bind(socket_fd, (struct sockaddr *)&serveraddr, sizeof(serveraddr)) < 0)
        error("Errore nella fase di binding");
}

void socket_listen(int socket_fd)
{
    if (listen(socket_fd, MAX_CONN) < 0)
        error("Errore nella fase di listen");
}

int socket_accept(int socket_fd)
{
    int connection_fd;
    struct sockaddr_in clientaddr;
    socklen_t clientlen = sizeof(clientaddr);

    if ((connection_fd = accept(socket_fd,
                                (struct sockaddr *)&clientaddr,
                                &clientlen)) < 0)
        error("Errore nella fase di accept");
    return connection_fd;
}

int socket_receive(int socket_fd, char *buf)
{
    int msg_size;

    bzero(buf, BUFSIZE);
    if ((msg_size = read(socket_fd, buf, BUFSIZE)) < 0)
        error("Errore nella ricezione dati");

    return msg_size;
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
    int socket_fd;
    int connection_fd;
    char buf[BUFSIZE];
    int msg_size;

    if (argc != 2)
    {
        printf("uso: %s <porta>\n", argv[0]);
        exit(1);
    }
    tcp_port = (unsigned short)atoi(argv[1]);

    socket_fd = socket_create();

    socket_bind(socket_fd, tcp_port);

    socket_listen(socket_fd);

    printf("Server TCP pronto e in ascolto sulla porta %d\n\n", tcp_port);
    for (;;)
    {

        connection_fd = socket_accept(socket_fd);

        msg_size = socket_receive(connection_fd, buf); 
        msg_size = socket_send(connection_fd, strcat(buf, "\n"));
        printf("TCP server ha ricevuto %d byte: %s\n", msg_size, buf);

        close(connection_fd);
    }
}
