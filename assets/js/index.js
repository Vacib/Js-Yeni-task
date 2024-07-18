/*1. 1-dən 10-a qədər ədədlərin cəmini (hasilini) tapın.

let eded=0;
let hasil=1;
for (let i = 1; i<=10; i++) {
      eded+=i
    hasil*=i 
}
console.log(eded ,"topla");
console.log(hasil , "vur");
console.log(`${hasil} hasil`);*/

/* 2. 1-dən100-ə qədər cüt ədədləri / onların cəmini / hasilini tapın

let cemCut=0;
let vur=1;
for (let i = 1; i <=100; i++) {
    if (i%2==0) {
      cemCut+=i;
      vur*=i;
    }
}
console.log(`${cemCut} toplamaq`);
console.log(`${vur} vurmaq`);*/

/* 3. 3 rəqəmli ədədlərin ədədi ortasını tapın
let cemOrta=0;
let sayOrta=0;
for (let i = 100; i <=999; i++) {
      cemOrta+=i;
     sayOrta++ 
}
console.log(`${cemOrta/sayOrta} uc reqemli ededin cemin ortasi`);*/

/* 4. 3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədləri tapın

for (let eded = 100; eded <=999; eded++) {
     if (eded%7==0 && eded%8==0) {
      
           console.log(eded);
     }
}*/

/* 5. 3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədlərin cəmini tapın

let cem=0
for (let cemim =100; cemim <=999; cemim++) {
     if (cemim%7==0 && cemim%8==0) {
  cem+=cemim;
}
}
console.log(cem);*/

/* 6. 3 rəqəmli ədədlərdən 7 və 8-ə bölünən ilk ədədi tapın
for (let eded = 100; eded <=999; eded++) {
      if (eded%7==0 && eded%8==0) {
            console.log(eded);
            break;
      }  
}*/

/*7. 3 rəqəmli ədədlərdən 7 və 8-ə bölünən son ədədi tapın.

for (let i = 999; i >=100; i--) {
    
      if (i%7==0 && i%8==0) {
            console.log(i);
            break;
      }
}*/

/* 8. 1-dən 100-ə qədər sadə və mürəkkəb ədədləri tapın
for (let eded = 1; eded <=100; eded++) {
      let say=0
   for (let j = 1; j <=eded; j++) {
      if(eded%j==0){
            say++
      }
   }
   if(say==2)
      console.log(eded," sadedir");
   else if(say>2){
      console.log(eded," murekkebdir");
   }
}*/
/* 9. Verilmiş 3 ədəddən ən böyük və ən kiçiyini tapın

let x=125;
let y =265;
let c=254;
if (x>y && x>c) {
      console.log("En boyuyu X ",x);
}else if(y>c) {
    console.log(" En boyuyu Y ",y);  
}else {
      console.log("En boyuyu C ",c);
} 

if (x<y && x<c) {
     console.log("En kiciyi X ",x); 
}else if (y<c) {
      console.log("En kiciyi Y ",y);
}else{
      console.log("En kiciyi C ", c);
}*/

/* 10. İstifadəçi tərəfindən daxil edilən ədədin cüt olub-olmadığını yoxlayın.(Məsələn istifadəçi 12 daxil etdiyi zaman ekrana  cütdür, 15 daxil etdiyi zaman təkdir çıxarsın)

let ededDaxilEt=+prompt("Eded daxil edin")
if (ededDaxilEt%2==0) {
      console.log("Eded cutdur");
}else{
      console.log("Eded tekdir");
}*/

/* 11. İstifadəçidən iki rəqəm və bir riyazi əməl daxil etməsini təmin edin və həmin ədədlər üzərində daxil olunmuş riyazi əməli tətbiq edib nəticəni ekrana çıxarın.

let ededAl1=+prompt("Ededi daxil edin");
let operator=prompt("Operatoru daxil edin");
let ededAl2=+prompt("Ededi daxil edin")
if (operator=="+") {
   let result=ededAl1+ededAl2;
   alert(result);   
}else if (operator=="-") {
      let result=ededAl1-ededAl2;
      alert(result);    
}else if (operator=="*") {
      let result=ededAl1*ededAl2;
      alert(result);
}else if (operator=="/") {
      let result=ededAl1/ededAl2;
      alert(result);
}else{
      alert("Yanlis emel daxil etdiniz");
}*/

/* 12. Daxil edilmiş ədədin bölünəni olan bütün 3 rəqəmli ədədləri çıxarın.
let eded=+prompt("Ededi daxil edin");
for (let i = 100; i <=999; i++) {
      if (i%eded==0) {
          console.log(i);  
      }   
}*/

/* 13. Daxil edilmiş ədədin bütün mümkün tam bölənlərini tapın.
let eded=+prompt("Eded daxil edin");
for (let i = 1; i <=eded; i++) {
      if (eded%i==0) {
           console.log(i); 
      }  
}*/

/* 14. 12 ədədi hansı 2 ədədin cəmi ola bilər? ( Bütün kombinasiyaları tapın)
let x=12;
for (let i = 1; i <=(x/2); i++) {
      console.log(i,x-i);     
}*/

/* 15. İki dəyişənin dəyərlərininin yerini dəyişən proqram tərtib edin. (Məsələn x=5, y=6, =&gt; x=6, y=5)

let a=10;
let b=8;
a=a+b;
b=a-b;
a=a-b;
console.log(a);
console.log(b);*/


/* 16. Verilmiş ədədin tam ədəd olub olmadığını yoxlayan proqram yazın.
let eded=+prompt("ededi daxil edin")
if (eded%1===0) {
      console.log("Tam ededdir");
}else  {
      console.log("Tam eded deyil");
}*/

/* 17. number dəyişənində iki rəqəmli ədəd saxlanılır. Bu ədədin
- beşinci dərəcə qüvvətə qaldırılmış vəziyyətini (tapın);
- 3-ə bölünmədən qalan qalığını (tapın);
let number=11;
let result=number**5
console.log(`12 reqemin quvveti ${result}`);
let numbers=number%3;
console.log(`Reqemi 3-e bolub qalan qaliq ${numbers}`);*/ 

/* 18.Daxil edilen temperatura esasen havanin isti, cox isti, soyuq, cox soyuq oldugunu gosterin.

let temp=+prompt("Temraturu daxil edin C ")
if (temp<=0) {
      alert(temp +"C" + " Hava Cox soyuqduq")
}else if (temp<=15) {
      alert(temp +"C" + " Hava soyuqdur")
}else if (temp<=30) {
     alert(temp +"C" + " Hava istidir") 
}else if (temp<=45) {
      alert(temp +"C" + " Hava cox istidir")
}*/

/* 19.Daxil edilen rəqəmə görə həftənin günlərini çıxardan program yazın (switch ile yazın.) Meselen: 1 =&gt; bazarertesi,3=&gt; cersenbe (heftenin 7 gunu ucun)

let gun =+prompt("Heftenin gununu daxil edin");
switch (gun) {
      case 1:
            alert(gun+ " Bazar ertəsi")
            break;
      case 2: 
            alert(gun+ " Çərşənbə axşamı")
            break;
      case 3: 
            alert(gun+ " Çərşənbə")
            break;
      case 4: 
            alert(gun+ " Cümə axşamı")
            break;
      case 5: 
            alert(gun+ " Cümə")
            break;
      case 6: 
            alert(gun+ " Şənbə")
            break;
      case 2: 
            alert(gun+ " Bazar")
            break;

      default:
            alert("Yanliş dəyər")
            break;
}*/

/* 20. Daxil edilen ayların sıra nömresinə əsasən hansı fəsil olduğunu tapın. Meselen : 5 (may ayı 5-cidir) output: Yazfesli alertə çıxarın.

let ay=+prompt("Ayı daxil edin")
switch (ay) {
      case 1:
      case 2:
      case 12:
            console.log("Qiş fəsli");
            break;
      case 3:
      case 4:
      case 5:
            console.log("Yaz fəsli");
            break;
      case 6:
      case 7:
      case 8:
            console.log("Yay fəsli");
            break;
      case 9:
      case 10:
      case 11:
            console.log("Payız fəsli");
            break;

      default:
            console.log("Yanliş dəyər");
            break;
}*/