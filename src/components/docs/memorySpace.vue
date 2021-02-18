<template>
    <div id="memorycell">
        <div>
            <h5>hlt</h5>
            <div class="spacemem row text-center" id="hlt" >
                <div class="col-2 space"><span>opcode</span></div>
                <div class="col space"><span></span></div>
            </div>
            <div class="row text-center" >
                <div class="col-2 space"><span>0..5</span></div>
                <div class="col space"><span>5..31</span></div>
            </div>
        </div>
        <br>
        <div>
            <h5>ld, st, lsh, rsh, je, jne, jl, jle, jg, jge, jmp, movih, movil, addi, subi, muli e divi </h5>
            <div class="row text-center spacemem" id="orm">
                <div class="col-2 space"><span>opcode</span></div>
                <div class="col-1 space"><span>r0</span></div>
                <div class="col space"><span>endereço de memoria / imediato </span></div>
            </div>
            <div class="row text-center" >
                <div class="col-2 space"><span>0..5</span></div>
                <div class="col-1 space"><span>5..7</span></div>
                <div class="col space"><span>7..31</span></div>
            </div>
        </div>
        <br>
        <div>
            <h5>cmp, movrr</h5>
            <div class="row text-center spacemem" id="orr">
                <div class="col-2 space"><span>opcode</span></div>
                <div class="col-1 space"><span>r0</span></div>
                <div class="col-1 space"><span>r1</span></div>
                <div class="col space"><span></span></div>
            </div>
            <div class="row text-center" >
                <div class="col-2 space"><span>0..5</span></div>
                <div class="col-1 space"><span>5..7</span></div>
                <div class="col-1 space"><span>7..9</span></div>
                <div class="col space"><span>9..31</span></div>
            </div>

        </div>
        <br>
        <div>
            <h5>add, sub, mul, div</h5>
            <div class="row text-center spacemem" id="orrr">
                <div class="col-2 space"><span>opcode</span></div>
                <div class="col-1 space"><span>r0</span></div>
                <div class="col-1 space"><span>r1</span></div>
                <div class="col-1 space"><span>r2</span></div>
                <div class="col space"><span></span></div>
            </div>
            <div class="row text-center" >
                <div class="col-2 space"><span>0..5</span></div>
                <div class="col-1 space"><span>5..7</span></div>
                <div class="col-1 space"><span>7..9</span></div>
                <div class="col-1 space"><span>9..11</span></div>
                <div class="col space"><span>11..31</span></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['space'],
        name: "memorySpace",
        data: () => ({
        }),
        methods: {
        },
        mounted() {
        }
    }
</script>

<style>
    #memorycell{
        margin-left: 10px;
    }
    .spacemem{
        margin-right: 20px;
        border: 2px solid white;
        box-shadow: 0 0 5rem rgba(0, 0, 0, .5); ;
    }
    .spacemem .space{
        border-right: 2px solid white;
    }
    .space:nth-child(1){
        border-left: none;
    }
    .space:nth-child(3){
        border-left: none;
    }
</style>