const req = new XMLHttpRequest();

req.onreadystatechange = function () {
    if (req.readyState === 4 && req.status === 200) {
        x(JSON.parse(req.responseText));
    }
}

req.open('GET', 'details.json');
req.send();

function x(a) {
    const img = `<img src="${a.image}">`;
    const details = `
            <tr>
                <td>Brand :</td>
                <td>${a.Brand}</td>
            </tr>
            <tr>
                <td>Model :</td>
                <td>${a.Model}</td>
            </tr>
            <tr>
                <td>Year :</td>
                <td>${a.Year}</td>
            </tr>
            <tr>
                <td>Engine Type :</td>
                <td>${a.Engine.Type}</td>
            </tr>
            <tr>
                <td>Engine Capacity :</td>
                <td>${a.Engine.Capacity}</td>
            </tr>
            <tr>
                <td>Features :</td>
                <td>${a.Features[0]}<br>${a.Features[1]}<br>${a.Features[2]}</td>
            </tr>
            <tr>
                <td>Color  :</td>
                <td>${a.Color}</td>
            </tr>
            <tr>
                <td>Price :</td>
                <td>${a.Price}</td>
            </tr>
            <tr>
                <td>Solid :</td>
                <td>${a.Solid}</td>
            </tr>
    `;
    document.getElementById('bodyDtails').innerHTML = details;
    document.getElementById('image').innerHTML = img;
}
