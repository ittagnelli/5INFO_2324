#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <string.h>


/*
int main() {
    int numeri[] = {1000, 12890, 54163, 34012, 62984};
    int numcount = sizeof(numeri) / sizeof(int);

    printf("Conversione da host a network order (formato esadecimale):\n");
    .
    for(int i = 0; i < numcount; i++) {
        int networkNum = htonl(numeri[i]);
        printf("Numero originale: %d\t Numero convertito: 0x%08X\n", numeri[i], networkNum);
    }
    
    return 0;
}
*/



int main() {

    int num[] = {};
    int num2[] = {};

    for(int i=0; i<3; i++)
    {
        printf("Inserisci un numero da tastiera da host a network:");
        scanf("%d", &num[i]);

        printf("\nil numero è: %d", num[i]);

        //conversione da host a network
        htons(num[i]);

        //conversione da num decimale a esadecimale
        
     printf("\nNumero ottenuto: %X\n\n\n", num[i]);


    }


    for(int j=0; j<3; j++)
    {
        printf("Inserisci un numero da tastiera da network a host:");
        scanf("%d", &num2[j]);

        printf("\nil numero è: %d", num2[j]);


        //conversione da network a host
        ntohs(num2[j]);

        //conversione da numero decimale ad esadecimale

        printf("\nIl numero ottenuto è:  %X\n", num2[j]);
    }



return(0);
}