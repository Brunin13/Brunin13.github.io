#include <stdio.h>
#include <stdlib.h>

int main() {
	char nome[30];
	system("color A0");
	printf("digite seu nome: ");
	gets(nome);
	system("pause");
	system("cls");
	printf("ola %s\n", nome);
	return 0;
}
