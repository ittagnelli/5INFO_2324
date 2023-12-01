#include <arpa/inet.h>
#include <stdio.h>

#define ARRAY_SIZE(x) sizeof(x) / sizeof(unsigned int)

void main(){
	int list[] = { 1000 , 12890, 54163 , 34012 , 62984 };
	for(int i=0 ; i<ARRAY_SIZE(list) ; i++){
		list[i] = htonl(list[i]);
		printf("Numero: 0x00%x \n", list[i]);
	}
}
