
$(document).ready(function (){
    const start= $('.start');
    const quizFile= $('#quizFile');
    const lStorage= $('.input');
    const again=$('.again');
quizFile.hide();
lStorage.hide();
again.hide();

start.on('click',()=>{

// Create target locations variables to manipulate for output, input
const timer= $('.timer');
const start= $('.start');
const score= $('.score');
const image=  $('.img');
const quest=  $('.questions');
const btnA=  $('.A');
const btnB=  $('.B');
const btnC=  $('.C');
const page=  $('.page');
const smiley=  $('.success');
const sad=  $('.fail');
const correct= $('.correct');
const incorrect= $('.incorrect');
const quizFile= $('#quizFile');
const lStorage= $('.input');


//SET HIDDEN ELEMENTS
start.hide();
lStorage.hide();
quizFile.show();

// var dontHide= score.show();

// create variables and setters variables
    //timer
let totalTime=75;
let startTime= 0;
let quizTimer= setInterval(clock,1000);
  //timer
//scoreboard
    let points= 0;
    let totalPoints= score.html(points);       
    
//scoreboard ends

//let this indicates what page the user is on. Also, helps controlling what questions is next
        //PAGE INDEX
let nextPage=1;
let lastPage=10;
let currentPage= page.html(nextPage)
        //PAGE INDEX ends




  //calling functions and variables to start the quiz
  
  quizTimer;
  runningQuestion();

  

// create FUNCTIONS that will run/contrtol the games rules
    
    //timer function creates a loops and controls the output if nothing is clicked (if the timer hits 0 it calls the next function if the IF statement is true)
    function clock(){
        timer.html(totalTime);
        totalTime--;
        if(totalTime<0){ 
            nextPage=6;          
            scenarioSix();        

             
        }
        
    };
    //My feedback object with methods. When user click i will return one of these
    const sendFeedback={
    goodFeedback: function(){
        points+= 2;
        let totalPoints= score.html(points);

        correct.css('visibility','visible');
        smiley.css('visibility','visible');        
        setTimeout(function (){
        smiley.css('visibility','hidden');
        correct.css('visibility','hidden');
        },500);    
        nextPage++            
        let currentPage= page.html(nextPage);
        btnA.off('click');
        btnB.off('click');
        btnC.off('click');                        
            
    },

    badFeedback:  function(){   
        incorrect.css('visibility','visible'); 
        sad.css('visibility','visible');
               setTimeout(function (){
                sad.css('visibility','hidden');
                incorrect.css('visibility','hidden'); 
               },500); 
               nextPage++             
               let currentPage= page.html(nextPage)
               btnA.off('click');
               btnB.off('click');
               btnC.off('click');                         
            
               
    }

};
//feedback object ends
   


// ------------------------------QUIZ CONTROL, sending output and receiving input-------------------------------------------------------------------------
    function runningQuestion(){
       
        //PAGE 1 QUESTION CONTROL BOARD
        if(nextPage=== 1){
            image.attr('src','./assets/railroad.jpg');
            quest.html('In 1804, who built the first full-scale working railway steam locomotive and where?');
            btnA.html('Richard Trevithick, United Kingdom');
            btnB.html('Ernst Karl Abbe, Paris');
            btnC.html('Bruce Ames, USA'); 
            //SET MY EVENT LISTENERS for Questions 1
                 //result for button A
            btnA.on('click',function (){            
            
               sendFeedback.goodFeedback(); 
               runningQuestionTwo();           
           
            });
            //result for button B
            btnB.on('click',function (){                  
                sendFeedback.badFeedback();
                totalTime= totalTime - 20;
                runningQuestionTwo();
                
             });
              //result for button C
             btnC.on('click',function (){
                sendFeedback.badFeedback();
                totalTime= totalTime - 20;
                runningQuestionTwo();
 
             });
        }
    }

            //PAGE 2 QUESTION CONTROL BOARD
            function runningQuestionTwo(){
                if(nextPage=== 2){
            image.attr('src','./assets/peanutbutter.jpg');
            quest.html('Mmhhhh the good old peanut!! Who was the inventor to discover 300 uses for peanuts');
            btnA.html('Ruth Amos');
            btnB.html('Alexandre Alexeieff');
            btnC.html('George Washintong Carvier'); 
            //SET MY EVENT LISTENERS for Questions 1
                 //result for button A
            btnA.on('click',function (){               
                sendFeedback.badFeedback();
                totalTime= totalTime - 20;
                runningQuestionThree();    

            });
            //result for button B
            btnB.on('click',function (){                
                sendFeedback.badFeedback();
                totalTime= totalTime - 20;
                runningQuestionThree();               
             });
              //result for button C
             btnC.on('click',function (){                     
                sendFeedback.goodFeedback(); 
                runningQuestionThree();  
             });
            }
        
    }

//PAGE 3 QUESTION CONTROL BOARD
    function runningQuestionThree(){
        if(nextPage=== 3){
        image.attr('src','./assets/telephone.jpg');
        quest.html('Is the phone ringing? Who is credited for inventing a working telephone?');
        btnA.html('Ami Argand ');
        btnB.html('Ottomar Anschütz');
        btnC.html('Alexander Graham Bell'); 
        //SET MY EVENT LISTENERS for Questions 1
             //result for button A
        btnA.on('click',function (){               
            sendFeedback.badFeedback();
            totalTime= totalTime - 20;
            runningQuestionFour();              
    
        });
        //result for button B
        btnB.on('click',function (){                
            sendFeedback.badFeedback();
            totalTime= totalTime - 20;
            runningQuestionFour(); 
         });
          //result for button C
         btnC.on('click',function (){                     
            sendFeedback.goodFeedback(); 
            runningQuestionFour();  
         });
    }

    
}

//PAGE 4 QUESTION CONTROL BOARD---
function runningQuestionFour(){
    if(nextPage=== 4){
    image.attr('src','./assets/western.png');
    quest.html('Who is known as the father of Western philosophy and one of the first people to explain natural phenomena');
    btnA.html('Charles Babbage ');
    btnB.html('Thales of miletus');
    btnC.html('Francis Beaufort'); 
    //SET MY EVENT LISTENERS for Questions 1
         //result for button A
    btnA.on('click',function (){               
        sendFeedback.badFeedback();
            totalTime= totalTime - 20;
            runningQuestionFive();     
    });
    //result for button B
    btnB.on('click',function (){                
        sendFeedback.goodFeedback(); 
        runningQuestionFive();  
     });
      //result for button C
     btnC.on('click',function (){                     
        sendFeedback.badFeedback();
        totalTime= totalTime - 20;
        runningQuestionFive();  
     });
}


}
//PAGE 5 QUESTION CONTROL BOARD
function runningQuestionFive(){
    if(nextPage=== 5){
    image.attr('src','./assets/flying.jpg');
    quest.html( "Who is known to be as one of history's most brilliant engineers?");
    btnA.html('Leonardo da Vinci ');
    btnB.html('Vladimir Barmin');
    btnC.html('Émile Baudot'); 
    //SET MY EVENT LISTENERS for Questions 1
         //result for button A
    btnA.on('click',function (){               
        sendFeedback.goodFeedback(); 
        scenarioSix();         
    });
    //result for button B
    btnB.on('click',function (){                
        sendFeedback.badFeedback();
        totalTime= totalTime - 20;
        scenarioSix(); 
     });
      //result for button C
     btnC.on('click',function (){                     
        sendFeedback.badFeedback();
        totalTime= totalTime - 20;
        scenarioSix(); 
     });
}


}


        
//////----------------LOCAL STORAGE STAGE STARTS HERE-------------------------////////////////
//SETTING MY TARGET LOCATIONS
const nameVal= $('.textInput');
const scoreVal= $('.numberInput');
const output= $('.outputhtml');
const submit=$('.submit');
const hideMe=$('#hideMe');
const again=$('.again');


function scenarioSix(){
    if (nextPage=== 6){
        let hideTheStorage= lStorage.show();
        let hideTheQuiz= quizFile.hide();
        console.log(score.val());
submit.on('click',()=>{
    submit.off('click');
    const nameValAc= nameVal.val();
    const scoreValAc= scoreVal.val();

    if(nameValAc && scoreValAc){
    
   const nameSet= localStorage.setItem('name',nameValAc);
    const scoreSet= localStorage.setItem('score',scoreValAc);
    const getName= localStorage.getItem('name');
    const getScore= localStorage.getItem('score');
    nameSet;
    scoreSet;    
    getName;
    getScore;


    output.html(`${getName} thank for taking this Quiz share you score of ${getScore}/10 with your friends and stay tune for the next one`);

    again.show();
    again.on('click',()=>{
        location.reload(true);   
    })
    }

    })
}
}
    


//Check answer variable and event listeners


//Check answer variable and event listeners



});

}) ; 