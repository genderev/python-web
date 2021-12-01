## Codegen Structure

- produce parse tree
  - _tree-sitter-python_
- create object from parse tree containing:
  - name of function
  - input type
  - output type
  - locals (?)
  - value returned from function
    - can be defined as an operation that takes in the inputs and transforms them
- pass object into CodegenVisitor

__HARD PART:__
- export function that calls all internal functions?
