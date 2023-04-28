console.log("your index.js file is loaded correctly!");

    $("v10_89").on({
      mouseenter: function(){
        $(this).css("background-color", "rgba(44,0,0,1)");
      },  
      mouseleave: function(){
        $(this).css("background-color", "white");
      }, 
      click: function(){
        $(this).css("background-color", "yellow");
      }  
    });