let ciflik =["inek", "Inek", "Tavuk","TaVuk",
"domuz", "DOMUZ","koyun"];

const INEK_BACAK = 4;
const TAVUK_BACAK = 2;
const DOMUZ_BACAK = 4;
const KOYUN_BACAK = 4;
let  numberOfInek = 0;
     numberOfTavuk = 0;
     numberOfDomuz = 0;
     numberOfKoyun = 0;

for(let index = 0;index<ciflik.length;index++){
    let hayvanlar= ciflik[index].toLowerCase();
    if(hayvanlar.includes("inek")){
        numberOfInek++;}
        else if(hayvanlar.includes("tavuk")){
            numberOfTavuk++;

    }   else if(hayvanlar.includes("domuz")){
            numberOfDomuz++;

    }   else if(hayvanlar.includes("koyun")){
            numberOfKoyun++;

    }   else{
            console.log("mevcutta olan hayvanlardan degil");
    }
    
}     
let totalHayvanlarBacagi = (numberOfInek*INEK_BACAK) + (numberOfTavuk*TAVUK_BACAK) +(numberOfDomuz*DOMUZ_BACAK) + (numberOfKoyun*KOYUN_BACAK);
let helalBacak = (numberOfInek*INEK_BACAK) + (numberOfTavuk*TAVUK_BACAK) + (numberOfKoyun*KOYUN_BACAK);
let kellePacaBacak = (numberOfInek*INEK_BACAK) + (numberOfKoyun*KOYUN_BACAK);

console.log(totalHayvanlarBacak=${totalHayvanlarBacak});
console.log(helalBacak=${helalBacak});
console.log(kellePacaBacak=${kellePacaBacak});
