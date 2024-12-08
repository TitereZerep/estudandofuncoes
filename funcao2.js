function diasMes (mes) {
    let dias;
    if (mes == "janeiro" || mes == "marco" || mes == "maio" || mes == "julho" || mes == "agosto" || mes == "outubro" || mes == "dezembro") {
        dias = 31;
    }
    if (mes == "fevereiro") {
        dias = 28;
    }
    if (mes == "abril" || mes == "junho" || mes == "setembro" || mes == "novembro") {
        dias = 30;
    }
    return dias;
}

const var1 = diasMes ("janeiro");
if (var1 != undefined) {
    console.log(var1);
} else {
    console.log("não reconheci esse mês");
}
