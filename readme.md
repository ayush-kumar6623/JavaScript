

                                                JAVA SCRIPT

Mocha
LiveScript
JavaScript




JS
    Inline
    Internal
    External

documtent.write me text ak line me aa jata
documtent.writeln- me text ak line me aayega but ak space aa jayega


//console is not for users , its is for developer

console.log("THis is console log.");
console.info("This is use for show info");
console.warn(a);
console.erroe(a);

// dialog box for users
alert("This is Alert");















    let name="Ayush Ashu"
    let num=564.46
    let isAdmin = true
    let obj ={
        name :"Ashu",
        age:"12"
    }

    let arr =[2,3,4,5, "ashu","Ayush"]

    let id =Symbol()
    let id1 =Symbol()

    let c=id==id1
    let d;
    let e=null


    console.log(typeof(e));
    console.log(typeof(d));

    console.log(c)
    console.log(name)
    console.log(typeof(name));
    console.log(typeof(num));
    console.log(typeof(isAdmin));
    console.log(typeof(obj));
    console.log(typeof(arr));
    console.log(Array.isArray(arr));
    
    let a = null
    console.log(typeof(a))
    console.log(typeof(num))
// jb value nhi hoti tb undefine aata 


=========================================================================================================================================================================server-computer
clint:- bhi computer
USing the Console
-----------------
    Uses REPL-Read-Evaluate-Print-Loop

    Read → User se code leta hai.
    Evaluate → Code ko execute karta hai.
    Print → Result screen par print karta hai.
    Loop → Dobara naya code lene ke liye wait karta hai.

    clear-ctrl+l

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                    What is Variable ?
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    A Variable is simply the name of a storage Location.
Variable ek container hota hai jisme hum data store karte hain. Baad me us data ko use ya change kar sakte hain.
age=29;
name='Ayush';

esme age aur name Variable ka naam hai jisme age=29 aur name='Ayush' store hai.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                     Data types in JS

        keyword varName=value;
        keyword:- var,let , const
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    Primitive Types-
        . Number
        . Boolean
        . String 
        . Undefined
        . Null
        . Bigint
        . Symbol

Typeof se pta chalta hai ki hamra jo data hai voh kis type ka hai. like int hai ya boolean hai.
        (Typeof name= string) aayega.

    DATA TYPE 
1. Number
    . Positive(14)& Negaative(-4)
    . Integers(44,-50)
    . Floating numbers-with decimal(4.5 , -8.9)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                NaN in JS
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    The NaN global property is a value representing Not-A-Number.
        0/0
        NaN-1
        NaN*1
        NaN+NaN
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                Operator Precendence
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
This is the General order of solving an expression.
        ()
        **
        *,/,%   -----left to right-----
        +,-

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                let keyword
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Syntex of declaring Variable.
        let age=23;
        let num=1;
        let num2=2;
        let sum=num1+num2;

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    Const keyword
        esme ak baar Variableke data ko store kr dete hain to baad me use change nhi kiya ja sakta hai voh constants ho jata hai.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Values of constants can't be changed with re-assignment & they can't be re-declared.
        const pi=3.14;
        const year=2025;
        year=2026   //Error
        year=year+1  //error    

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                    var keyword
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Old syntex of writing Variables.
    var age=23;
    var cgpa=8.9;
    var num1=1;
    var num2=2;
    var sum=num1+num2;

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                    Assignment Operators
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1.age=age+1
   age=+1  //ShortHand
2. age=age-1
    age-=1
3. age=age*1
    age*=1

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                    Unary Operators
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1. Increment
age = age+1
age++   //increment

2. Decrement
age = age-1
age--   

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                    Identifier Rules
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
All JavaScript Variablemust be Identifier with unique name (Identifiers)
    1. name can contain letters, digits, underscores, and dollar signs.(no space)
    2. Name Must begin with a letter.
    3. Names can also begin with $ and -.
    4. Name are case sensitive(y and Y are different Variables).
    5. Reserved word (like JavaScript keywords) CANNOT be used as names.



                                                JAVA SCRIPT
==========================================================================================================================================================================
USing the Console
-----------------
    Uses REPL-Read-Evaluate-Print-Loop

    Read → User se code leta hai.
    Evaluate → Code ko execute karta hai.
    Print → Result screen par print karta hai.
    Loop → Dobara naya code lene ke liye wait karta hai.

    clear-ctrl+l

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                    What is Variable ?
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    A Variable is simply the name of a storage Location.
Variable ek container hota hai jisme hum data store karte hain. Baad me us data ko use ya change kar sakte hain.
age=29;
name='Ayush';

esme age aur name Variable ka naam hai jisme age=29 aur name='Ayush' store hai.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                     Data types in JS
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    Primitive Types-
        . Number
        . Boolean
        . String 
        . Undefined
        . Null
        . Bigint
        . Symbol

    Typeof se pta chalta hai ki hamra jo data hai voh kis type ka hai. like int hai ya boolean hai.
        (Typeof name= string) aayega.

    DATA TYPE 
1. Number
    . Positive(14)& Negaative(-4)
    . Integers(44,-50)
    . Floating numbers-with decimal(4.5 , -8.9)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                NaN in JS
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    The NaN global property is a value representing Not-A-Number.
        0/0
        NaN-1
        NaN*1
        NaN+NaN
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                Operator Precendence
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
This is the General order of solving an expression.
        ()
        **
        *,/,%   -----left to right-----
        +,-

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                let keyword
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Syntex of declaring Variable.
        let age=23;
        let num=1;
        let num2=2;
        let sum=num1+num2;

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                        Const keyword
        esme ak baar Variableke data ko store kr dete hain to baad me use change nhi kiya ja sakta hai voh constants ho jata hai.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Values of constants can't be changed with re-assignment & they can't be re-declared.
        const pi=3.14;
        const year=2025;
        year=2026   //Error
        year=year+1  //error    

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                    var keyword
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Old syntex of writing Variables.
    var age=23;
    var cgpa=8.9;
    var num1=1;
    var num2=2;
    var sum=num1+num2;

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                    Assignment Operators
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1.age=age+1
   age=+1  //ShortHand
2. age=age-1
    age-=1
3. age=age*1
    age*=1

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                    Unary Operators
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1. Increment
age = age+1
age++   //increment

2. Decrement
age = age-1
age--   

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                    Identifier Rules
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
All JavaScript Variablemust be Identifier with unique name (Identifiers)
    1. name can contain letters, digits, underscores, and dollar signs.(no space)
    2. Name Must begin with a letter.
    3. Names can also begin with $ and -.
    4. Reserved word (like JavaScript keywords) CANNOT be used as names.


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                    Boolean 
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Booleanrepresents a truth value-> true or false / yes or no
    let age=23;
    let isAdult=true;

    let age=13;
    let isAdult=false;


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                    TypeScript
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Static Typed, where JS is Dynamic Typed disigned by Microsoft.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
2. String Datatype
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
String are text or sequence of characters
    let name="Ayush";
    let role='Web Devloper';
    let char='A';
    let num='23';
    let empty=" ";

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
string Indices
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
har letter ko index diya jata hai. yah 0 se start hota aur n-1 tk jata hai.
aur ese 0 based indexing bhi kahte hain.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                    null & Undefined
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
. Undefined
    A Variable that has not been assigned a value is of type Undefined.

    agr koi value assigne hi nhi ki gyi ho ya to glt ho to undefine print hoga.

. Null
    The null value represents the intentional absence of any object value.
    To be explicitly assigned.
 kisi bhi object ko  btana hai ki abhi esske andar koi value nhi hai.




-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log()
-------------
    to write(log) a massage on the console
    console.log("Apnacollage");
    console.log(1234);
    console.log(2*2);

    console.log("Apna","Collage",123, (2+5));

-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
        Linking JS File
-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
        <script src="app.js"></script>


-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
Template Literals
-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
they are used to add embedded expressions in a string.
    let a=5;
    let b=10;
    console.log(`Your pay${a+b} rupees`);
    console.log("Price is " , a+b, "rupees");

Ex-  let output=`The total price is : ${pencilPrice} Rupees.`;  //back ticks
     console.log(output);
             or
     console.log(`The total price is : ${pencilPrice+erasorPrice} Rupees.`);

++++++++++++++++++++++++++++++++++++++++++
            Operators In js
++++++++++++++++++++++++++++++++++++++++++

    . Arthmetic(+,-,/,%,**)
        //Arithmetic Oprators

                    let a=10;
                    let b=5;
                    console.log(a+b);
                    console.log(a-b);
                    console.log(a*b);
                    console.log(a/b);
                    console.log(a%b);
                    console.log(a**b);
    . Unary (--,++)

        //Unary Op
            let c=11;
            let d=6;
            console.log(c++);   //11
            console.log(++c); //13


    . Assignment (=,+=,-=,*=,/=,%= etc)
        // Assignment op
                let e=12;
                let f=4;
                e=f;
                console.log(e);

    . Comparison - Comparison Operator to compare 2 values.
        1. > Greater Than
        2. >= Greater Than or equel to
        3. <  lesser than
        4. <= lesser than or equel to
        5. == equal to
        6. != not equal to
        7. === strick op // yah check krta hai ki number aur data type dono equal hai ya nhi agr equal hone to true dega vrna false.

Ex-
    //Comparison
            let age =17;
            console.log(age >= 18); //false
            console.log(age >= 17); //true


----------------------------------------------------------------------------------------------------------------------------------------------------------------------
 Interview Definition ⭐

Spread Operator (...) JavaScript ka operator hai jo array, object ya string ke elements ko expand (spread) karta hai. Iska use copying, merging aur naye elements/properties add karne ke liye kiya jata hai.

Yaad Rakhne ki Trick:-
++++++++++++++++++++++++++
... = Spread = Failana (Expand)
Spread → Expand karta hai.
Rest → Collect karta hai.




Rest Operator 
---------------
(...) JavaScript ka ek operator hai jo multiple values ko ek hi variable me collect (ikattha) karta hai.
--------------

Ye ES6 (ECMAScript 2015) me introduce hua tha.

Yaad rakho:
Rest = Collect (Ikattha karna)
Spread = Expand (Failana)

----------------------------------------------------------------------------------------------------------------------------------------------------------------------

     . Conditional Statements
    -------------------------
        1. if-else
        ++++++++++++

        // some code before if

            if(some Conditional)
            {
                // Do something
            }

            // some code after if

Example:-
-----------
            let Myage=22;
                if(Myage>=23)
                {
                    console.log("You can go.");

                }else{
                    console.log("You can't go.")
                }

        2. nested if-else
        ++++++++++++++++++
            nested is writing if-else inside if-else Statements. It can have many levels.

Example:-
-----------
           let masks = 45;
                if(marks>=33)
                {
                    console.log("Pass");
                    if(marks>=80)
                    {
                        console.log("Grade : O");
                    } else{
                        console.log("Grade : A");
                    }
                }else
                {
                    console.log("Better Luck next time!");
                }

        3. switch


    . Logical
    -----------
   Logical Operator to combine expressions.

   && logical ANd 
        (exp1)&&(exp2)


1. Logical AND (&&)

Agar dono conditions true hain tabhi result true hoga.

Example
let age = 20;
let hasID = true;

console.log(age >= 18 && hasID);
Output
true
Example 2
let a = 10;
let b = 5;

console.log(a > 5 && b > 10);
Output
false

👉 a > 5 = true
👉 b > 10 = false

true && false = false

2. Logical OR (||)

Agar ek bhi condition true ho to result true hota hai.

Example
let age = 16;
let hasPermission = true;

console.log(age >= 18 || hasPermission);
Output
true
Example 2
let a = 5;
let b = 3;

console.log(a > 10 || b > 1);
Output
true

👉 false || true = true

3. Logical NOT (!)

Ye operator kisi boolean value ko ulta kar deta hai.

Example
let isLoggedIn = true;

console.log(!isLoggedIn);
Output
false
Example 2
let isStudent = false;

console.log(!isStudent);
Output
true

                            Truth Table
AND (&&)
A	B	A && B
true	true	true
true	false	false
false	true	false
false	false	false

OR (||)
A	B	A || B
true	true	true
true	false	true
false	true	true
false	false	false

NOT (!)
A	!A
true	false
false	true
Real-Life Example
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
    console.log("Login Successful");
} else {
    console.log("Login Failed");
}
Output
Login Successful
Important Note (Short-Circuit Evaluation)

JavaScript me logical operators short-circuit karte hain:

&&

Agar pehli condition false hai, to dusri condition check hi nahi hoti.
console.log(false && true);
Output:
false

||

Agar pehli condition true hai, to dusri condition check nahi hoti.
console.log(true || false);
Output:
true


Interview/Exam Definition

Logical Operators JavaScript me multiple conditions ko combine karne aur boolean (true/false) result dene ke liye use hote hain. Teen logical operators hote hain:
&& (Logical AND): Dono conditions true honi chahiye.
|| (Logical OR): Kam se kam ek condition true honi chahiye.
! (Logical NOT): Boolean value ko reverse kar deta hai.



            Truthy & falsy
-----------------------------------------
Everything in JS is true or false (in boolean context).
This dosen't mean their value itself is false or true, but they are treated as false or true if taken in boolean context.

Falsy values 
++++++++++++++
false,0,-0 On (Bigint value),  ""(empty string), null, undefined,NaN

Truthy values
--------------
    Everything else


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                switch Statements
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Used when we have some fixed values  that we need to compare to.

let color ="red";

switch(color)
{
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("slow down");
        break;
    case "green":
        console.log("Go");
}




-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                            Alert & Prompt
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Alert:- Alert displays an alert massage on the page.
=======
 // Alert 
        alert("Something is wrong!");

Prompt:- prompt display a dialog box that asks user for some input.
=========
//for dialog box
        prompt("please enter your name");

let name= prompt("please enter your name:");
console.log(name);

                or

let firstname= prompt("please enter your First  name:");
let secondname= prompt("please enter your Second name:");
console.log(firstname);
console.log(secondname);
 
                Or
let firstname= prompt("please enter your First  name:");
let secondname= prompt("please enter your Second name:");
console.log("Welcome", firstname, secondname, "!");
 

 //Alert me firstname aur lastname print krane ke liye

 let firstname = prompt("Enter your name:-");
let lastname = prompt("Enter your Last name:-");
let msg = "welcome "+ firstname +" "+ lastname +"!" ;
alert(msg);

==============================================================

console.log("this is a simple log");
console.error("This is an error");
console.warn("This is an warning");

==============================================================


==============================================================
                        String Methods
==============================================================
Method- Actions that can be performed on objects.

String Methods wo built-in functions hote hain jo string (text) par alag-alag operations karne ke liye use hote hain. Jaise:

. Length nikalna
. Uppercase/Lowercase karna
. Search karna
. Replace karna
. String ko parts me todna

Note: JavaScript me strings immutable hoti hain, yani original string change nahi hoti. Methods ek nayi string return karte hain.
1. length
-----------
String ki total length batata hai.
EX:-
----
    let str = "Hello";
    console.log(str.length);

2. toUpperCase()
------------------
String ko uppercase me convert karta hai.
console.log(str.toUpperCase());

3. toLowerCase()
------------------
String ko lowercase me convert karta hai.

Ex:-
-----
let str = "hello";
console.log(str.toUpperCase());


length
toUpperCase()
toLowerCase()
charAt()
indexOf()
includes()
slice()
replace()
trim()
split()
concat()
repeat()


==============================================================
                    String are Immutable in JS
==============================================================
No changes can be made to strings
Whenever we do try to make a change, a new string is created and old one remains same.


==============================================================
                    String Method with Argumenents
==============================================================
Argumenents is a some value that we pass to the method.

==============================================================
                    indexOf
==============================================================

Returns the firdt index of occurrence of some value in string. Or gives -1 if not found.

let str="IloveCoding";
         0,1,2,3.......
    str.indexOf("Love)   //1
    str.indexOf("j")    //-1 (not found)
    str.indexOf("o")   //2 (only 1 index)

==============================================================
        Method Chaoning 
==============================================================

Using one method after another.Other of execution will be left to right.
str.toUpperCase().trim();


let msg = "      hellow    ";
let newMsg=msg.trim();
console.log(newMsg);
newMsg=newMsg.toUpperCase();
console.log(newMsg);


#   J a v a S c r i p t  
 