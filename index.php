<!DOCTYPE html>
<html>
<head>
  <title>Strona główna</title>
  <script src="trenerzy.js"></script>
</head>
<body onload="loadTrenerzy()">
  <h1>Strona główna</h1>
  <button onclick="addRecord()">Dodaj rekord</button>
  <table id="table-trenerzy">
    <tr>
      <th onclick="sortTable(0)">Id Trenera</th>
      <th onclick="sortTable(1)">Imię Trenera</th>
      <th onclick="sortTable(2)">Nazwisko Trenera</th>
    </tr>
  </table>
</body>
</html>
