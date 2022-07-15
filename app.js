function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
};

// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)

const a = 5;
const b = 6;
if (a >= b){
    console.log(a);
}else {
    console.log(b);
};
// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
console.log('------------------------------------');
for (i = 1;i < 11; i++){
    console.log(i);
};

console.log('------------------------------------');

// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)

for (j = 0; j < 11; j++){
    if ( j % 2 === 0){
        console.log(j);
    }
};

console.log('------------------------------------');

// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)

for (x = 0; x < 5; x++){
let randomFive = 0;
    for (xx = 0; xx < Math.random()* 5;xx++){
        randomFive++
    }
    console.log(randomFive);
};

console.log('------------------------------------');

// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)

console.log('------------------------------------');

// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)

const masyvas = [...Array(30)].map(_ => rand(10, 30));
console.log(masyvas);
const didziausias = masyvas.reduce((a, b) => a > b ? a : b);
console.log('Didziausias:', didziausias);

console.log('------------------------------------');

// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

console.log('------------------------------------');

// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)


function lygineSuma(){
    const aaa = 1;
    const bbb = [2];
    const result = aaa + bbb;
    const resultLength = aaa.length + bbb.length;
    if (typeof aaa == 'number' && typeof bbb == 'number' ){
            return result;
        }else{
            if (typeof aaa == 'object' && typeof bbb == 'object'){
                return resultLength;
            }else{
                return 'Duomenys netinkami. Abu turi buti skaicius arba masyvas'
            }
        };

          
        
};
console.log(lygineSuma());