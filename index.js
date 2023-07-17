let flexButton=document.getElementById("flex-function");
let flexBox=document.getElementById("flex-box")
flexButton.addEventListener("click",function(){
    flexBox.style.flexDirection="column";
})


const selectValue=(e) =>{
    document.getElementById("demo").innerHTML=document.getElementById("slct_id").value
}
function myclick()
{
let c = document.getElementById("text");
c.innerText="hello"
console.log(c)
}
function myyclick()
{
    let t = document.getElementsByTagName("h1");
t[0].innerText="heading tag"
console.log(t)

}
function classbutton()
{
    let ClassName = document.getElementsByClassName("box");
    ClassName.innerText="heyy";
    console.log(ClassName)

}
function timer(){
    let times = new Date();
    let hr = times.getHours();
    let min = times.getMinutes();
    let secs = times.getSeconds();
    console.log(hr, min, secs);
    document.getElementById("clock").innerHTML = hr+ ":" +min+ ":" +secs;
   
  }
  setInterval(timer, 1000)

  let header=document.getElementById("heading").style.color="red";


  const element = document.getElementById("myBtn");
  element.addEventListener("click", myFunction);
  
  function myFunction() {
    document.getElementById("header").innerText = "Welcome to Elevation Academy";
  }