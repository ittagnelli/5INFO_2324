#include <stdio.h>
#include <arpa/inet.h>
int main()
{
  long int numbers[] = {19875, 5499, 59821, 43120, 26489};
  int contatore = sizeof(numbers) / sizeof(numbers[0]);

  for (int i = 0; i < contatore; i++)
  {
    printf("%X\n", ntohs(numbers[i]));
  }
}
