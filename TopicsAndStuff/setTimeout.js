console.log("Starting");

setTimeout(()=>{ 
    console.log("3");    //Output 1
    
},3000)

setTimeout(()=>{console.log("0");   //Output 2
},0)

console.log("Ending");

/*
Outputs=

Output1 =E:\html_css_js\New folder (2)\nodejs\weatherApp>node app.js
Starting
Ending 
3

Output2 =E:\html_css_js\New folder (2)\nodejs\weatherApp>node app.js
Starting
Ending
0
3
*/
