#include <stdio.h>
#include <arpa/inet.h>

int main(){
    // 1000, 12890, 54163, 34012, 62984
    // 19875, 5499, 59821, 43120, 26489

    printf("Conversione da host a network: \n");
    int num[] = {1000, 12890, 54163, 34012, 62984};
    for (int i = 0; i < num[i]; i++){
        int host = htonl(num[i]);
        printf("%x\n", host);
    }

    printf("\n");

    printf("Conversione da network a host: \n");
    int num2[] = {19875, 5499, 59821, 43120, 26489};
    for (int j = 0; j < num2[j]; j++){
        int host2 = htons(num2[j]);
        printf("%x\n", host2);
    }
    
    return 0;
}