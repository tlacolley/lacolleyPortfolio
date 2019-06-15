$(document).ready(function(){

  var topTabs = $(".topTabs");
  var tabsLinks = $(".topTabsLink");
  
  tabsLinks.click(function(e) {
    e.preventDefault();
    if(!$(this).hasClass("active")){
      topTabs.toggleClass("active");
    }

  });





});