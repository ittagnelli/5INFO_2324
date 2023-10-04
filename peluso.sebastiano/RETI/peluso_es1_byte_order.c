/*converta i seguenti numeri su 16 bit da host a network order e stampi la conversione sulla console in formao esadecimale

19875
5499
59821
43120
26489*/


#include <stdio.h>
#include <arpa/inet.h>

int main() {
 
    uint16_t vet1[] = {1000, 12890, 54163, 34012, 62984};
    int numero_di_numeri = sizeof(vet1) / sizeof(vet1[0]);

    for (int i = 0; i < numero_di_numeri; i++) {

        uint16_t host = vet1[i];
        uint16_t network = htons(host); 
        
  
        printf("Numero %d in formato host: 0x%04X\n", i + 1, host);
        printf("Numero %d in formato network: 0x%04X\n", i + 1, network);
    }

    return 0;
}




