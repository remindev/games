var themes = document.getElementById("htmll");
var img0 = document.getElementById("name_logo_txt_home_pro_img_theme0");
var img1 = document.getElementById("name_logo_txt_home_pro_img_theme1");
theme_pro();
function theme_pro(){
  var local = localStorage.getItem("theme");
  if(local==null){
   localStorage.setItem("theme","dark");
   img0.style.display = "initial";
   img1.style.display = "none";
  }else if(local=="light"){
    themes.setAttribute("data-theme","light");
    img0.style.display = "initial";
    img1.style.display = "none";
  }else if(local=="dark"){
    themes.setAttribute("data-theme","dark");
    img0.style.display = "none";
    img1.style.display = "initial";
  }
}
function theme_toggle(){
  var theme = localStorage.getItem("theme");
  if(theme=="dark"){
  localStorage.setItem("theme","light");
  img0.style.display = "none";
  img1.style.display = "initial";
  }; 
  if(theme=="light"){
  localStorage.setItem("theme","dark");
  img0.style.display = "initial";
  img1.style.display = "none";
  }; 
  theme_pro();
}
function home(){
 // console.log("home");
};
function check_the_answer(){
  var answer = document.getElementById("input_at_answer_submit_div").value;
 // var corect_pop = document.getElementById("content_container01");
 // var corect_pop_pop = document.getElementById("content_container02");
  var wrong = document.getElementById("input_at_answer_submit_div");
  if(answer === "PuZzlE"){
  //  corect_pop.style.display = "none";
  //  corect_pop_pop.style.display = "initial";
    wrong.style.border = "2px solid green";
    console.log("correct answer");
  }else{
    wrong.style.border = "2px solid red"
    console.log("wrong answer");
  };
};
check_for_enter();
function check_for_enter(){
  document.querySelector('#input_at_answer_submit_div').addEventListener('keypress', function (e) {
    if (e.key === 'Enter'){
      // code for enter
      check_the_answer();
    }
});
}