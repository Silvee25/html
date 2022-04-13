var age=34;
console.log(" age: "+age);
{
    var age=56;
}
console.log(" age after block: "+age);

let mark1=78;
console.log(" marks: "+mark1);
{
   let mark1=22;
   console.log(" marks inside block of let: "+mark1); 
}
console.log(" mark after block: "+mark1);

const mark2=99;
console.log(" mark2: "+mark2);

mark2=89;
console.log(" mark2: "+mark2);