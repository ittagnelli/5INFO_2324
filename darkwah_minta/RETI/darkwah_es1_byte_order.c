#include <stdio.h>
#include <arpa/inet.h>
int main ()
{
    int vet [5] = {1000, 12890, 54163, 34012, 62984};
    int ris = 0;

    for (int i = 0; i < 5; i++)
    {
        ris = htons (vet[i]);
        printf("%x\n", ris);
    }
}