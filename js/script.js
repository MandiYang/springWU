let currentDate = new Date();
let monthval=currentDate.getMonth()+1
let yearval=currentDate.getFullYear()

function renderCalendar() {
    const datesContainer = document.getElementById("dates");
    const monthYear = document.getElementById("monthYear");

    datesContainer.innerHTML = "";

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const today = new Date();

    monthYear.innerText = currentDate.toLocaleString("sv-SE", {
        month: "long",
        year: "numeric"
    });

    // Fix för att veckan börjar på måndag
    let start = firstDay === 0 ? 6 : firstDay - 1;

    for (let i = 0; i < start; i++) {
        datesContainer.innerHTML += "<div></div>";
    }

    for (let i = 1; i <= lastDate; i++) {
        let className = "";

        if (
            i === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {
            className = "today";
        }

        datesContainer.innerHTML += `<div class="${className}" onclick="selectDate(${i})">${i}</div>`;
    }
}

function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
    monthval-=1;
    if (monthval<=0) {
        monthval=12
        yearval-=1
    }
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
    monthval+=1;
    if (monthval>12) {
        monthval=1
        yearval+=1
    }
}

function selectDate(day) {
    window.location.href = "https://schack.se/kalender/lista/?tribe-bar-date="+yearval+"-"+monthval+"-"+day;
}

renderCalendar();