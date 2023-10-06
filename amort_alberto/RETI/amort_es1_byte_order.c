#include <arpa/inet.h>
#include <stdio.h>


int main()
{

    int n[]={19875, 5499, 59821, 43120, 26489};

    int host;


    for(int i=0; i<5; i++)
    {
        printf("%d : \n", n[i]);
        host=htonl(n[i]);
        printf("esadecimale: 0x00%x \n", host);

    }
  

    return 0;
}