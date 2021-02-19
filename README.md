# Trabalho de Arquitetura e Organização de Computadores 1

## Uso

Cada linha de instrução deve iniciar com opcode, seguido de seus operandos. Pode-se utilizar separadores como , - / \ ou não utilizar nenhum.

É possivel escrever cada instrução direto na memória, mas lembre-se, a CPU começa a executar as instruções a partir da posição de memória 0x00\. Para informar uma posição de memória pode-se utilizar o prefixo "m" ou não utilizar nenhum. Cada posição de memória é representado em hexadecimal.

Exemplo: busca o conteudo da memória 0x05 e armazena no registrador R3.

    ld r3, m05
    ld r3- m5
    ld r3/ 5
    ld r3 05
    ld r3 m05

## Objetivo

O objetivo deste trabalho é compreender como o ciclo de instrução da Máquina de von Neumann. Implementando um “simulador” de uma CPU com o conjunto de instruções (ISA – Instruction Set Architecture), o conjunto de registradores arquiteturais e o formato de instrução. Esse simulador deve mostrar o conteúdo dos registradores no fim de cada ciclo, quando haverá uma pausa até apertar uma tecla para iniciar o próximo ciclo.

## Caracteristicas

Cada posição de mémoria tem comprimento 32bits, os dados também possuem largura de 32 bits. A CPU apenas processa numeros inteiros. Não há nenhuma operação com ponto-flutuante e, embora o formato de instrução permita endereçar até 2 25 = 33.554.432 palavras de 32 bits na memória, considere uma memória com apenas 100 posições, de 0 (0x000000) a 99 (0x000063). Não é implementado nenhuma representação de aritmética sinalizada.

## Função dos Registradores

- MBR – Memory Buffer Register – contém a palavra a ser armazenada na memória. Também é o registrador usado para receber uma palavra lida da memória. Todo o tráfego de e para a memória RAM deve passar pelo MBR;

- MAR – Memory Address Register – especifica o endereço de memória a ser lida da ou escrita na memória. Todo endereço de memória deve ser indicado nesse registrador antes da operação;

- IR – Instruction Register – contém o opcode da instrução sendo executada;

- RO0 – Register Operand 0 – contém o primeiro operando registrador da instrução;

- RO1 – Register Operand 1 – contém o segundo operando registrador da instrução;

- RO2 – Register Operand 2 – contém o terceiro operando registrador da instrução;

- IMM – Immediate – contém o operando imediato da instrução;

- PC – Program Counter – contém o endereço da próxima palavra de memória com uma instrução a ser buscada. Caso não haja nenhum desvio condicional (conditional jumps), o PC deve ser incrementado em cada ciclo de instrução;

- R0…R3 – registradores de propósito geral utilizados para manter temporariamente os operandos na ALU;

## Hexadecimal Registradores

<table>

<thead>

<tr>

<th>Registrador</th>

<th>Hex</th>

</tr>

</thead>

<tbody>

<tr>

<td>R0</td>

<td>0x0</td>

</tr>

<tr>

<td>R1</td>

<td>0x1</td>

</tr>

<tr>

<td>R2</td>

<td>0x2</td>

</tr>

<tr>

<td>R3</td>

<td>0x3</td>

</tr>

</tbody>

</table>

<table>

<thead>

<tr>

<th>Opcode Hex</th>

<th>Mnemônico</th>

<th>Descrição</th>

</tr>

</thead>

<tbody>

<tr>

<td>0x00</td>

<td>hlt</td>

<td>HALT – faz o processador terminar o ciclo de instrução. Deve-se colocar no fim do programa.</td>

</tr>

<tr>

<td>0x01</td>

<td>ld</td>

<td>LOAD – carrega para o registrador X uma palavra da memória no endereço Y.</td>

</tr>

<tr>

<td>0x02</td>

<td>st</td>

<td>STORE – armazena no endereço de memória Y o conteúdo do registrador X.</td>

</tr>

<tr>

<td>0x03</td>

<td>add</td>

<td>ADD - Soma o valor de um registrador pelo outro.</td>

</tr>

<tr>

<td>0x04</td>

<td>sub</td>

<td>SUBTRACT - Subtrai o valor de um registrador pelo outro</td>

</tr>

<tr>

<td>0x05</td>

<td>mul</td>

<td>MULTIPLY - Multiplica o valor de um registrador pelo outro.</td>

</tr>

<tr>

<td>0x06</td>

<td>div</td>

<td>DIVIDE - Divide o valor de um registrar pelo outro.</td>

</tr>

<tr>

<td>0x07</td>

<td>lsh</td>

<td>LEFT SHIFT – desloca a palavra no registrador X em imm bits à esquerda.</td>

</tr>

<tr>

<td>0x08</td>

<td>rsh</td>

<td>RIGHT SHIFT – desloca a palavra no registrador X em imm bits à direita.</td>

</tr>

<tr>

<td>0x09</td>

<td>cmp</td>

<td>COMPARE – compara a palavra no registrador X com a palavra no registrador Y e preenche os registradores internos E, L e G

- Se reg0 = reg1, então **E** = 1; senão **E** = 0;
- Se reg0 < reg1, então **L** = 1; senão **L** = 0;
- Se reg0 > reg1, então **G** = 1; senão **G** = 0.

</td>

</tr>

<tr>

<td>0x0a</td>

<td>je</td>

<td>JUMP IF EQUAL – muda o registrador PC para o endereço de memória X caso E = 1</td>

</tr>

<tr>

<td>0x0b</td>

<td>jne</td>

<td>JUMP IF NOT EQUAL TO – muda o registrador PC para o endereço de memória X caso E = 0.</td>

</tr>

<tr>

<td>0x0c</td>

<td>jl</td>

<td>JUMP IF LOWER – muda o registrador PC para o endereço de memória X caso L = 1.</td>

</tr>

<tr>

<td>0x0d</td>

<td>jle</td>

<td>JUMP IF LOWER OR EQUAL – muda o registrador PC para o endereço de memória X caso E = 1 ou L = 1</td>

</tr>

<tr>

<td>0x0e</td>

<td>jg</td>

<td>JUMP IF GREATER – muda o registrador PC para o endereço de memória X caso G = 1.</td>

</tr>

<tr>

<td>0x0f</td>

<td>jge</td>

<td>JUMP IF GREATER OR EQUAL – muda o registrador PC para o endereço de memória X caso E = 1 ou G = 1.</td>

</tr>

<tr>

<td>0x10</td>

<td>jmp</td>

<td>JUMP – muda o registrador PC para o endereço de memória X.</td>

</tr>

<tr>

<td>0x11</td>

<td>movih</td>

<td>MOVE IMMEDIATE HIGHER - Move os 16 bits menos significativos (0:15) do imediato para a parte superior (16:31) do registrador X.</td>

</tr>

<tr>

<td>0x12</td>

<td>movil</td>

<td>MOVE IMMEDIATE LOWER - Move os 16 bits menos significativos (0:15) do imediato para a parte inferior (0:15) do registrador X.</td>

</tr>

<tr>

<td>0x13</td>

<td>addi</td>

<td>ADD IMMEDIATE - Soma o valor do registrador pelo valor do imediato</td>

</tr>

<tr>

<td>0x14</td>

<td>subi</td>

<td>SUBTRACT IMMEDIATE - Subtrai o valor do registrador pelo valor do imediato.</td>

</tr>

<tr>

<td>0x15</td>

<td>muli</td>

<td>MULTIPLY IMMEDIATE - Multiplica o valor do registrador pelo valor do imediato.</td>

</tr>

<tr>

<td>0x16</td>

<td>divi</td>

<td>DIVIDE IMMEDIATE - Divie o valor do registrador pelo valor do imediato.</td>

</tr>

<tr>

<td>0x17</td>

<td>movrr</td>

<td>MOVE REGISTERS - Move o valor de um registrar para outro.</td>

</tr>

</tbody>

</table>
