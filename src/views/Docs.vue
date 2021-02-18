<template>
    <div class="docs text-left">
        <div class="row">
            <div class="col">
                <div class="topic">
                    <h2>Uso</h2>
                    <p>
                        Cada linha de instrução deve iniciar com opcode, seguido de seus operandos. Pode-se utilizar separadores como <strong>, - / \</strong> ou não utilizar nenhum.
                        <br>
                        É possivel escrever cada instrução direto na memória, mas lembre-se, a CPU começa a executar as instruções a partir da posição de memória 0x00.
                        <br>
                        Para informar uma posição de memória pode-se utilizar o prefixo <strong>"m"</strong> ou não utilizar nenhum. Cada posição de memória é representado em hexadecimal.
                        <br>
                        Exemplo: busca o conteudo da memória 0x05 e armazena no registrador R3
                        <br>
                        <code class="h4" style="">ld r3, m05</code>
                        <br>
                        <code class="h4" style="">ld r3- m5</code>
                        <br>
                        <code class="h4" style="">ld r3/ 5</code>
                        <br>
                        <code class="h4" style="">ld r3 05</code>
                        <br>
                        <code class="h4" style="">ld r3 m05</code>
                    </p>
                </div>
                <div class="topic">
                    <h2>Objetivo</h2>
                    <div class="row">
                        <div class="col">
                            <p>O objetivo deste trabalho é compreender como o ciclo de instrução da Máquina de von
                                Neumann. Implementando um “simulador” de uma CPU com o conjunto de instruções (ISA –
                                Instruction Set Architecture), o conjunto de registradores arquiteturais e o formato de
                                instrução. Esse simulador deve mostrar o conteúdo dos registradores no fim de cada
                                ciclo, quando haverá uma pausa até apertar uma tecla para iniciar o próximo ciclo.</p>
                        </div>
                        <div class="col-2"></div>
                    </div>
                </div>
                <div class="topic">
                    <h2>Caracteristicas</h2>
                    <p>
                        Cada posição de mémoria tem comprimento 32bits, os dados também possuem largura de 32 bits. A
                        CPU apenas processa numeros inteiros. Não há nenhuma operação com ponto-flutuante e, embora o
                        formato de instrução permita endereçar até 2 25 = 33.554.432 palavras de 32 bits na memória,
                        considere uma memória com apenas 100 posições, de 0 (0x000000) a 99 (0x000063). Não é
                        implementado nenhuma representação de aritmética sinalizada.</p>
                </div>
                <div class="topic">
                    <h2>Função dos Registradores</h2>
                    <ul>
                        <li>
                            <p><strong>MBR</strong> – Memory Buffer Register – contém a palavra a ser armazenada na
                                memória. Também é o registrador usado para receber uma palavra lida da memória. Todo o
                                tráfego de e para a memória RAM deve passar pelo MBR;</p>
                        </li>
                        <li>
                            <p><strong>MAR</strong> – Memory Address Register – especifica o endereço de memória a ser
                                lida da ou escrita na memória. Todo
                                endereço de memória deve ser indicado nesse registrador antes da operação;</p>
                        </li>
                        <li>
                            <p><strong>IR</strong> – Instruction Register – contém o opcode da instrução sendo
                                executada;</p>
                        </li>
                        <li>
                            <p><strong>RO0</strong> – Register Operand 0 – contém o primeiro operando registrador da
                                instrução;</p>
                        </li>
                        <li>
                            <p><strong>RO1</strong> – Register Operand 1 – contém o segundo operando registrador da
                                instrução;</p>
                        </li>
                        <li>
                            <p><strong>RO2</strong> – Register Operand 2 – contém o terceiro operando registrador da
                                instrução;</p>
                        </li>
                        <li>
                            <p><strong>IMM</strong> – Immediate – contém o operando imediato da instrução;</p>
                        </li>
                        <li>
                            <p><strong>PC</strong> – Program Counter – contém o endereço da próxima palavra de memória
                                com uma instrução a ser buscada.
                                Caso não haja nenhum desvio condicional (conditional jumps), o PC deve ser incrementado
                                em cada ciclo de instrução;</p>
                        </li>
                        <li>
                            <p><strong>R0...R3</strong> – registradores de propósito geral utilizados para manter
                                temporariamente os operandos na ALU;</p>
                        </li>
                    </ul>

                </div>
                <div class="topic">
                    <h2>Formato das Instruções</h2>
                    <memspace></memspace>
                </div>
                <div class="topic">
                    <h2>Bits Registradores</h2>
                    <regtable></regtable>
                </div>
                <div class="topic  ">
                    <h2>Bits Opcodes</h2>
                    <opcodetable></opcodetable>
                </div>
            </div>
            <div class="col-3">
                <div class="topic">
                    <h3>Diagrama da CPU</h3>
                    <img src="@/assets/cpu.png" alt=""></div>
            </div>

        </div>

    </div>
</template>

<script>
    import memspace from '@/components/docs/memorySpace'
    import opcodetable from '@/components/docs/OpcodeTable'
    import regtable from '@/components/docs/RegisterTable'
    export default{
        name: 'Docs',
        data: () => ({

        }),
        components: {
            opcodetable,
            regtable,
            memspace
        }
    }
</script>

<style scoped>

</style>