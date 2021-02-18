<template>
    <table id="opcode-table" class="table table-bordered table-light text-center">
        <thead class="thead-dark">
        <tr>
            <th>Opcode Hex</th>
            <th>Minêmico</th>
            <th>Descrição</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>0x00</td>
            <td>hlt</td>
            <td>HALT – faz o processador terminar o ciclo de instrução. Deve-se colocar no fim
                do programa.</td>
        </tr>
        <tr>
            <td>0x01</td>
            <td>ld</td>
            <td>LOAD – carrega para o registrador X uma palavra da memória no endereço Y.
            </td>
        </tr>
        <tr>
            <td>0x02</td>
            <td>st</td>
            <td>STORE – armazena no endereço de memória Y o conteúdo do registrador X.</td>
        </tr>
        <tr>
            <td>0x03</td>
            <td>add</td>
            <td>regX = regY + regZ</td>
        </tr>
        <tr>
            <td>0x04</td>
            <td>sub</td>
            <td>regX = regY - regZ</td>
        </tr>
        <tr>
            <td>0x05</td>
            <td>mul</td>
            <td>regX = regY * regZ</td>
        </tr>
        <tr>
            <td>0x06</td>
            <td>div</td>
            <td>regX = regY / regZ</td>
        </tr>
        <tr>
            <td>0x07</td>
            <td>lsh regX, imm</td>
            <td>LEFT SHIFT – desloca a palavra no registrador X em imm bits à esquerda.</td>
        </tr>
        <tr>
            <td>0x08</td>
            <td>rsh regX, imm</td>
            <td>RIGHT SHIFT – desloca a palavra no registrador X em imm bits à direita.</td>
        </tr>
        <tr>
            <td>0x09</td>
            <td>cmp regX, regY</td>
            <td>COMPARE – compara a palavra no registrador X com a palavra no registrador Y
                e preenche os registradores internos E, L e G
                <div>
                    <ul>
                        <li>Se reg0 = reg1, então 𝐸 = 1; senão 𝐸 = 0;</li>
                        <li>Se reg0 < reg1, então 𝐿 = 1; senão 𝐿 = 0;</li>
                        <li>Se reg0 > reg1, então 𝐺 = 1; senão 𝐺 = 0.</li>
                    </ul>
                </div>
            </td>
        </tr>
        <tr>
            <td>0x0A</td>
            <td>je M[X]</td>
            <td>JUMP IF EQUAL TO – muda o registrador PC para o endereço de memória X
                caso E = 1
            </td>
        </tr>
        <tr>
            <td>0x0B</td>
            <td>jne M[X]</td>
            <td>JUMP IF NOT EQUAL TO – muda o registrador PC para o endereço de memória
                X caso E = 0.</td>
        </tr>
        <tr>
            <td>0x0C</td>
            <td>jl M[X] </td>
            <td>JUMP IF LOWER THAN – muda o registrador PC para o endereço de memória
                X caso L = 1.</td>
        </tr>
        <tr>
            <td>0x0D</td>
            <td> jle M[X]</td>
            <td>JUMP IF LOWER THAN OR EQUAL TO – muda o registrador PC para o endereço de memória X caso E = 1 ou 𝐿 = 1</td>
        </tr>
        <tr>
            <td>0x0E</td>
            <td>jg M[X]</td>
            <td>JUMP IF GREATER THAN – muda o registrador PC para o endereço de memória
                X caso G = 1.</td>
        </tr>
        <tr>
            <td>0x0F</td>
            <td>jge M[X]</td>
            <td>JUMP IF GREATER THAN OR EQUAL TO – muda o registrador PC para o endereço de memória X caso E = 1 ou 𝐺 = 1.</td>
        </tr>
        <tr>
            <td>0x10</td>
            <td>jmp M[X] </td>
            <td>JUMP – muda o registrador PC para o endereço de memória X.</td>
        </tr>
        <tr >
            <td>0x11</td>
            <td>movih regX, imm</td>
            <td>Move os 16 bits menos significativos (0:15) do imediato para a parte superior (16:31) do registrador X.</td>
        </tr>
        <tr>
            <td>0x12</td>
            <td>movil regX, imm</td>
            <td>Move os 16 bits menos significativos (0:15) do imediato para a parte inferior (0:15) do registrador X. Além disso a parte superior (16:31) do registrador X é zerada.</td>
        </tr>
        <tr>
            <td>0x13</td>
            <td>addi regX, imm</td>
            <td>regX = regX + imm</td>
        </tr>
        <tr>
            <td>0x14</td>
            <td>subi regX, imm</td>
            <td>regX = regX − imm</td>
        </tr>
        <tr>
            <td>0x15</td>
            <td>muli regX, imm</td>
            <td>regX = regX × imm</td>
        </tr>
        <tr>
            <td>0x16</td>
            <td>divi regX, imm</td>
            <td>regX = regX ÷ imm</td>
        </tr>
        <tr>
            <td>0x17</td>
            <td> movrr regX, regY</td>
            <td>regX = regY</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "OpcodeTable"
    }
</script>

<style scoped>
    #opcode-table tbody tr td:nth-child(3),#opcode-table tr th:nth-child(3){
        text-align: left;
    }
</style>