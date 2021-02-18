Array.prototype.contains = function (obj) {
    var i = this.length;
    while (i--) {
        if (this[i] == obj) {
            return true;
        }
    }
    return false;
}

class Memory {
    constructor() {
        this.instruction = null;
        this.hexInstruction = [];
        this.setInstruction();
    }

    setInstruction() {
        let holder = document.getElementById('mMapInstruction').value.toLowerCase().replace(new RegExp('([\,\.\/\\\-])', 'gi'), '').split('\n');
        this.instruction = holder;
        holder.forEach(item => {
            item = item.split(" ");
            this.hexInstruction.push(this.toWord(item[0], item.slice(1, )));
        });
        return this;
    }

    getCurrentInstruction(pos) {
        return this.hexInstruction[pos];
    }

    initrender() {
        document.getElementById("mMapInstruction").disabled = true;
        for (let i = 0; i < 100; i++) {
            if (i < this.hexInstruction.length) {
                document.getElementById(`m${i.toString(16).length < 2? "0"+i.toString(16) : i.toString(16)}`).value = this.hexInstruction[i].toString(16);
            }
            document.getElementById(`m${i.toString(16).length < 2? "0"+i.toString(16) : i.toString(16)}`).disabled = true;
        }
    }
    allocMem() {
        for (let i = 0;i < this.hexInstruction.length; i++) {
            document.getElementById(`m${i.toString(16).length < 2? "0"+i.toString(16) : i.toString(16)}`).value = this.hexInstruction[i].toString(16);
        }
    }

    endrender() {
        document.getElementById("mMapInstruction").disabled = false;
        for (let i = 0; i < 100; i++) {
            document.getElementById(`m${i.toString(16).length < 2? "0"+i.toString(16) : i.toString(16)}`).disabled = false;
        }
    }

    hex(op) {
        let holder = {
            "hlt": 0x00,
            "ld": 0x01,
            "st": 0x02,
            "add": 0x03,
            "sub": 0x04,
            "mul": 0x05,
            "div": 0x06,
            "lsh": 0x07,
            "rsh": 0x08,
            "cmp": 0x09,
            "je": 0x0a,
            "jne": 0x0b,
            "jl": 0x0c,
            "jle": 0x0d,
            "jg": 0x0e,
            "jge": 0x0f,
            "jmp": 0x10,
            "movih": 0x11,
            "movil": 0x12,
            "addi": 0x13,
            "subi": 0x14,
            "muli": 0x15,
            "divi": 0x16,
            "movrr": 0x17,
            "r0": 0x0,
            "r1": 0x1,
            "r2": 0x2,
            "r3": 0x3,
        }
        return holder[op];
    }

    toWord(opcode, oper) {
        let operandos = [];
        oper.map(item => {
            operandos.push(item.replace("m", ""));
        });
        let word = this.hex(opcode) << 0x1b >>> 0;
        if (opcode == "hlt") {
            return word >>> 0;
        } else if (["cmp", "movrr"].contains(opcode)) {
            word ^= this.hex(operandos[0]) << 0x19 >>> 0;
            word ^= this.hex(operandos[1]) << 0x17 >>> 0;
            return word >>> 0;
        } else if (["add", "sub", "mul", "div"].contains(opcode)) {
            word ^= this.hex(operandos[0]) << 0x19 >>> 0;
            word ^= this.hex(operandos[1]) << 0x17 >>> 0;
            word ^= this.hex(operandos[2]) << 0x15 >>> 0;
            return word >>> 0;
        }else if(["je", "jne", "jl", "jle", "jg", "jge", "jmp"].contains(opcode)){
            word ^= parseInt("0x" + operandos[0]);
            return word >>> 0;
        } else {
            word ^= this.hex(operandos[0]) << 0x19 >>> 0;
            word ^= parseInt("0x" + operandos[1]);
            return word >>> 0;
        }
    }
}

export {Memory};