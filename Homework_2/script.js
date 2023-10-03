// 1) "  Çağatay Yıldız" isimli metindeki boşlukları kaldır.    (REPLACE)
// 2) "cagatay yildiz" kelimesindeki boşlukları temizle ve tüm harfleri büyült ( REPLACE ve UPPER)
// 3) "******Çağatay Yıldız" isimli metindeki yıldızları kaldır (REPLACE)
// 4) "Çağatay  Yıldız" metnindeki kelimeler arasında 2 boşluk var bunu bir boşluk yap (REPLACE)
// 5) "**Tech Career**" isimli metindeki yıldızları kaldır (REPLACE)
// 6) "Tech Career" isimli metnin soluna ve sağına 3 yıldız koy. "***Tech Career***" ( Normal toplama operatörü)
// 7) "Tech Career Bilişim teknolojileri" metnindeki son kelimeyi büyült (SUBSTRING)
// 8) "Tech bilişim" kelimelerin ilk harflerini büyült (Substring ve upper)

/*1. cevap */

var nameSurname = " Çağatay Yıldız";
console.log(nameSurname);
console.log(nameSurname.replaceAll(" ", ""));

/*2.cevap */
var nameSurname2 = "cagatay yildiz";
console.log(nameSurname2);
console.log(nameSurname2.replaceAll(" ", "").toUpperCase());

/*3.cevap */
var nameSurname3 = "******Çağatay Yıldız";
console.log(nameSurname3);
console.log(nameSurname3.replaceAll("*", ""));

/*4.cevap */

var nameSurname4 = "Çağatay  Yıldız";
console.log("nameSurname4", nameSurname4);
// console.log(nameSurname4.replaceAll(/\s+/g, " "));
console.log(nameSurname4.replaceAll("  ", " "));

/*5.cevap */
var techCareer = "**Tech Career**";
console.log("techCareer", techCareer);
console.log(techCareer.replaceAll("*", ""));

/*6.cevap */
var techCareer2 = "Tech Career";
console.log("techcareer2", techCareer2);
console.log("***" + techCareer2 + "***");
//2yol
var stars = "***";
console.log(stars.concat(techCareer2, stars));

/*7.cevap */
var techCareer3 = "Tech Career Bilişim teknolojileri";
console.log("techCareer3", techCareer3);
let words = techCareer3.split(" ");
let lastWords = techCareer3.lastIndexOf(" ") + 1;
let wordUpper = techCareer3.substring(lastWords).toUpperCase();
let otherWords = techCareer3.substring(0, lastWords);
let newTechCareer = otherWords + wordUpper;
console.log("newTechCareer: " + newTechCareer);


/*8.cevap */

var techCareer4 = "Tech bilişim";
console.log("techCareer4: " + techCareer4);

let wordSplit = techCareer4.split(" ");

for (i = 0; i < wordSplit.length; i++) {
  wordSplit[i] =
    wordSplit[i].substring(0, 1).toUpperCase() + wordSplit[i].substring(1);
}

let newTechCareer4 = wordSplit.join(" ");
console.log(newTechCareer4);


