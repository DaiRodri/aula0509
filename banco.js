saldodisponvel = 1000
valordosaque = prompt("informe o valor do saque")
if (valordosaque <= saldodisponvel){ //bloco de codigo a ser executado se a condição for verdade
    saldodisponvel = saldodisponvel - valordosaque
    document.write ("voce está sacando:   R$",     valordosaque)

}else { //bloco de codigo a ser executado se a condição for  falsa
    document.write( "o valor solicitado é maior que o valor diponivel para saque")
}
document.write("saldo disponivel:   R$",    saldodisponvel)
