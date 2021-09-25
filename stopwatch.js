// declaring the variables hour for hours,min for minutes, sec for seconds and milisec for miliseconds
var hour=0,min=0,sec=0,milisec=0;

// a boolean variable which determines the clock state i.e whether it is running or stop
var timer=false;

//count variable to count the number of flagged times
var count=0;

//getting the object with id stop
const Stop=document.getElementById("stop");

//getting the object with id reset
const Reset=document.getElementById("reset");

//getting the object with id flag
const Flag=document.getElementById("flag");

//getting the object with id start
const Start=document.getElementById("start");

//setting the display of all other buttons to be none except the start button 
if(timer==false)
{
    Stop.style.display="none";
    Reset.style.display="none";
    Flag.style.display="none";
}

//function for starting the clock
function starttime(){
    //works if previously the clock is stopped i.e. timer value is false
    if(timer==false)
    {
        //setting the timer value to be true i.e. to start state
        timer=true;
        //changing the displays of buttons for better view
        Stop.style.display="block";
        Reset.style.display="block";
        Flag.style.display="block";
        Start.style.display="none";

        //calling the function to start a clock
        cyclestart();
    }
};

//function for stopping the clock
function stoptime(){
    //setting the timer value to be false i.e. back to stopped state
    timer=false;

    //changing the displays of buttons for better view
    Stop.style.display="none";
    Reset.style.display="block";
    Start.style.display="block";
    
};
//main function for running of clock
function cyclestart(){
    //works when it is in start state
 if(timer==true)
 {
     //increament the count of miliseconds
     milisec=milisec+1;
     //as soon as miliseconds reaches 100 increase the count of seconds
     if(milisec==100){
         sec=sec+1;
         milisec=0;
     }
     //as soon as second reaches 60 increase the count of min and sec back to 0
     if(sec==60)
     {
         min=min+1;
         sec=0;
         milisec=0;
     }
     //as soon as the min reaches increase the count of hour and min and sec back to 0
     if(min==60)
     {
         hour=hour+1;
         min=0;
         sec=0;
         milisec=0;
     }

     //taking care of 0 in front of numbers like 05,08,01 etc for hour,min,sec,milisec
     var hs=hour,ms=min,ss=sec,mis=milisec;
     if(hour<10)
     {
         hs="0"+hs;
     }
     if(min<10)
     {
         ms="0"+ms;
     }
     if(sec<10)
     {
         ss="0"+ss;
     }
     if(milisec<10)
     {
         mis="0"+mis;
     }

     //assining the values to the desired locations on the frontend
     document.getElementById("hour").innerHTML=hs;
     document.getElementById("min").innerHTML=ms;
     document.getElementById("sec").innerHTML=ss;
     document.getElementById("milisec").innerHTML=mis;
     //setting the cycle time of 10 miliseconds.
     setTimeout("cyclestart()",10);
 }
};

//function for reseting the state of stopwatch
function reset()
{
    //changing the displays of buttons for better view
    Stop.style.display="none";
    Reset.style.display="none";
    Start.style.display="block";
    document.getElementById("flag").style.display="none";

    //timer varaible set to stop state
    timer=false;

    //hour min sec and milisec and count set back to zero
    hour=0;
    sec=0;
    min=0;
    milisec=0;
    count=0;

    //setting the content in the frontend
    document.getElementById("hour").innerHTML="00";
     document.getElementById("min").innerHTML="00";
     document.getElementById("sec").innerHTML="00";
     document.getElementById("milisec").innerHTML="00";
     document.getElementById("flagged").innerHTML="";
}
//function to add a flag time in a container
function flag(){
    //incrementing the flag count;
    count=count+1;

    //creating two new div num and t containing the count and flagged time 
    var num=document.createElement('div');
    var t=document.createElement('div');

    //creating a new time which holds the num and t divs 
    var doc=document.createElement('div');
    //setting the value for each divs
    num.innerHTML=count;
    t.innerHTML=hour+":"+min+":"+sec+":"+milisec;

    //adding a class to a div
    doc.classList.add("flag");
    //appending the divs num and t in doc div
    doc.append(num);
    doc.append(t);
    //prepending the doc div in the flag container
    document.getElementById("flagged").prepend(doc);
}