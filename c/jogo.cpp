#include <stdio.h>
#include <stdlib.h>

int jogador;
int i;
int computador;
int aleatorio;
int index;
int n1;

int main() {
	random(10);
	for (i = 0; 1 < 2; i++) {
		printf("digite um numero de 0 a 10 \n");
		scanf("%d", jogador);
		if (jogador == computador) {
			printf("\nganhou em %d tentativas\n", i);
			system("pause");
			return 0;
		}
		if (jogador < computador){
			printf("\nmais\n");
		}
		if (jogador > computador) {
			printf("\nmenos\n");
		}
	}
}

int random(n1) {
	aleatorio = rand() % 20;
	for (index = 1; index < aleatorio; index++) {
		computador = rand() & n1;
	}
	return computador;
}

