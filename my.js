
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
    let select_papper=document.getElementById("card-paper");
    let select_color=document.getElementById("card-color");
    let input_count=document.getElementById("card-quantity");
    let span_sum=document.getElementById("final_price");
    insertPaper();
    function insertPaper(){
        let html="";
        for (type in typePaper)
            html += '<option value="' + type + '">' + type + "</option>";
       select_papper.innerHTML=html;
    }
  insertColor();
    function insertColor(){
        let html="";
        for (color in typeColor)
            html += '<option value="' + color + '">' + color + "</option>";
      select_color.innerHTML=html;
    
    }
    let calk=document.querySelector(".calk");
    calk.onchange=calculate;
    function calculate(){
        tirSize=input_count.value/30;
     
        pricePaper = typePaper[select_papper.value] * tirSize;
        //alert(pricePaper);
        old_color_format=color_format;
        color_format = select_color.value;
        priceForma = typeColor[color_format]["file"];
        pricePrint = typeColor[color_format]["print"] * tirSize;
        sum=pricePaper +  priceForma + pricePrint;
        span_sum.innerHTML=sum;
        if(color_format!=old_color_format){
        document.querySelectorAll("img").forEach(function(image){
            image.style.display="none";
        });
        if(color_format=="Односторонняя черно-белая")
        document.querySelector("#card_1_0").style.display="block";
        if(color_format=="Двусторонняя черно-белая")
        document.querySelector("#card_1_1").style.display="block";
        if(color_format=="Односторонняя цветная")
        document.querySelector("#card_4_0").style.display="block";
        if(color_format=="Цветная с лицевой, ч/б с оборотной")
        document.querySelector("#card_4_1").style.display="block";
        if(color_format=="Двусторонняя цветная")
        document.querySelector("#card_4_4").style.display="block";
    }

}