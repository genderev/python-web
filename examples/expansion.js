const Parser = require('tree-sitter');
const Python = require('tree-sitter-python');
const parser = new Parser();
parser.setLanguage(Python);


const sourceCode = `1+1` ;
const tree = parser.parse(sourceCode);
let root = tree.rootNode
let expandChildren = (node) => {
  let branches = node.childCount;
  for (let i = 0; i < branches; i++){
    expandChildren(node.children[i])
    console.info(node.children[i])

    console.log(node.children[i].text)

    console.info("\n" + node.children[i].toString())

  }
}

let expandedTree = (root) => {
  let branches = root.namedChildren;
  branches.forEach((item, i) => {
    expandChildren(item)
  });
}

expandedTree(root)


let parseArguments = (node) => {
  // start from root node // node.startPosition = row {row: 0, column: 0}
  // if node.childCount !== 0

  // if node.childCount == 0

}

// from the s-expression, we need to find out what on the left is operating on the nodes on the right
