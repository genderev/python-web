const Parser = require('tree-sitter');
const Python = require('tree-sitter-python');
const parser = new Parser();
parser.setLanguage(Python);


const sourceCode = `print("hello world")` ;
const tree = parser.parse(sourceCode);
let root = tree.rootNode
let expandChildren = (node) => {
  let branches = node.childCount;
  for (let i = 0; i < branches; i++){

    console.info(node.children[i])

    console.log("\n" + node.children[i].text)


    let s = node.children[i].toString()



    // query = parser.query(`
    //   (function_declaration name: (identifier) @fn-def)
    //   (call_expression function: (identifier) @fn-ref)
    // `);
    // const matches = query.matches(s);

// console.log(matches)

  }
}

let expandedTree = (root) => {
  let branches = root.namedChildren;

  branches.forEach((item, i) => {
    expandChildren(item)
  });
}

expandedTree(root)
