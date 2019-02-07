// start processing user input
process.stdin.resume();
process.stdin.setEncoding('ascii');
// declare global variables
var input_stdin = "";
var input_stdin_array = "";
// standard input is stored into input_stdin
process.stdin.on('data', function (data) {
    input_stdin += data;
});
// standard input is done and stored into an array
// then main is called so that you can start processing your data
process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});
// reads a line from the standard input array
// returns string

function solveMeFirst(a, b, c) {
  // Hint: Type return a+b+c below
  return (a + b + c);
}

function readLine(_line_number) {
    return input_stdin_array[_line_number];
}

function parseLine(_textArray){

    var stringArray = _textArray.split(" ");
    var intArray = [];
    var sum = 0;
    for(var i=0;i<stringArray.length;i++){
      sum = sum + parseInt(stringArray[i]);

    }

    return sum;
}

function main() {
    var a = parseLine(readLine(0));
    var b = parseLine(readLine(1));
    var c = parseLine(readLine(2));
    var res = solveMeFirst(a,b,c);
    console.log(res);
}
