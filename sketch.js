function Data() {
var url="https://docs.google.com/spreadsheets/d/e/2PACX-1vS5S7qoB493c9Av3MaCFqrVP7cvC5xaQsO7xVMnDkoH7vYcrI3LZnb_1qfHlB0wXucR1tnRcVqEpwzv/pub?gid=0&single=true&output=csv";

xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if(xmlhttp.readyState == 4 && xmlhttp.status==200){
      document.Team.tName.value = xmlhttp.responseText;
    }
  };
  xmlhttp.open("GET",url,true);
  xmlhttp.send(null);
  console.log(xmlhttp.responseText);
}


