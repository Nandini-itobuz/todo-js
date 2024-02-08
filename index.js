const fs= require('fs');

let inputArr =JSON.parse(fs.readFileSync('./db.json').toString());
var input=process.argv.slice(2);
inputtask = input.slice(1).join(' ');


switch(input[0]){
    case '-help':
        console.log(`Press:\n1. To add task\n2.To display tasks\n3.To delete a task\n `)
        break;
    case '1':
        inputArr.push({task: inputtask, Date: new Date()});
        fs.writeFileSync('./db.json',JSON.stringify(inputArr));
        break;
    case '2':
        console.log(inputArr); 
        break;
    case '3':
        inputArr = inputArr.filter((ele) => (ele.task !== inputtask));
        fs.writeFileSync('./db.json',JSON.stringify(inputArr));
        break;
}



