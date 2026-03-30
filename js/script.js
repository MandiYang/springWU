let currentDate = new Date();

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
    currentDate.setDate(1); 
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
}

function nextMonth() {
    currentDate.setDate(1)
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
}

function selectDate(day) {
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;

    window.open(
        "https://schack.se/kalender/lista/?tribe-bar-date=" 
        + year + "-" + month + "-" + day,
        "_blank"
    );
}

renderCalendar();