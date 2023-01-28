<script>
let also=Number(prompt("Add meg az intervallum alsó határát"));
let felso=Number(prompt("Add meg az intervallum felső határát"));
let randomSzam=Math.round(Math.random()*(felso-also))+also;
document.write(`Az adott (${also}) ; (${felso}) intervallumban generált szám: ${randomSzam}`)
</script>
