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
        tirSize=$("#card-quantity").val()/30;
        // alert(tirSize);
        pricePaper = typePaper[$("#card-paper").val()] * tirSize;
        old_color_format=color_format;
        color_format = $("#card-color").val();
        priceForma = typeColor[color_format]["file"];
        pricePrint = typeColor[color_format]["print"] * tirSize;
        sum=pricePaper +  priceForma + pricePrint;
        $("#final_price").text(sum);
        if(color_format!=old_color_format){
        $("img").hide();
        if(color_format=="Односторонняя черно-белая")
        $("#card_1_0").show("slow");
        if(color_format=="Двусторонняя черно-белая")
        $("#card_1_1").show("slow");
        if(color_format=="Односторонняя цветная")
        $("#card_4_0").show("slow");
        if(color_format=="Цветная с лицевой, ч/б с оборотной")
        $("#card_4_1").show("slow");
        if(color_format=="Двусторонняя цветная")
        $("#card_4_4").show("slow");
    }
    });
});
