#include <stdio.h>
#include <arpa/inet.h>

int main() {
    unsigned long numbers[] = {19875, 5499, 59821, 43120, 26489};
    
    for (int i = 0; i < sizeof(numbers) / sizeof(unsigned long); i++)
        printf("%X\n", ntohl(numbers[i]));

    return 0;
}