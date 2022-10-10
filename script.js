let month_name = document.querySelector('.month_name');
let days = document.querySelector('.days');
let lr_icons = document.querySelectorAll('.lr_icons i');


let monthName = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]

let date = new Date(),
current_month = date.getMonth(),
current_year = date.getFullYear();

const renderCalender = () => {
    let lastDateofMonth = new Date(current_year, current_month + 1, 0).getDate();
    let lastDateofPrevMonth = new Date(current_year, current_month, 0).getDate();
    let firstDayofMonth = new Date(current_year, current_month, 1).getDay();
    let lastDayofMonth = new Date(current_year, current_month, lastDateofMonth).getDay();
    let liTAg = '';

    for(i = firstDayofMonth; i > 0; i--){
        liTAg += `<li class="inactive">${(lastDateofPrevMonth - i) + 1}</li>`;
    }

    for(let i = 1; i <= lastDateofMonth; i++){
        let isToday = i === date.getDate() && current_month === new Date().getMonth() && current_year === new Date().getFullYear() ? 'active' : '';
        liTAg += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        liTAg += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;        
    }

    month_name.innerText = (monthName[current_month] + ' ' + current_year);
    days.innerHTML = liTAg;                 
}

renderCalender();

lr_icons.forEach(icon => {
    icon.addEventListener('click', () => {
        current_month = icon.id === "left_btn" ? current_month - 1 : current_month + 1;

        if(current_month < 0 || current_month > 11){
            date = new Date(current_year, current_month);
            current_year = date.getFullYear();
            current_month = date.getMonth();
        }else{
            date = new Date();
        }

        renderCalender();
    });
})