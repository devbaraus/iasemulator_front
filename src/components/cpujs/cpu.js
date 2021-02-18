import {Memory} from "./memory";

String.prototype.toInt = function(){
    return parseInt(this);
};

String.prototype.parseHex = function(){
    return parseInt("0x"+this);
};

function regToHex(val){
    switch (val) {
        case "r0":
            return 0x00;
        case 'r1':
            return 0x01;
        case 'r2':
            return 0x02;
        case 'r3':
            return 0x03;
    }
}

class CPU{
    constructor(){
        this.mbr = 0;
        this.mar = 0;
        this.pc = 0;
        this.ir = 0;
        this.imm = 0;
        this.r0 = 0;
        this.r1 = 0;
        this.r2 = 0;
        this.r3 = 0;
        this.ro1 = 0;
        this.ro0 = 0;
        this.ro2 = 0;
        this.re = 0;
        this.rg = 0;
        this.rl = 0;
        this.mem = new Memory();
        this.mem.initrender();
    }
    runCode(){
        let code = this.mem.getCurrentInstruction(this.pc);
        this.ir = code >> 0x1b & 0x1f >>> 0;
        this["_"+this.ir.toString(16)](code);
        this.render();
    }
    stopCode(){
        this.reset();
        this.render();
        this.mem.endrender();
    }
    reset(){
        this.mbr = 0;
        this.mar = 0;
        this.pc = 0;
        this.ir = 0;
        this.imm = 0;
        this.r0 = 0;
        this.r1 = 0;
        this.r2 = 0;
        this.r3 = 0;
        this.ro1 = 0;
        this.ro0 = 0;
        this.ro2 = 0;
        this.re = 0;
        this.rg = 0;
        this.rl = 0;
    }
    //ld load
    _1(word){
        this.orm(word);
        this["r"+this.ro0] = ("0x"+document.getElementById(`m${this.mar.toString(16).length < 2? "0"+this.mar.toString(16) : this.mar.toString(16)}`).value).toInt();
        this.pc++;

    }
    //add
    _3(word){
        this.orrr(word);
        this["r"+this.ro0] = this["r"+this.ro1] + this["r"+this.ro2];
        this.pc++;
    }
    //sub
    _4( word){
        this.orrr(word);
        this["r"+this.ro0] = this["r"+this.ro1] - this["r"+this.ro2];
        this.pc++;
    }
    //div
    _6( word){
        this.orrr(word);
        this["r"+this.ro0] = this["r"+this.ro1] / this["r"+this.ro2];
        this.pc++;
    }
    //mul
    _5( word){
        this.orrr(word);
        this["r"+this.ro0] = this["r"+this.ro1] * this["r"+this.ro2];
        this.pc++;
    }
    //st
    _2( word){
        this.orm(word);
        document.getElementById(`m${this.mar.toString(16).length < 2? "0"+this.mar.toString(16) : this.mar.toString(16)}`).value = this["r"+this.ro0].toString(16);

        this.pc++;
    }
    //hlt
    _0(){
        
    }
    //lsh
    _7( word){
        this.ormi(word);
        this["r"+this.ro0] = this["r"+this.ro0] << this.imm;
        this.pc++
    }
    //rsh
    _8( word){
        this.ormi(word);
        this["r"+this.ro0] = this["r"+this.ro0] >> this.imm;
        this.pc++
    }
    //CMP
   _9( word){
       this.orr(word);
        this.re = 0;
        this.rl = 0;
        this.rg = 0;
        if(this["r"+this.ro0] < this["r"+this.ro1]){
            this.rl = 1;
        }
        if(this["r"+this.ro0] > this["r"+this.ro1]){
            this.rg = 1;
        }
        if(this["r"+this.ro0] == this["r"+this.ro1]){
            this.re = 1;
        }
        this.pc++;
    }
    //JE
    _a( word){
        this.om(word);
        if(this.re){
            this.pc = this.mar;
        }else{
            this.pc++;
        }
    }
    //JNE
    _b( word){
        this.om(word);
        if(!this.re){
            this.pc = this.mar;
        }else{
            this.pc++;
        }
    }
    //JL
    _c( word){
        this.om(word);
        if(this.rl){
            this.pc = this.mar;
        }else{
            this.pc++;
        }
    }
    //JLE
    _e( word){
        this.om(word);
        if(this.re && this.rl){
            this.pc = this.mar;
        }else{
            this.pc++;
        }
    }
    //JG
    jg( word){
        this.om(word);
        if(this.rg){
            this.pc = this.mar;
        }else{
            this.pc++;
        }
    }
    //JGE
    _f( word){
        this.om(word);
        if(this.rg && this.re){
            this.pc = this.mar;
        }else{
            this.pc++;
        }
    }
    //JMP
    _10( word){
        this.om(word);
        this.pc = this.mar;
    }
    //MOVIH
    _11( word){
        this.ormi(word);
        this["r"+this.ro0] &= this.imm & 0xffff << 16;
        this.pc++;
    }
    //MOVIL
    _12( word){
        this.ormi(word);
        this["r"+this.ro0] &= this.imm & 0xffff;
        this.pc++;
    }
    //ADDI
    _13( word){
        this.ormi(word);
        this["r"+this.ro0] += this.imm;
        this.pc++;
    }
    //SUBI
    _14( word){
        this.ormi(word);
        this["r"+this.ro0] -= this.imm;
        this.pc++;
    }
    //MULI
    _15( word){
        this.ormi(word);
        this["r"+this.ro0] *= this.imm;
        this.pc++;
    }
    //DIVI
    _16( word){
        this.ormi(word);
        this["r"+this.ro0] /= this.imm;
        this.pc++;
    }
    //MOVRR
    _17( word){
        this.ormi(word);
        this["r"+this.ro0] = this["r"+this.ro1];
        this.pc++;
    }
    render(){
        document.getElementById('rMbr').value = "0x"+(this.mbr).toString(16);
        document.getElementById('rIr').value = "0x"+(this.ir).toString(16);
        document.getElementById('rImm').value = "0x"+(this.imm).toString(16);
        document.getElementById('rRo1').value = "0x"+(this.ro1).toString(16);
        document.getElementById('rRo0').value = "0x"+(this.ro0).toString(16);
        document.getElementById('rRo2').value = "0x"+(this.ro2).toString(16);
        document.getElementById('rR0').value = "0x"+(this.r0).toString(16);
        document.getElementById('rR1').value = "0x"+(this.r1).toString(16);
        document.getElementById('rR2').value = "0x"+(this.r2).toString(16);
        document.getElementById('rR3').value = "0x"+(this.r3).toString(16);
        document.getElementById('rPc').value = "0x"+(this.pc).toString(16);
        document.getElementById('rMar').value = "0x"+(this.mar).toString(16);
    }
    //opcode memory
    om(word){
        this.mbr = word;
        this.mar = word & 0x1ffffff;
    }
    //opcode register memory
    orm(word){
        this.mbr = word;
        this.mar = word & 0x1ffffff;
        this.ro0 = word >> 0x19 & 0x3;
    }
    //opcode register immediate
    ormi(word){
        this.mbr = word;
        this.imm = word & 0x1ffffff;
        this.ro0 = word >> 0x19 & 0x3;
    }
    //opcode register register
    orr(word){
        this.mbr = word;
        this.ro0 = word >> 0x19 & 0x3;
        this.ro1 = word >> 0x17 & 0x3;
    }
    //opcode register register register
    orrr(word){
        this.mbr = word;
        this.ro0 = word >> 0x19 & 0x3;
        this.ro1 = word >> 0x17 & 0x3;
        this.ro2 = word >> 0x15 & 0x3;
    }
}

export {CPU};