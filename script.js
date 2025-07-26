function formaterDato(dato) {
    const alternativer = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    // Bruker 'no-NO' for norsk datoformat
    return dato.toLocaleDateString('no-NO', alternativer);
}

// Funksjon for å beregne antall dager igjen av inneværende år
function beregnDagerIgjen() {
    const iDag = new Date(); // Henter dagens dato
    const detteÅret = iDag.getFullYear(); // Henter inneværende år
    // Setter nyttårsaften for inneværende år (måned er 0-indeksert, så 11 er desember)
    const nyttårsaften = new Date(detteÅret, 11, 31); 
    
    // Beregner tidsforskjellen i millisekunder mellom nyttårsaften og i dag
    const tidIgjen = nyttårsaften.getTime() - iDag.getTime();
    // Konverterer millisekunder til dager og runder opp til nærmeste hele dag
    const dagerIgjen = Math.ceil(tidIgjen / (1000 * 60 * 60 * 24)); 

    return dagerIgjen;
}

// Lytter etter at hele DOM-strukturen er lastet før skriptet kjøres
document.addEventListener('DOMContentLoaded', () => {
    const iDag = new Date(); // Henter dagens dato på nytt for visning
    // Oppdaterer elementet med id 'dagensDato' med den formaterte datoen
    document.getElementById('dagensDato').textContent = formaterDato(iDag);
    // Oppdaterer elementet med id 'dagerIgjen' med antall dager igjen av året
    document.getElementById('dagerIgjen').textContent = beregnDagerIgjen();
});
