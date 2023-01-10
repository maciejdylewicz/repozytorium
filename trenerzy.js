function loadTrenerzy() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      displayTrenerzy(this);
    }
  };
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
      x = rows[i].getE
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

function addRecord() {
    var table = document.getElementById("table-trenerzy");
    var newRow = table.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var id_trenera = prompt("Enter Id Trenera:");
    var imie = prompt("Enter Imie Trenera:");
    var nazwisko = prompt("Enter Nazwisko Trenera:");
    cell1.innerHTML = id_trenera;
    cell2.innerHTML = imie;
    cell3.innerHTML = nazwisko;
}

function deleteRecord(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table-trenerzy").deleteRow(i);
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
    "</td><td><button onclick='deleteRecord(this)'>&times;</button></td></tr>";
  }
  document.getElementById("table-trenerzy").innerHTML = table;
}
