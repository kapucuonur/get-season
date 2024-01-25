// Spring: February 21 - May 31
// Summer: June 1 - September 21
// Fall: September 22 - December 20
// Winter: December 21 - February 20

const day = +prompt("Enter a day (1-31)");
const month = +prompt("Enter a month (1-12)");

if (month == 2 && day >= 21 && day <= 28) {
  alert(`The date you entered is: ${day}/${month} and the season is: Spring`);
} else if (month == 3 && day >= 1 && day <= 31) {
  alert(`The date you entered is: ${day}/${month} and the season is: Spring`);
} else if (month == 4 && day >= 1 && day <= 30) {
  alert(`The date you entered is: ${day}/${month} and the season is: Spring`);
} else if (month == 5 && day >= 1 && day <= 31) {
  alert(`The date you entered is: ${day}/${month} and the season is: Spring`);
} else if (month == 6 && day >= 1 && day <= 30) {
  alert(`The date you entered is: ${day}/${month} and the season is: Summer`);
} else if (month == 7 && day >= 1 && day <= 31) {
  alert(`The date you entered is: ${day}/${month} and the season is: Summer`);
} else if (month == 8 && day >= 1 && day <= 31) {
  alert(`The date you entered is: ${day}/${month} and the season is: Summer`);
} else if (month == 9 && day >= 1 && day <= 21) {
  alert(`The date you entered is: ${day}/${month} and the season is: Summer`);
} else if (month == 9 && day >= 22 && day <= 30) {
  alert(`The date you entered is: ${day}/${month} and the season is: Fall`);
} else if (month == 10 && day >= 1 && day <= 31) {
  alert(`The date you entered is: ${day}/${month} and the season is: Fall`);
} else if (month == 11 && day >= 1 && day <= 30) {
  alert(`The date you entered is: ${day}/${month} and the season is: Fall`);
} else if (month == 12 && day >= 1 && day <= 21) {
  alert(`The date you entered is: ${day}/${month} and the season is: Fall`);
} else if (month == 12 && day >= 22 && day <= 31) {
  alert(`The date you entered is: ${day}/${month} and the season is: Winter`);
} else if (month == 1 && day >= 1 && day <= 31) {
  alert(`The date you entered is: ${day}/${month} and the season is: Winter`);
} else if (month == 2 && day >= 1 && day <= 20) {
  alert(`The date you entered is: ${day}/${month} and the season is: Winter`);
} else {
  alert("Invalid month or day. Please enter valid values.");
}

// const day = +prompt("Gün girin")
// const month= +prompt("Ay girin")
// const gecerliAy= (month >= 1 && month <= 12)
// const gecerliGun= (day >= 1 && day <= 31)
// if(!gecerliAy){
//     if(!gecerliGun){
//         alert("Lütfen Geçerli Ay ve Gün Değeri Girin")
//     } else{
//     alert("Lütfen Geçerli Ay Değeri Girin")
// }
// }else if(!gecerliGun) {
//     alert("Lütfen Geçerli Gün Değeri Girin");
// } else {
//     let mevsim;
// }
// // if ((month == 2 && day >=21 && day <= 29) || (month >= 2 && month <= 5) || (month == 5 && day <=31)){
// //     console.log(`${day} / ${month} is spring`);
// // }
// if((month >= 3 && month <= 5) || (month == 2 && day >= 21 && day <= 29)){
//     console.log(`${day}/${month} spring`);
// } else if((month >= 6 && month <= 8) || (month == 9 && day <= 21)){
//     console.log(`${day}/${month} summer`);
// } else if((month >= 10 && month <= 11) || (month == 9 && day >= 22) || (month == 12 && day <= 20)){
//     console.log(`${day}/${month} fall`);
// }
// else{
//     console.log(`${day}/${month} winter`);
// }