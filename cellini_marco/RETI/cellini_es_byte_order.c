#include <stdio.h>
#include <arpa/inet.h>

int main() {
    unsigned long numbers[5] = {1000, 12890, 54163, 34012, 62984};
    
    for (int i = 0; i < sizeof(numbers) / sizeof(unsigned long); i++)
        printf("%X\n", htonl(numbers[i]));

    return 0;
}