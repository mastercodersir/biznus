function showMessage(message , type){
    document.getElementById("result").innerHTML = "<div class='alert alert-"+type+"'>"+message+"+</div>";
  }
  function showMessageInElementById(ElementId , message , type){
    document.getElementById(ElementId).innerHTML = "<div class='alert alert-"+type+"'>"+message+"</div>";
  }