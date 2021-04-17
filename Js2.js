/*
for(let i = 3 ; i < 6 ; i++) {
    console.log("Bonjour");
}
console.log("Au revoir");
*/
/*
console.log("Exercice 7");
for(let i = 0 ; i < 10 ; i++) {
    if(i>4 && i<8) {
        console.log("A");
    } else {
        console.log(i);
    }
}
*/
/*
Écrire une fonction f1 qui ne prend rien en entrée, et qui affiche 17 dans la console.
*/
function f1(){
    console.log(17);
}
f1();

/*
Écrire une fonction f2 qui ne prend rien en entrée, et qui retourne 17.
*/
function f2(){
    return 17;
}
console.log(f2());

/*
Utiliser la fonction f1 pour afficher 17 dans la console.
*/
f1(17)

/*
Utiliser la fonction f2 pour afficher 17 dans la console.
*/
console.log(f2(17))


/*
La fonction f2 a l'air moins pratique à utiliser. Quel intérêt pourrait-elle avoir par rapport à f1 ?

/*
Écrire une fonction f3 qui prend un nombre en entrée et qui affiche dans la console le double de ce nombre.
*/


function f3(a){
   
    return(a*2);
}
console.log(f3(15))

/*
Écrire une fonction f4 qui prend un nombre en entrée et qui retourne le double de ce nombre.
*/
function f4(b){
    return(b*2)
}
f4(4)

/*
Utiliser la fonction f3 pour écrire dans la console le double de 99.
*/
console.log(f3(99))

/*
Utiliser la fonction f4 pour écrire dans la console le double de 99.
*/
console.log(f4(99))

/*
Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 99.
*/
let a = f4((99))
console.log(a)

/*
Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.
*/
function f5(c,d){
    console.log(c+d);
}
f5(4,12)

/*
Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.
*/
function f6(f,g){
    return (f+g);
}
f6(7,2)


/*
Utiliser la fonction f5 pour écrire dans la console la somme de 42 et 77.
*/
f5(42,77)

/*
Utiliser la fonction f6 pour écrire dans la console la somme de 42 et 77.
*/
console.log(f6(42,77))

/*
Utiliser la fonction f6 pour incrémenter la variable b de la somme de 42 et 77.
*/
let b = 42
console.log(f6(b,198))

/*
Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.
*/
function f7(h,i){
    if (h>i){
        return h;
    }
    else{
        return i
    }
}
console.log(f7(2,4));

/*
Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois.
(Au moins deux versions possibles : sans utiliser f7, et en utilisant f7).
*/
function f8(j,k,l){
  return (Math.max(7,10,2));
}
console.log(f8());
// OU
console.log(f7(7,10,2));

/*
Écrire une fonction f9 qui prend un nombre et un mot en entrée, et qui affiche dans la console ce mot ce nombre de fois.
*/


let m = ("Clara");
for (let i = 0 ; i < 12 ; i++){
    console.log("Clara");
}
