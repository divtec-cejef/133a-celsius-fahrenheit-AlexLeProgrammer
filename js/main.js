/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Etienne Alex
 * @version 0.2
 * @since   2023-09-05
 */
'use strict'; // Demande un interprétation stricte du code

// Demande la température en degrés celcius à l'utilisateur
let temperature = parseFloat(prompt("Température en celcius :"));

// Si temperature n'est pas un nombre => erreur
if (isNaN(temperature)) {
    alert("Entrez un nombre !");
} else {
    // Affiche la température en degrés farenheit
    alert(temperature + "°C = " + (temperature * 9 / 5 + 32) + "°F")
}
