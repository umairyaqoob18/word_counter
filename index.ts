import inquirer from 'inquirer';
let myloop = true;
while(myloop){
const userinput = await inquirer.prompt([
    {
        type:'input',
        name:'para',
        message:"enter your paragrph to cout your word and letter"
    },
    {
        type:"list",
        name:'ask',
        message:'what you to do count in your paragraph',
        choices:["1.letter","2.word","3.both letter and word",]
    }
]);
let{para,ask}=userinput;

if(para.length ===0)emptyinput();
if(ask ==='1.letter' )letterfun();
if(ask ==="2.word")wordfun();
if(ask ==="3.both letter and word")bothfun();

function emptyinput(){
console.log('your input is empty please try again with a some input')
}
function letterfun(){
const letterwithoutspace = para.replace(/\s/g,"");
const lettercount = letterwithoutspace.length;
console.log(`total letter in your paragraph${lettercount}`)

}
function wordfun(){
const wordarry= para.split("");
const wordcount = wordarry.length;
console.log(`total word count in paragraph${wordcount}`);
}
function bothfun(){
letterfun();
wordfun();
}


}