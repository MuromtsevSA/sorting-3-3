window.onload = function(){
   let list = document.querySelectorAll('li');
   let arr = []
   for(let i=0; i<list.length; i++){
      arr[i] = list[i].innerText;
      var sorted = arr.sort();
      list[i].innerText = '';
      }
      for(var j=0; j<=sorted.length; j++){
        list[j].innerText = sorted[j];
      }
    }
      
        
      
    
      

   
  




   



