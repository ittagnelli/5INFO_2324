#include <stdio.h>
#include <arpa/inet.h>


int main()
{
    long int n[]={1000,12890,54163,34012,62984};
    int i;
    
    for (i=0;i<5;i++){
    printf("%04X\n", htonl(n[i]));
    }   
}
