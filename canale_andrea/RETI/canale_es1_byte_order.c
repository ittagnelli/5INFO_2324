#include <stdio.h>
#include <arpa/inet.h>

int main() {
	unsigned long numeri[5] = { 1000, 12890, 54163, 34012, 62984 };
	
	for (int i = 0; i < 5; i++) {
		unsigned long net_order = htonl(numeri[i]);
		printf("%#022lx\n", net_order);
	}
	return 0;
}
