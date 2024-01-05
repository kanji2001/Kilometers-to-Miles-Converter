function Convert() {
   let kilometers = parseFloat(document.getElementById("Converter").value);

    const milesinkiloKilometers = 0.621371;

    let miles = kilometers * milesinkiloKilometers;

    document.getElementById("Result").innerHTML = miles + ' miles';
}