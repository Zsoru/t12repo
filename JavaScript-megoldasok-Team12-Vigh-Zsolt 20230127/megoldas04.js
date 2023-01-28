<script>
let kor=Number(prompt("Add meg a besorolandó életkort számként!"));
if(1<=kor && kor<6) {
document.write(`Az adott kor (${kor} év) besorolása: kisgyermekkor.`)
}
else if(6<=kor && kor<12) {
document.write(`Az adott kor (${kor} év) besorolása: gyermekkor.`)
}
else if(12<=kor && kor<16) {
document.write(`Az adott kor (${kor} év) besorolása: serdülőkor.`)
}
else if(16<=kor && kor<20) {
document.write(`Az adott kor (${kor} év) besorolása: ifjúkor.`)
}
else if(20<=kor && kor<30) {
document.write(`Az adott kor (${kor} év) besorolása: fiatal felnőtt kor.`)
}
else if(30<=kor && kor<60) {
document.write(`Az adott kor (${kor} év) besorolása: felnőttkor.`)
}
else if(60<=kor && kor<=120) {
document.write(`Az adott kor (${kor} év) besorolása: aggkor.`)
}

else 
document.write(`Az adott kor (${kor} év) nem valós érték.`)
</script>
