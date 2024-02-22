#include <stdio.h>
#include <arpa/inet.h>

int main() {
    // Array contenente i numeri su 16 bit da convertire
    uint16_t numeri[] = {1000, 12890, 54163, 34012, 62984};
    int num_numeri = sizeof(numeri) / sizeof(numeri[0]);

    printf("Numeri originali:\n");
    for (int i = 0; i < num_numeri; i++) {
        printf("%d: %d\n", i + 1, numeri[i]);
    }

    printf("\n Numeri convertiti in network byte order:\n");
    for (int i = 0; i < num_numeri; i++) {
        uint16_t numero_network = htons(numeri[i]);
        printf("%d: %d\n", i + 1, numero_network);
    }

    return 0;
}