var SpeechRecognition = window.webkitSpeechRecognition;

var nowbo = new SpeechRecognition();

function checkmate(){
    document.getElementById("textbox").innerHTML="";
    nowbo.start();
}
nowbo.onresult = function(event) 
{ console.log(event); 
    var Content = event.results[0][0].transcript;//where the converted text is stored,speech to text output is stored 
    document.getElementById("textbox").innerHTML = Content; 
    console.log(Content); 
    if(Content =="take my selfie") 
    { console.log("taking selfie --- "); 
    speak();//function call
 } }
 camera=document.getElementById("camera");
 Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:100
 });
 function speak(){
     var thinkfinklink=window.speechSynthesis;
     teak_pepa="hey you be patient and stay still for the selfie which will happen in 1 second";
     var wettherhis=new SpeechSynthesisUtterance(teak_pepa);
     thinkfinklink.speak(wettherhis);
     Webcam.attach(camera);
     setTimeout(function(){
         take_snapshot();
         save();
     }, 1000);
 }
 function take_snapshot(){
     Webcam.snap(function(Data_puri){
document.getElementById("result").innerHTML='<img id="selfie_image" src="'+Data_puri+'"/>';
     });
 }
 function save(){
     link =  document.getElementById("name");
     image=document.getElementById("selfie_image").src;
  link.href =image;
  link.click();
 }