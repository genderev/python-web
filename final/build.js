class createBinaryen {
  constructor(ops){
    this.obj = {};
    this.obj.inputVals = []
    this.ops = ops;
  }
  createInputs(){
  for (let i in this.ops){
    if (parseFloat(this.ops[i])){
      console.log(this.ops[i])
      this.obj.input = "f32"
      this.obj.inputVals.push(parseFloat(this.ops[i]))
    }
  }
}
  findOps(){
    for (let i in this.ops){
    if (this.ops[i].includes('+')){
    this.obj.operation = "add";
  } else if (this.ops[i].includes('print')) {
    console.log("hello?")
    }
  }
}
  results() {
    this.createInputs()
    this.findOps()
    return this.obj
  }

}



export default createBinaryen;
