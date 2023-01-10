function loadTrenerzy() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      displayTrenerzy(this);
    }
  };
  xhttp.open
xhttp.open("GET", "trenerzy.xml", true);
xhttp.send();
}

function displayTrenerzy(xml) {
var xmlDoc = xml.responseXML;
var table = "<tr><th>Id Trenera</th><th>Imię Trenera</th><th>Nazwisko Trenera</th></tr>";
var x = xmlDoc.getElementsByTagName("trener");
for (var i = 0; i < x.length; i++) {
table += "<tr><td>" +
x[i].getElementsByTagName("id_trenera")[0].childNodes[0].nodeValue +
"</td><td>" +
x[i].getElementsByTagName("Imię_trenera")[0].childNodes[0].nodeValue +
"</td><td>" +
x[i].getElementsByTagName("Nazwisko_trenera")[0].childNodes[0].nodeValue +
"</td></tr>";
}
document.getElementById("table-trenerzy").innerHTML = table;
}


function sortTable(column) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("table-trenerzy");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[column];
      y = rows[i + 1].getElementsByTagName("TD")[column];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
