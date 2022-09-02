// sending one function to another function as parameter.
function getData(x, y, show,showDat){  
    console.log(" The multiplication of the numbers "   + x + " and " + y + " is: " + (x*y) + "<br>" );  
       show();  
       showDat();
        }  
function showData(){  
         console.log(' This is the showData() method  execute after the completion of getData() method.');  
      }  
 function showD(){  
        console.log('     final function is executing   ');  
     } 
    getData(20, 30, showData,showD); 
    
    