<script>
document.write("***** Megadott méretű tömb feltöltése megadott intervallumba eső véletlenszerű számokkal ->keszTomb *****<br>")
// tömb feltöltése véletlenszerű számokkal - méret, alsó és felső határ alapján
document.write("tombGeneralo(méret, alsó határ, felső határ)<br>")
function tombGeneralo(meret,alsoHatar,felsoHatar) {
let generaltTomb=[];
for (let i=0;i<meret;i++){
generaltTomb.push(Math.round(Math.random()*(felsoHatar-alsoHatar)+alsoHatar))
}
return generaltTomb
}
// a gerenrált tömb bekerül egy keszTomb változóba a későbbi könnyebb használat miatt
let keszTomb=tombGeneralo(8,10,40);
document.write("A generált tömb (generaltTomb[8,10,40] - 8 elemmel 10 és 40 között): "+keszTomb)
document.write("<br>keszTomb: "+keszTomb)

// összegzés tétele a keszTomb használatával
document.write("<br><br>***** Összegzés tétele a keszTomb használatával *****<br>")
function osszegzo(){
let osszeg=0;
for(i=0;i<keszTomb.length;i++){
osszeg+=keszTomb[i]
}
return osszeg
}

document.write(`A keszTomb (${keszTomb}) elemeinek összege (osszeg): `+osszegzo(keszTomb))

// átlag számítás tétele a keszTomb használatával - gyakorlás miatt újra számolom
document.write("<br><br>***** Átlag számítás tétele a keszTomb használatával *****<br>")
function atlagSzamito() {
let osszegAtlaghoz=0;
for (let i=0;i<keszTomb.length;i++){
osszegAtlaghoz+=keszTomb[i]
}
return osszegAtlaghoz/keszTomb.length
}
document.write(`A keszTomb (${keszTomb}) elemeinek átlaga: `+atlagSzamito(keszTomb))

// megszámlálás tétele - páros számok a keszTomb-ben
document.write("<br><br>***** Megszámlálás tétele - páros számok a keszTomb használatával *****<br>")
function parosSzamokMegszamolasa(){
parosSzamDarab=0;
for(let i=0;i<keszTomb.length;i++){
if(keszTomb[i]%2==0){
parosSzamDarab++
}
}
return parosSzamDarab;
}
document.write(`A keszTomb-ben (${keszTomb}) a páros számok száma: `+parosSzamokMegszamolasa(keszTomb))

// kiválogatás tétele - a kiválasztott páros számok kiírása új tömbbe
document.write("<br><br>***** Kiválogatás tétele - keszTomb használatával a kiválasztott páros számok kiírása új tömbbe *****<br>")
function parosSzamKivalogatas(){
let parosTomb=[];
for (let i=0; i<keszTomb.length;i++) {
if(keszTomb[i]%2==0){
parosTomb.push(keszTomb[i])
}
}
return parosTomb;
}
document.write(`A keszTomb (${keszTomb}) páros számai kiválogatva: `+parosSzamKivalogatas(keszTomb))

// minimum érték tétele
document.write("<br><br>***** Minimum érték tétele keszTomb használatával *****<br>")
function minErtekKereso() {
let minErtek=keszTomb[0]
for (let i=0; i<keszTomb.length; i++){
if(keszTomb[i]<=minErtek){
minErtek=keszTomb[i];
}
}
return minErtek;
}
document.write(`A keszTomb (${keszTomb}) minimum értéke: `+minErtekKereso(keszTomb))

// minimum értékhez kapcsolódó index keresése
document.write("<br><br>***** Minimum értékhez kapcsolódó index keresése keszTomb használatával *****<br>")
function minIndexKereso() {
let minIndexErtek=keszTomb[0]
for (let i=0; i<keszTomb.length; i++){
if(keszTomb[i]<=minIndexErtek){
minIndexErtek=keszTomb[i];
minIndex=i;
}
}
return minIndex;
}
document.write(`A keszTomb (${keszTomb}) minimum értékéhez tartozó index: `+minIndexKereso(keszTomb))

// maximum érték tétele
document.write("<br><br>***** Maximum érték tétele keszTomb használatával *****<br>")
function maxErtekKereso() {
let maxErtek=keszTomb[0]
for (let i=0; i<keszTomb.length; i++){
if(keszTomb[i]>=maxErtek){
maxErtek=keszTomb[i];
}
}
return maxErtek;
}
document.write(`A keszTomb (${keszTomb}) maximum értéke: `+maxErtekKereso(keszTomb))

// maximum értékhez kapcsolódó index keresése
document.write("<br><br>***** Maximum értékhez kapcsolódó index keresése keszTomb használatával *****<br>")
function maxIndexKereso() {
let maxIndexErtek=keszTomb[0]
for (let i=0; i<keszTomb.length; i++){
if(keszTomb[i]>=maxIndexErtek){
maxIndexErtek=keszTomb[i];
maxIndex=i;
}
}
return maxIndex;
}
document.write(`A keszTomb (${keszTomb}) maximum értékéhez tartozó index: `+maxIndexKereso(keszTomb))

// halmaz műveletek - unio, nem szűrt
document.write("<br><br>***** Halmaz műveletek - Unio (nem szűrt) - halmazA és halmazB használatával  *****<br>")
let halmazA=tombGeneralo(6,50,60);
let halmazB=tombGeneralo(8,50,60);
function egyszeruHalmazUnio(){
	let unioNemSzurt=[];
    for (let i=0; i<halmazA.length;i++){
    unioNemSzurt.push(halmazA[i]);
	}
    for (let j=0; j<halmazB.length;j++){
    unioNemSzurt.push(halmazB[j]);
	}
	return unioNemSzurt;
}
document.write(`A halmazA ${halmazA} és halmazB ${halmazB} <br>nem szűrt uniója: ${egyszeruHalmazUnio()}`)


// halmaz műveletek - unio, szűrt
document.write("<br><br>***** Halmaz műveletek - Unio (szűrt) - halmazA és halmazB használatával  *****<br>")
function unioKepezo(){

	let halmazUnio=[];
	for (let i=0;i<halmazA.length;i++) //első halmaz elemeit vizsgálja
    {
				let eleme=false;
    			for(let j=0;j<halmazUnio.length;j++)
                {
    				if(halmazA[i]==halmazUnio[j])
                    {
    				eleme=true;
    				}
                }
                if (eleme==false)
                {
    			halmazUnio.push(halmazA[i]);
    			}
    }
	for (let i=0;i<halmazB.length;i++) //második halmaz elemeit vizsgálja
	{
        		let eleme=false;
    			for(let j=0;j<halmazUnio.length;j++)
                {
    				if(halmazB[i]==halmazUnio[j])
                    {
    				eleme=true;
    				}
                }
    			if (eleme==false)
                {
    			halmazUnio.push(halmazB[i]);
    			}
    }

    return halmazUnio;
}
document.write(`A halmazA ${halmazA} és halmazB ${halmazB} <br>szűrt uniója: ${unioKepezo()}`)

// halmaz műveletek - metszet
document.write("<br><br>***** Halmaz műveletek - nem szűrt Metszet - halmazA és halmazB használatával  *****<br>")
function nagyobbHalmazValaszto()
	{
	let nagyobbHalmaz=[];
    let kisebbHalmaz=[];
	if(halmazA.length>=halmazB.length)
    	{
		nagyobbHalmaz.push(halmazA);
        
		}
	else
	nagyobbHalmaz.push(halmazB);
    return nagyobbHalmaz;
	}
function kisebbHalmazValaszto()
	{
	let kisebbHalmaz=[];
	if(halmazA.length>=halmazB.length)
    	{
		kisebbHalmaz.push(halmazB);
		}
	else
		kisebbHalmaz.push(halmazA);

	return kisebbHalmaz;
	}
document.write(`A halmazA ${halmazA} és halmazB ${halmazB} <br>közül a számosabb halmaz: ${nagyobbHalmazValaszto()}`);
let nagyobb=nagyobbHalmazValaszto();
let kisebb=kisebbHalmazValaszto();
function metszetKereso()
	{
	let metszet=[];
	for (let i=0;i<halmazA.length;i++) 
    	{
        for (let j=0; j<halmazB.length;j++)
        	if (halmazA[i]==halmazB[j]) 
            	{
                metszet.push(halmazA[i])
            	}
    	}
   return metszet;
        
	}
document.write(`<br>A két halmaz NEM szűrt metszete: ${metszetKereso()}`);

// halmaz műveletek - szűrt metszet
document.write("<br><br>***** Halmaz műveletek - szűrt Metszet - halmazA és halmazB használatával  *****<br>")

function szurtMetszetKereso()
	{
	let szurtMetszet=[];
		for (let i=0;i<halmazA.length;i++) 
   		{
        	for (let j=0;j<halmazB.length;j++)
        	{
            
            		if (halmazA[i]==halmazB[j]) 
            		{
                    	let benneVan=false;
                		for (let k=0;k<szurtMetszet.length;k++) 
                        {
                        	if (halmazA[i]==szurtMetszet[k]) 
                        	{
                            benneVan=true;
                        	}
                        }
                        if (benneVan==false){
                        szurtMetszet.push(halmazA[i]);
                        }
            		}
                
            }
    	}
   return szurtMetszet;
	}
document.write(`A halmazA ${halmazA} és halmazB ${halmazB} <br> szűrt metszete: ${szurtMetszetKereso()}`);
</script>