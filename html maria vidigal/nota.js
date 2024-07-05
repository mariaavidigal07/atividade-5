
var n1,n2,n3,media 
n1=parseFloat(prompt("digite a primeira nota"));
n2=parseFloat(prompt("digite a segunda nota"));
n3=parseFloat(prompt("digite a terceira nota"));
media=(n1+n2+n3)/2
if(media >= 60){
    window.alert("voce aprovado")
}
else if(media <60){
   window.alert ("você está reprovado")
}