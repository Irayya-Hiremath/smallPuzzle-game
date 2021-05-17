window.onload=function(){
        
    let s=["hello"],jumbled="",seen="";
    let wordbox=document.querySelector(".word-box");
    let originalWord="hello";

    function getRandomIndex(s){
        return Math.floor(Math.random()*10)% s.length;
    }
    function showWord(s){
        let circlesHTML="";
        for(let i=0; i<s.length; i++){
            circlesHTML+= `<div class="round flex"> ${s[i]}</div>`
        }
        wordbox.innerHTML=circlesHTML;
    }

    function jumbleWord(s){
        let jumbled="",seen="";
    

    // alert(jumblled);

    while(s.length!=jumbled.length){
        let i=getRandomIndex(s)

        if(seen.indexOf(i)==-1){
            seen+=i
            jumbled+=s[i]
        }
    }
    
    //alert(jumbled);
    return jumbled;
}

    let jumbledWord=jumbleWord(originalWord)
    showWord(jumbledWord);
}
let inputbox=document.querySelector("input")
let submitbtn=document.querySelector(".btn")
let originalword="hello"
submitbtn.onclick=function(){
    //read from text box
    let guess=inputbox.value
    if(guess==originalword)
    alert("correct")
    else 
    alert("wrong")
};

    