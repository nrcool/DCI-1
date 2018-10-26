         $(document).ready(function () {

             $("section").load("_home.html");

             $('.link0').live('click', function () {
                 $("section").load("_home.html");
                 return false;
             });

             $('.link1').live('click', function () {
                 $("section").load("_table.html");
                 return false;
             });

             $('.link2').live('click', function () {
                 $("section").load("_column.html");
                 return false;
             });

             $('.link3').live('click', function () {
                 $("section").html("Links");
                 return false;
             });

             $('.link4').live('click', function () {
                 $("section").html("<embed width='100%' height='400' src = 'https://www.youtube.com/embed/tgbNymZ7vqY'> ");
                 return false;
             });
         });
