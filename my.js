$(document).ready(function(){
    // Данные для расчета
    const typePaper = {
        "Выберите бумагу": 0,
        "Мелованная бумага": 6.8,
        "Бумага повышенной белизны (SPLENDORGEL)": 40.5,
        "Prestige Лен": 45
    };

    const typeColor = {
        "Выберите цветность": {file: 0, print: 0},
        "Односторонняя черно-белая": {file: 110, print: 14},
        "Двусторонняя черно-белая": {file: 220, print: 28},
        "Односторонняя цветная": {file: 110, print: 37},
        "Цветная с лицевой, ч/б с оборотной": {file: 220, print: 51},
        "Двусторонняя цветная": {file: 220, print: 74}
    };

    // Переменные для расчета
    let tirSize,
        pricePaper = 0,
        priceForma = 0,
        pricePrint = 0,
        sum = 0;

    // Функция для заполнения выпадающего списка бумаги
    function insertPaper() {
        let html = "";
        for (let type in typePaper) {
            html += '<option value="' + type + '">' + type + "</option>";
        }
        $("#card-paper").append(html);
        $("#card-paper").val("Выберите бумагу");
    }

    // Функция для заполнения выпадающего списка цветности
    function insertColor() {
        let html = "";
        for (let color in typeColor) {
            html += '<option value="' + color + '">' + color + "</option>";
        }
        $("#card-color").append(html);
        $("#card-color").val("Выберите цветность");
    }

    // Функция для расчета стоимости
    function calculatePrice() {
        let quantity = parseInt($("#card-quantity").val());
        
        // Проверка введенного количества
        if (!quantity || quantity < 30) {
            $("#final_price").text("0");
            return;
        }
        
        // Расчет
        tirSize = quantity / 30;
        
        // Получаем выбранные значения
        const selectedPaper = $("#card-paper").val();
        const selectedColor = $("#card-color").val();
        
        // Проверяем, что выбраны все параметры
        if (selectedPaper === "Выберите бумагу" || selectedColor === "Выберите цветность") {
            $("#final_price").text("0");
            return;
        }
        
        // Расчет стоимости бумаги
        pricePaper = typePaper[selectedPaper] * tirSize;
        
        // Расчет стоимости цветности
        priceForma = typeColor[selectedColor]["file"];
        pricePrint = typeColor[selectedColor]["print"] * tirSize;
        
        // Итоговая стоимость (округляем до целых)
        sum = Math.round(pricePaper + priceForma + pricePrint);
        
        // Отображаем результат
        $("#final_price").text(sum.toLocaleString('ru-RU'));
    }

    // Инициализация при загрузке страницы
    function initCalculator() {
        // Заполняем выпадающие списки
        insertPaper();
        insertColor();
        
        // Устанавливаем обработчики событий
        $("#card-quantity").on("change input", calculatePrice);
        $("#card-paper").on("change", calculatePrice);
        $("#card-color").on("change", calculatePrice);
        
        // Выполняем первоначальный расчет
        calculatePrice();
    }

    // Запускаем инициализацию
    initCalculator();
});
