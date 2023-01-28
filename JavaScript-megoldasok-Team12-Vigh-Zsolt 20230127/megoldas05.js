<script>
let szam=Number(prompt("Adj meg egy számot!"))
let oszto=Number(prompt("Add meg az osztó értékét!"))
let maradek=szam%oszto
if (oszto==0)
{
document.write(`0-val nem osztunk jobb helyeken;)`);
}
else if (maradek==0)
{
document.write(`A megadott szám (${szam}) osztható maradék nélkül az osztóval (${oszto}).`);
}
else
document.write(`A megadott szám (${szam}) NEM osztható maradék nélkül az osztóval (${oszto}).`);
</script>
