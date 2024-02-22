#include <stdio.h>
#include <arpa/inet.h>
int main()
{
    long int numbers[] = {1000, 12890, 54163, 34012, 62984};
    int contatore = sizeof(numbers) / sizeof(numbers[0]);

    for (int i = 0; i < contatore; i++)
    {
        printf("%04X\n", htons(numbers[i]));
    }
}
