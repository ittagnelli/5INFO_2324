#include <stdio.h>
#include <arpa/inet.h>

int main()
{
    unsigned long num[5] = {1000, 12890, 54163, 34012, 62984};

    for (int i=0; i<5; i++)
    {
        unsigned long ordinati = htonl(num[i]);
        printf("%#022lx\n", ordinati);
    }

    return 0;
}