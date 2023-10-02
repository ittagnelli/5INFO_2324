#include <stdio.h>
#include <stdlib.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <string.h>
#include <unistd.h>

#define BUFSIZE 1024


/* 
man 7 ip
man 7 udp
 */

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
        error("Cannot create the socket");
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

   if((byte_sent = sendto(socket_fd, buf, strlen(buf), 0,
         (struct sockaddr*)&serveraddr, sizeof(serveraddr))) < 0)
         error("Errore nell'invio dati");
    
    return byte_sent;
}

void socket_connect(int socket_fd, char *ip, unsigned short tcp_port)
{
    struct in_addr server_ip; /* indirizzo ip */
    struct sockaddr_in serveraddr; /* indirizzo e porta server */

    /* converte l'indirizzo IP in dotted-notation in binario in network order */
    inet_aton(ip, &server_ip);

    /* inizializza la struttura che contiene le informazioni del socket */
    memset(&serveraddr, '0', sizeof(serveraddr));
    serveraddr.sin_family = AF_INET;  /* socket IP */
    serveraddr.sin_addr = server_ip;
    serveraddr.sin_port = htons(tcp_port); /* porta tcp in network order*/
    
    if(connect(socket_fd, 
                (struct sockaddr *)&serveraddr,
                sizeof(struct sockaddr)) == -1) {
            perror("Errone nella connessione al server");
            exit(1);
    }
}

int socket_receive(int socket_fd, char *buf)
{
    int msg_size;

    bzero(buf, BUFSIZE);
    if((msg_size = read(socket_fd, buf, BUFSIZE)) < 0)
        error("Errore nella ricezione dati");
    
    return msg_size;
}

int main(int argc, char **argv) 
{
    unsigned short udp_port; /* porta tcp di destinazione */
    char *ip;                /* indirizzo ip di destinazione */
    int socket_fd;           /* connection socket */  
    int byte_sent;           /* numero byte inviati */
    char buf[BUFSIZE];       /* RX buffer */
    int connection_fd;       /* connection socket file descriptor */
    int msg_size;            /* dimensione messaggio
   
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

    // Inizia la connessione al socket remoto
    socket_connect(socket_fd, ip, udp_port);
    printf("Socket connesso con il server %s sulla porta %d\n", ip, udp_port);

    /* invio sul socket la stringa */
    byte_sent = socket_send(socket_fd, ip, udp_port, argv[3]); 
    
    printf("Messaggio inviato  successo: %s\n", argv[3]);

    msg_size = socket_receive(socket_fd, buf); 


    printf("Messaggio rinviato con successo: %s\n", buf);

    close(socket_fd);
}