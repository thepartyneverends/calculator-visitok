$(document).ready(function(){
    let tirSize,
    pricePaper = 0,
    priceForma = 0,
    pricePrint = 0,
    sum = 0,
    color_format = "";
    let typePaper = {
        "Выберите бумагу": 0,
        "Мелованная бумага": 6.8,
        "Бумага повышенной белизный (SPLENDORGEL)": 40.5,
        "Prestige Лён": 45
    };
    let typeColor = {
        "Выберите цветность": {file:0, print: 0},
        "Односторонняя черно-белая": {file:110, print:14},
        "Двусторонняя черно-белая": {file:220, print: 28},
        "Односторонняя цветная": {file:110, print: 37},
        "Цветная с лицевой, ч/б с оборотной": {file:220, print: 51},
        "Двусторонняя цветная": {file:220, print: 74},
    }
    insertPaper();
    function insertPaper(){
        let html="";
        for (type in typePaper)
            html += '<option value="' + type + '">' + type + "</option>";
        $("#card-paper").append(html);
    }
    insertColor();
    function insertColor(){
        let html="";
        for (color in typeColor)
            html += '<option value="' + color + '">' + color + "</option>";
        $("#card-color").append(html);
    }

    $(".calk").change(function(){
        tirSize=$("#card_quantity").val()/30;
        // alert(tirSize);
        pricePaper = typePaper[$("#card-paper").val()] * tirSize;
        color_format = $("#card-color").val();
        priceForma = typeColor[color_format]["file"];
        pricePrint = typeColor[color_format]["print"] * tirSize;
        sum=pricePaper +  priceForma + pricePrint;
        $("#final-price").text(sum);
    });

});
