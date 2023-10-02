#include <stdio.h>
#include <arpa/inet.h>

int main() {
    int numeri[] = {1000, 12890, 54163, 34012, 62984};
    int numcount = sizeof(numeri) / sizeof(int);

    printf("Conversione da host a network order (formato esadecimale):\n");
    
    for(int i = 0; i < numcount; i++) {
        int networkNum = htonl(numeri[i]);
        printf("Numero originale: %d\t Numero convertito: 0x%08X\n", numeri[i], networkNum);
    }
    
    return 0;
}