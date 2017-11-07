var max = require('readline');

const rl = max.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a Number \n', (max) => {

    for (var i=0;i<=max;i++){
        var output = [];
        if (i%3 === 0){
            output.push("Fizz")
        }
        if (i%5 === 0){
            output.push("Buzz")
        }
        if (i%7 === 0){
            output.push("Bang")
        }
        if (i%13 === 0){ //look through the array items and if the letter b is the first character. If so then splice, otherwise just append
            if (output.length>0){
                for (var j=0;j<output.length;j++){
                    if (output[j][0] == "B"){
                        output.splice(j, 0, "Fezz");
                        break
                    }
                }
            }
            else {
                output.push("Fezz")
            }
        }
        if(i%17 === 0){
            output.reverse() //Reverse order of the array
        }
        if (i%11 === 0){
            output = ["Bong"] //Replace array with bong
        }
        if(output.length >0){ //Some formatted output so it isnt an ugly array
            var outputString = "";
            output.forEach(function(element){
                outputString += element;
            });
            console.log(outputString)
        }
        else{
            console.log(i)//If there are no items (ie, it doesnt fit any criteria), then just print the number
        }
    }

    rl.close();

});

