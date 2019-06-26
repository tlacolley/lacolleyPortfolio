$(document).ready(function(){

// Variables ------------------------------------------------------------------
var btnNav = $("#btnBurgerNav");
var navBar = $("#navbar");
var sectionCont = $("#mainSection")
var listNav = $("#listNav");
var titleNav = $("#titleNav");
var iconList = $(".nav-link-icon");
var labelList = $(".nav-link-label");
var main = $("#main");




// Functions -------------------------------------------------------------------
//  Change position Main 
function changeMainRight(){
  main.animate({marginRight:"5%"},1000)
  main.toggleClass("mainSection");
  main.toggleClass("mainSectionLeft");
  // console.log("Animation for change to right");
  
}

// Display icon one by one
function displayEachIcon(){
var time = 0;
iconList.each(function(){
  time += 250;
  var icon = $(this);
  setTimeout(function(){
    icon.addClass("iconlistAnim");
    icon.show()
    console.log("Animation Display Icon");
  },time);
});
console.log("Animation Display Icon END");
}

// Change list element by icon
function addClassUl(){
  listNav.addClass("ulLeft");
  labelList.hide();
  displayEachIcon();
  listNav.animate({opacity:1},700);
  titleNav.animate({opacity:1},700);
  // console.log("Animation Change the List to Icons");


};
    

// Function for hide the icon list 
function animHideList(){
  titleNav.animate({opacity:0},400);
  listNav.animate({opacity:0},400);
  // console.log("Animation hide the Icons");

};

// Function for show, display the icon list 
function displayList(){
  labelList.show();
  iconList.hide();
  listNav.animate({opacity:1},700);
  titleNav.animate({opacity:1},700);
  console.log("Animation Display List");

}

//  Function to move the main to the center
function changeMainCenter(){
  main.toggleClass("mainSection");
  main.toggleClass("mainSectionLeft");
  main.animate({marginRight:"10%"},1000);

}

//  FUnction to change the Navbar position 
function changeClassNavbar(){
  navBar.toggleClass("navbarTop");
  navBar.removeClass("navbarLeft");
  // Change position main-------
  setTimeout(changeMainCenter,1000);
  // Change Icon by Liste ------
  listNav.removeClass("ulLeft");
  listNav.addClass("ulTop");
  // Function display List ----
  setTimeout(displayList,1500);
  // console.log("Animation Toggle Left to Top ");


}

//  Function to Fixe the Navbar to the Top
function animTopFixed(){
  if(navBar.hasClass("navbarBase")||navBar.hasClass("navbarTop")){
    // Change navbar class --------
    navBar.removeClass("navbarBase");
    navBar.removeClass("navbarTop");
    // Add class Left ------------
    navBar.toggleClass("navbarLeft");
    // Animate for Main container-- 
    setTimeout(changeMainRight,1000);
    // Animation hide list --------
    setTimeout(animHideList,750);
    //  Change list by Icons ------
    setTimeout(addClassUl,1900)
    listNav.removeClass("ulTop");
    // console.log("Animation Toggle Top to Left ");

 } 
}





//  Condition for big Screen 


function navbarScript(){
  if (window.matchMedia('(min-width: 990px)').matches) {

  // Code Animation Navbar--------------------------------------------------------
      var isFixed=false;
      $(document).scroll(function () {
          // console.log("Scroll begin");

          var topDist = $("header").height()-160;
          // Set fixed
          if( $(window).scrollTop()>=topDist && !isFixed ){
            isFixed=true;
            setTimeout(animTopFixed,0);
            // console.log("Check Scroll good size");

            
        }
          // Set static
          if( $(window).scrollTop()<topDist && isFixed ){
            isFixed=false;
            if(navBar.hasClass("navbarLeft") ){
              // console.log("Check Navbar have class left ");

              // Hide list Icon --------------
              listNav.animate({opacity:0},500).queue("fx");
              titleNav.animate({opacity:0},500).queue("fx");  

              // Change Nav position ---------
              setTimeout(changeClassNavbar,500);

            }
          }
      });

  // End if for screen 
  } else {
      var isFixed=false;
      $(document).scroll(function () {
          var topDist = $("header").height()-160;
          // Set fixed
          if( $(window).scrollTop()>=topDist && !isFixed ){
            isFixed=true;
            navBar.addClass("fixedNavbar").queue("fx");
            // console.log("Add class Fixed top ");

            }
          // Set static
          if( $(window).scrollTop()<topDist && isFixed ){
            isFixed=false;
            navBar.removeClass("fixedNavbar").queue("fx");
            // console.log("Remove class Fixed top ");


          }
      });
  }

}



navbarScript();
$(window).resize(function(){
  navbarScript();
});




// End Jquery 
});
