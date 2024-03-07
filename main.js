
// primo esercizio

// let v = 29

// if( v < 18){
//     console.log("bocciato");
// }else if (v >= 18 && v < 21){
//     console.log("sufficente");
// } else if (v >= 21 && v < 24){
//     console.log("buono");
// }else if (v >= 24 && v < 27){
//     console.log("distinto")
// }else if (v >= 27 && v <= 29){
//     console.log("ottimo")
// }else if (v = 30){
//     console.log("eccellente")
// }



// let v = 29

// switch (true) {
//     case (v < 18):
//         console.log("insufficiente");
//         break;
//     case (v >=18 && v< 21):
//         console.log("sufficiente");
//         break;

// }



// secondo esercizio

//SWITCH

// let bevanda = 2;

// switch (bevanda) {

//     case 1:
//         console.log("Acqua")
//         break;
//     case 2:
//         console.log("Coca Cola")
        
//         break;
//     case 3:
//             console.log("Vino")
            
//             break;
//     case 4:
//             console.log("Birra")
        
//         break;

//     default:
//         console.log("Valore non trovato")
//         break;
// }










// secondo esercizio


// let temp = Math.floor(Math.random() * (30 - -11 )+ -11 )
// console.log(temp) 
// switch (true) {
//     case (temp < -10):
//         console.log("copriti che ti raffreddi");
//         break;
//     case (temp <0 ):
//         console.log("non è tanto freddo");
//         break;
//     case ( temp <30):
//         console.log("mi dia una peroni sudata")
//         break;
//     case (temp >=30):
//         console.log("lu mare, lu sole, lu ventu");    
//     default: console.log("cambia termostato");
//         break;
// }



// terzo esercizio


// let bevanda;

// do {
//     bevanda = prompt("Inserisci il numero corrispondente alla bevanda desiderata:\n1. Acqua\n2. Coca Cola\n3. Birra");

//     switch (bevanda) {
//         case '1':
//             console.log("E’ stata selezionata l’acqua");
//             break;
//         case '2':
//             console.log("E’ stata selezionata Coca Cola");
//             break;
//         case '3':
//             console.log("E’ stata selezionata la birra");
//             break;
//         default:
//             if(bevanda !== null) {
//                 console.log("Opzione non valida. Riprova.");
//             }
//     }
// } while (bevanda !== '1' && bevanda !== '2' && bevanda !== '3' && bevanda !== null)
    


// ESERCIZIO DADI

// let tiri = 2;
// let punteggiogiocatore1 = 0;
// let punteggiogiocatore2 = 0;
// let lancio1;
// let lancio2; 


// for(let i = 0; i < tiri; i++ ){
//     let lancio1 = Math.round(Math.random()* (6 - 1)+ 1);
//     punteggiogiocatore1 = lancio1 + punteggiogiocatore1;
//     let lancio2 = Math.round(Math.random()* (6 - 1)+ 1);
//     punteggiogiocatore2 = lancio2 + punteggiogiocatore2;
//     console.log(`Tiro giocatore1 ${i+1} - Punti: ${lancio1}`)
//     console.log(`Tiro giocatore2 ${i+1} - Punti: ${lancio2}`)
// }

// let perdente = Math.min(punteggiogiocatore1,punteggiogiocatore2);
// let vincente = Math.max(punteggiogiocatore1,punteggiogiocatore2);

// if(vincente== perdente)
// console.log("pareggio")
// else( vincente != perdente )
// console.log(`il vincitore ha totalizato ${vincente} `)