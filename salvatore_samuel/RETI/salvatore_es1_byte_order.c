#include <stdio.h>
#include <arpa/inet.h>
#define N 5

int main()
{
    int vett[N] = {19875, 5499, 59821, 43120, 26489};
    for(int i=0; i< N; i++)
    {
        printf("%X\n", ntohs(vett[i]));
    }
    
    return 0;
}