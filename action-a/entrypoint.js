// Adapted from https://stackoverflow.com/a/10181488/1172663
var spawn = require("child_process").spawn,child;
child = spawn("cmd.exe",["-c", "echo Hello world my name is $MY_NAME"]);
child.stdout.on("data",function(data){
    console.log("StdOut: " + data);
});
child.stderr.on("data",function(data){
    console.log("StdErr: " + data);
});
child.on("exit",function(){
    console.log("Script finished");
});
child.stdin.end(); //end input
