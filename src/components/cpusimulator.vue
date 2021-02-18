<template>
  <div>
    <div class="section">
      <div class="row">
        <div class="col-6">
          <div class="row">
            <div class="col">
              <div>
                <ul class="list-group fn-table">
                  <li
                    @click="lineCode()"
                    class="list-group-item line-code text-dark"
                    data-value="hlt"
                  >
                    hlt
                  </li>
                  <li
                    @click="lineCode()"
                    class="list-group-item line-code text-dark"
                    data-value="ld rX mY"
                  >
                    ld rX mY
                  </li>
                  <li
                    @click="lineCode()"
                    class="list-group-item line-code text-dark"
                    data-value="cmp rX, rY"
                  >
                    cmp rX, rY
                  </li>
                  <li
                    @click="lineCode()"
                    class="list-group-item line-code text-dark"
                    data-value="st rX, mY"
                  >
                    st rX, mY
                  </li>
                  <li
                    @click="lineCode()"
                    class="list-group-item line-code text-dark"
                    data-value="add rX, rY, rZ"
                  >
                    add rX, rY, rZ
                  </li>
                  <li
                    @click="lineCode()"
                    class="list-group-item line-code text-dark"
                    data-value="sub rX, rY, rZ"
                  >
                    sub rX, rY, rZ
                  </li>
                  <li
                    @click="lineCode()"
                    class="list-group-item line-code text-dark"
                    data-value="mul rX, rY, rZ"
                  >
                    mul rX, rY, rZ
                  </li>
                  <li
                    @click="lineCode()"
                    class="list-group-item line-code text-dark"
                    data-value="div rX, rY, rZ"
                  >
                    div rX, rY, rZ
                  </li>
                  <li
                    @click="lineCode()"
                    class="list-group-item line-code text-dark"
                    data-value="lsh rX, imm "
                  >
                    lsh rX, imm
                  </li>
                  <li
                    @click="lineCode()"
                    class="list-group-item line-code text-dark"
                    data-value="rsh rX, imm"
                  >
                    rsh rX, imm
                  </li>
                  <li
                    @click="lineCode()"
                    class="list-group-item line-code text-dark"
                    data-value="je mX"
                  >
                    je mX
                  </li>
                  <li
                    @click="lineCode()"
                    class="list-group-item line-code text-dark"
                    data-value="jne mX"
                  >
                    jne mX
                  </li>
                  <li
                    @click="lineCode()"
                    class="list-group-item line-code text-dark"
                    data-value="jl mX"
                  >
                    jl mX
                  </li>
                  <li
                    @click="lineCode()"
                    class="list-group-item line-code text-dark"
                    data-value="jle mX"
                  >
                    jle mX
                  </li>
                  <li
                    @click="lineCode()"
                    class="list-group-item line-code text-dark"
                    data-value="jg mX"
                  >
                    jg mX
                  </li>
                  <li
                    @click="lineCode()"
                    class="list-group-item line-code text-dark"
                    data-value="jge mX"
                  >
                    jge mX
                  </li>
                  <li
                    @click="lineCode()"
                    class="list-group-item line-code text-dark"
                    data-value="jmp mX"
                  >
                    jmp mX
                  </li>
                  <li
                    @click="lineCode()"
                    class="list-group-item line-code text-dark"
                    data-value="movih rX, imm"
                  >
                    movih rX, imm
                  </li>
                  <li
                    @click="lineCode()"
                    class="list-group-item line-code text-dark"
                    data-value="movil rX, imm"
                  >
                    movil rX, imm
                  </li>
                  <li
                    @click="lineCode()"
                    class="list-group-item line-code text-dark"
                    data-value="addi rX, imm"
                  >
                    addi rX, imm
                  </li>
                  <li
                    @click="lineCode()"
                    class="list-group-item line-code text-dark"
                    data-value="subi rX, imm"
                  >
                    subi rX, imm
                  </li>
                  <li
                    @click="lineCode()"
                    class="list-group-item line-code text-dark"
                    data-value="muli rX, imm"
                  >
                    muli rX, imm
                  </li>
                  <li
                    @click="lineCode()"
                    class="list-group-item line-code text-dark"
                    data-value="divi rX, imm"
                  >
                    divi rX, imm
                  </li>
                  <li
                    @click="lineCode()"
                    class="list-group-item line-code text-dark"
                    data-value="movrr rX, rY"
                  >
                    movrr rX, rY
                  </li>
                </ul>
              </div>
              <br />
              <div>
                <ul class="list-group eg-table">
                  <li
                    v-for="(topic, label, index) in exampleCodes"
                    :key="index"
                    @click="exampleCode()"
                    class="list-group-item example-code text-dark"
                    :data-value="topic"
                  >
                    {{ label }}
                  </li>
                </ul>
              </div>
            </div>
            <div v-if="toogle" class="col">
              <form action>
                <div class="form-group">
                  <p @click="toogle = !toogle" class="cur-pointer">
                    <i class="fas fa-edit"></i> DESCRIÇÃO
                  </p>
                  <hr />
                  <textarea
                    id="mMapDescription"
                    style="margin-bottom: 10px"
                    cols="5"
                    rows="10"
                    class="form-control"
                    placeholder="Descrição"
                    v-model="description"
                    disabled
                  ></textarea>
                </div>
              </form>
            </div>
            <div v-else class="col">
              <form action>
                <div class="form-group">
                  <p @click="toogle = !toogle" class="cur-pointer">
                    <i class="fas fa-edit"></i> INSTRUÇÕES
                  </p>
                  <hr />
                  <textarea
                    id="mMapInstruction"
                    style="margin-bottom: 10px"
                    cols="5"
                    rows="10"
                    class="form-control"
                    placeholder="Mapa de instrução"
                    v-model="minemonico"
                  ></textarea>
                  <div>
                    <button @click="initProg()" class="btn btn-secondary">
                      START
                    </button>
                    <button @click="stopProg()" class="btn btn-danger">
                      STOP
                    </button>
                    <button @click="allocMem()" class="btn btn-danger">
                      ALLOC
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <div class="col">
              <p class><i class="fas fa-microchip"></i> REGISTRADORES</p>
              <hr />
              <div class="row">
                <div class="col">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="labelmbr">MBR</span>
                    </div>
                    <input
                      type="text"
                      id="rMbr"
                      class="text-center form-control"
                      placeholder="0x0"
                      disabled
                      aria-label="0000 0000"
                      aria-describedby="labelmbr"
                    />
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="labelir">IR</span>
                    </div>
                    <input
                      type="text"
                      id="rIr"
                      class="text-center form-control"
                      placeholder="0x0"
                      disabled
                      aria-label="0000 0000"
                      aria-describedby="labelir"
                    />
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="labelimm">IMM</span>
                    </div>
                    <input
                      type="text"
                      id="rImm"
                      class="text-center form-control"
                      placeholder="0x0"
                      disabled
                      aria-label="0000 0000"
                      aria-describedby="labelimm"
                    />
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="labelro1">RO1</span>
                    </div>
                    <input
                      type="text"
                      id="rRo1"
                      class="text-center form-control"
                      placeholder="0x0"
                      disabled
                      aria-label="0000 0000"
                      aria-describedby="labelro1"
                    />
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="labelr0">R0</span>
                    </div>
                    <input
                      type="text"
                      id="rR0"
                      class="text-center form-control"
                      placeholder="0x0"
                      disabled
                      aria-label="0000 0000"
                      aria-describedby="labelr0"
                    />
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="labelr2">R2</span>
                    </div>
                    <input
                      type="text"
                      id="rR2"
                      class="text-center form-control"
                      placeholder="0x0"
                      disabled
                      aria-label="0000 0000"
                      aria-describedby="labelr2"
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="labelmar">MAR</span>
                    </div>
                    <input
                      type="text"
                      id="rMar"
                      class="text-center form-control"
                      placeholder="0x0"
                      disabled
                      aria-label="0000 0000"
                      aria-describedby="labelmar"
                    />
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="labelpc">PC</span>
                    </div>
                    <input
                      type="text"
                      id="rPc"
                      class="text-center form-control"
                      placeholder="0x0"
                      disabled
                      aria-label="0000 0000"
                      aria-describedby="labelpc"
                    />
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="labelro0">RO0</span>
                    </div>
                    <input
                      type="text"
                      id="rRo0"
                      class="text-center form-control"
                      placeholder="0x0"
                      disabled
                      aria-label="0000 0000"
                      aria-describedby="labelro0"
                    />
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="labelro2">RO2</span>
                    </div>
                    <input
                      type="text"
                      id="rRo2"
                      class="text-center form-control"
                      placeholder="0x0"
                      disabled
                      aria-label="0000 0000"
                      aria-describedby="labelro2"
                    />
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="labelr1">R1</span>
                    </div>
                    <input
                      type="text"
                      id="rR1"
                      class="text-center form-control"
                      placeholder="0x0"
                      disabled
                      aria-label="0000 0000"
                      aria-describedby="labelr1"
                    />
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="labelr3">R3</span>
                    </div>
                    <input
                      type="text"
                      id="rR3"
                      class="text-center form-control"
                      placeholder="0x0"
                      disabled
                      aria-label="0000 0000"
                      aria-describedby="labelr3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-auto">
        <div class="col">
          <table class="oflow-y">
            <tbody id="mMapMemory"></tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CPU } from "@/components/cpujs/cpu.js";
import { Memory } from "@/components/cpujs/memory.js";

export default {
  name: "CpuSimulator",
  props: ["mine", "desc"],
  data() {
    return {
      exampleCodes: {},
      cp1: null,
      minemonico: "",
      toogle: false,
      description: "",
    };
  },
  methods: {
    initCPU() {
      this.cp1 = new CPU();
    },
    initProg() {
      if (this.cp1 == null) {
        this.initCPU();
      } else {
        this.cp1.runCode();
      }
    },
    stopProg() {
      if (this.cp1 != null) {
        this.cp1.stopCode();
        this.cp1 = null;
      } else {
        this.cp1 = null;
      }
    },
    allocMem() {
      new Memory().allocMem();
    },
    lineCode($event) {
      let holder = document.getElementById("mMapInstruction");
      console.log(this.minemonico);
      if (holder.disabled == false) {
        if (
          this.minemonico[this.minemonico.length - 1] == "\n" ||
          this.minemonico.length == 0
        ) {
          this.minemonico += event.target.getAttribute("data-value");
        } else {
          this.minemonico += "\n" + event.target.getAttribute("data-value");
        }
      }
    },
    exampleCode($event) {
      let holder = document.getElementById("mMapInstruction");
      if (holder.disabled == false) {
        this.minemonico = event.target.getAttribute("data-value");
      }
    },
    addRowsToMemory() {
      function toHex(val) {
        return val.toString(16).length < 2
          ? "0" + val.toString(16)
          : val.toString(16);
      }

      let row = "<tr>";
      for (let i = 0; i < 100; i++) {
        if (i % 5 != 0 || i == 0) {
          row += `<td>
                            <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="labelpc">${toHex(
                                                  i
                                                )}</span>
                                            </div>
                                            <input type="text" id="m${toHex(
                                              i
                                            )}" class="form-control" placeholder="0x0"
                                                    aria-label="0000 0000" aria-describedby="labelpc">
                                        </div></td>`;
        } else {
          row +=
            "</tr><tr> <td>" +
            '                        <div class="input-group mb-3">' +
            '                                        <div class="input-group-prepend">' +
            `                                            <span class="input-group-text" id="labelpc">${toHex(
              i
            )}</span>` +
            "                                        </div>" +
            `                                        <input type="text" id="m${toHex(
              i
            )}" class="form-control" placeholder="0x0"` +
            '                                                aria-label="0000 0000" aria-describedby="labelpc">' +
            "                                    </div></td>";
        }
      }
      row += "</tr>";
      $("#mMapMemory").append(row);
    },
  },
  mounted() {
    this.addRowsToMemory();
    if (this.mine != undefined && this.desc != undefined) {
      this.minemonico = this.mine;
      this.description = this.desc;
    }
  },
};
</script>
