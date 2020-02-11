//Command line arguments
  // input using terminal = node app <input>
console.log(process.argv);
console.log(process.argv[2]);

const command1 =process.argv[2];
if(command1 === 'add'){console.log("Adding note!");
}
else if(command1 === 'remove'){console.log("Removing note!");
}
