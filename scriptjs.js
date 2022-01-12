function escolha(buffy, willow, xander){
    var qualPersonagem = prompt("Qual opção você escolheu? Responda com o número das opções")
    var comparar

    if (qualPersonagem==="1" || qualPersonagem==="2" || qualPersonagem==="3"){
       comparar=true
    }

    if (comparar===true)
    {
        if(qualPersonagem==="1")
        {
            location.replace(buffy)
        }
        if(qualPersonagem==="2")
        {
            location.replace(willow)
        }
        if(qualPersonagem==="3")
        {
            location.replace(xander)
        }
    }

    else {
        return (alert("Entrada inválida. Selecione de novo. APENAS NÚMEROS."))
    }


}