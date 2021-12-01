
# Progress

I have been looking at the CPython source in order to better understand how to push
opcodes and operands on and off the stack. It is actually very helpful.

There is a file called Python/ceval.c in the CPython source that I have been going through
and tracing line by line to replicate the given behavior in my own compiler.

I'm not sure how much I should complete by the end of the semester. ceval.c is a huge file.
Python code execution - the Python interpreter that I am studying - it has 7,190 lines of code.

I can try to move quickly as possible. I understand why Stella from IREE was moving so slowly.
I'll try to finish a simple 1+1 example by the end of today. I've been very focused on overall infrastructure of the compiler, but I want to show an example to see how far I've come and to make sure everything works Python data types such as dictionaries
and imports are the most difficult parts of Python to implement. I think I could finish writing out
dictionaries by the end of the semester, but I'm not sure about imports.

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
