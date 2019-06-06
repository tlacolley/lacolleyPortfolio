$(document).ready(function(){


  var topTabs = $(".topTabs");
  var tabsLinks = $(".topTabsLink");
  var tabActive = $(".topTabsLink .active ")

  // console.log(tabActive);  
  console.log(tabsLinks);

  

  tabsLinks.click(function(e) {
    e.preventDefault();
    if(tabsLinks.hasClass("active")){
      console.log("Actov");
      
    }
    topTabs.toggleClass("active");

  });



















});