// console.log("vanshita");
// console.log(true);
// console.log(false);
// console.log(undefined);
// console.log(null);


// console.log(typeof("vanshita"));
// console.log(typeof(true));
// console.log(typeof(false));
// console.log(typeof(undefined));
// console.log(typeof(null));
// console.log(typeof(2));
// console.log(typeof(2.14));

// console.log(typeof (typeof(10)));

// //Declaration
// var firstName;
// console.log(firstName);

// //Declaration and Initialization or assignment
// var secondName; //Declaration
// secondName = "vanshu"//initialization
// console.log(secondName);


// var thirdName; //Declaration
// thirdName = "vanshu"//initialization
// console.log(thirdName);
// thirdName = "31 aug 2002";//re-Initialization 
// console.log(thirdName);

// var greeter;
// greeter = "welcome"
// console.log(greeter); 
// greeter = "welcome back";
// console.log(greeter); 

// //const
// //initialization
// const a = 200;
// console.log(a); 


//it will give error because a is constant
// a = 300;
// console.log(a); 

//let keyword

// let e;//declaration
// e = 10;//initialization
// // console.log(e); 

// e = 20; //re-initialization
// console.log(e); 

// let e = 30; //re-declaration
// console.log(e);

// let $name = "vanshita";
// console.log($name);


// var x = null;
// console.log(typeof (typeof(null)));

// console.log(2+2)
// console.log(5*15)
// console.log(10%2)
// console.log(19-29)
// console.log('java' + 'script')
// console.log('js' / 4)
// console.log(3+10*2)
// console.log((3+10)*2)
// console.log('js/4')
// console.log(4/0)

// console.log(5 < 7);
// console.log(5 > 7);
// console.log(5 <= 7);
// console.log(5 >= 7);
// console.log(5 === 7);//strict equality
// console.log(5 !== 7);//strict
// console.log(5 == 7);//non-strict equality
// console.log(5 != 7);//non-strict

// let a = 10;
// let b = 20;

// console.log( a !== b && a > b);
// console.log( a !== b || a > b);

// let a = 95;

// if(a>=91  && a<=100) 
// {
//    console.log("A+");
// }
// else if (a>=81 && a<=90)
// {
//     console.log("A");
// }
// else if (a>=71 && a<=80)
// {
//     console.log("B");
// }
// else if (a>=61 && a<=70)
// {
//     console.log("B+");
// }
// else{
//     console.log("poor");
// }


// //positive negative or zero
// let b = -2;
// if(b>0)
// {
// console.log("positive number");

// }

// else if(b<0)
// {
//     console.log("negative number");
// }
// else if(b==0)
// {
//     console.log("zero");
// }




// //function

// // function percentage(sub1,sub2,sub3,sub4,sub5)
// // {
// //     const result=((sub1+sub2+sub3+sub4+sub5)/(500)*100);
// //     return result;
// // }

// // let vanshita = percentage(90,95,70,75,80);
// // console.log(vanshita);

// //non parameterized function
// function funName()
// {
//     console.log("vanshita");
//     console.log("vanshita");
//     console.log("vanshita");
//     console.log("vanshita");
//     console.log("vanshita");
//     console.log("vanshita");
//     console.log("vanshita");
//     console.log("vanshita");
//     console.log("vanshita");
// }

// funName();


// //parameterized function

// function add(a,b)
// {
//     console.log(a+b);
// }

// add( 45 , 90);

// //now we have to store the value for that

// function addsum(a,b)
// {
//     return (a+b);
// }
// let vanshitaMarks = addsum(45,80);
// console.log(vanshitaMarks);
// let sohamMarks = addsum(45,200);
// console.log(sohamMarks);

// //personalized message
// function personalizedMessage (name)
// {
//     return "hie ,"+name+" welcome to zomato";
// }
// let message = personalizedMessage("vanshita");
// console.log(message)

// function myName ()
// {
//     console.log("vanshita");
    

// }

// myName();
// myName();

// function multiply (a , b)
// {
//     return(a*b)
// }
// let multiplication= multiply(5,10);
// console.log(multiplication);

// function isEqual(a , b)
// {
//    if(a === b)
//    {
//     console.log(true);
//    }
//    else
//    {
//     console.log(false);
//    }
// }

// isEqual(2,9);


function compareNumber(a,b,c)
{
    if(a===b || b===c)
    {
      console.log("equal");
    }
    else
    {
        console.log("not equal");
    }
}
compareNumber(2,2,5);   