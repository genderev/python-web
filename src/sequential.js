const Parser = require('tree-sitter'),  Python = require('tree-sitter-python'), parser = new Parser(), {isInt, isFloat} = require ('./int.js')


parser.setLanguage(Python);
let sourceCode = `
print(1+1)
`, tree = parser.parse(sourceCode), head = {}, topLevel;

const expandNode = (node) => {
  let children = node.namedChildren, key = node.type, help = node.toString(), value = node.text;
  if (key=='module'){
    topLevel = help;
  } else if (!head[key]){
    head[key] = [value];
  } else {
    head[key].push(value);
  }
  for (i in children){
    expandNode(children[i])
  }
}

expandNode(tree.rootNode)

let s = topLevel.replace(/[":"]/g,"")
let v = s.replace(/[")"]/g," )")
let r = v.replace(/["("]/g,"( ")
let array = r.split(" ")

let syms = [];

let simplify = (array, head) => {
let ops = [];

let keys = Object.keys(head);
for (i in array){
  let keyword = array[i];
  if (keys.includes(keyword)){
    let content = head[keyword][0];
    ops.push(content)
    let obj = {};
    obj[keyword] = content
    syms.push(obj);
    head[keyword].shift()
  }

}
return ops.reverse()
}

let op = simplify(array, head)
console.log(op)
