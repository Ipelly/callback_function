console.log("------------------------------------------------------Sync code block-----------------------------")
console.log("1 and 2 get printed sequentially as the code block executed")

function first(){
    console.log(1);
}

function second(){
  console.log(2);
}

first();
second();

console.log("------------------------------------------------------ASync code block-----------------------------")
console.log('1 and 3 gets printed as sequentially but there is function inside the setimeout as argument.\nThis is a callback function which ensures the async behavior of the code.\nMeans code execution keeps move on except callback function.\nThis callback function will be executed\nafter timeout function has finished executing.\n2 will be printed when callback function executes.')

function Afirst(){
    console.log(1);
    //Simulate a code delay
    setTimeout( function(){
            console.log(2);
        }, 1 
    );
}
function Asecond(){
  console.log(3);
}

Afirst();
Asecond();
//console.log('Last :');
