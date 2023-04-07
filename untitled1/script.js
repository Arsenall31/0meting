fetch("https://data.buienradar.nl/2.0/feed/json")
    .then(response => response.json())
    .then(data => {
        console.log(data.actual.stationmeasurements)
        var mySelect = document.getElementById('SelectBoxID');
        mySelect.onchange = (event) =>
        {
            var inputText = event.target.value;
            console.log(inputText);
            // replacen met for loop en checken in  data.actual.stationmeasurements[i].stationname wat de waarde van [i] is
            // de waarde van [i] bepaald welke data er geshowd moet worden
            html.push("<option>" + json.actual.stationmeasurements[i].stationname + "</option>")
            document.getElementById("dropdown-stationen").innerHTML = html.join("");}
    })