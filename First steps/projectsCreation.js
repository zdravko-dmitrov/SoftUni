function projectCreation(input)
{
let name = input[0];
let projects = Number(input[1]);
let allProjectsHours = projects * 3;

console.log(`The architect ${name} will need ${allProjectsHours} hours to complete ${projects} project/s.`);


}

projectCreation(["Zdravko","4"]);