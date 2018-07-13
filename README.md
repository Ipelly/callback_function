# Callback Function : 

One of most powerful feature of JS

A deep dive into callback with code snippet 

Definition: 

•	Callback is a function that is to be executed after another function has already been executed.

•	In JavaScript, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions. Functions that do this are called higher-order functions. Any function that is passed as an argument and subsequently called by the function that receives it, is called a callback function.

• Every Callback function allows to create an extra program execution thread (hypothetical) parallel with main program thread. 


For example: 

If a code snippets has 10 lines of code. Line 1-5 has no callback function, but line 6-8 has a callback, line 9-10 again without callback function.

In above scenario -

Program execution (thread 1) starts from line 1 - and eventually moves toward line 5 synchronously, as soon as callback function is called, another execution thread (thread 2) is began. However, execution of thread 1 will not effect of thread 2. Thread one moves to line 9 and finish the execution irrespective of the completion of thread2.

So the moral of the story is, two execution threads run parallely. They are asynchronous with each other's execution but within itself, they are totally synchronous.  



Use Case: 
A bank customer would like to withdrawal some money from the ATM with money receipt.

If you analysis this use case – there are two tasks.

        •	Once customer puts the instructions in ATM Machine to withdrawal the money, ATM machine starts counting the note. Its little time consuming.
        
        •	Meanwhile ATM machine will be able to print the receipts. 

So, there are two execution process blocks.

        o	Get the number of the amount as input and checks availability. If yes, create one different execution block to count the notes which is totally independent. And then keep continue to print the receipts. 
        
        o	Pull the notes from the chamber and starts counting them in order to put them onto output chamber. This is totally different and independent execution process block then above one. 






