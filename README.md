# Callback Function : 

One of most powerful feature of JS

A deep dive into callback with code snippet 

Definition: 

•	Callback is a function that is to be executed after another function has already been executed.

•	Any function which is passed as argument.

•	Callback function enables async behaviour of whole code block with respect to callback function code block. However, callback function code block will excute synchonously. 

For example: 

If a code snippets has 10 lines of code. Line 1-5 has no callback function, but line 6-8 has a callback, line 9-10 again without callback function.

In above scenario -

Program execution (thread 1) starts from line 1 - and eventually moves toward line 5 synchronously, as soon as callback function is called, another execution thread (thread 2) is began. However, execution of thread 1 will not effect of thread 2. Thread one moves to line 9 and finish the execution irrespective of the completion of thread2.

So the moral of the story is, two execution thread run parallel. They are asynchronous with each other execution but within himself, they are totally synchronous.  



