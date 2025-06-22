const RWDnavbar = document.getElementById('RWDnavbar');

function toggleSidebar() {
    RWDnavbar.classList.toggle('active');
    document.body.classList.toggle('sidebar-open');
}

function serverSurvivalTime() {
    const startDate = new Date("2024-09-28");
    const SST = document.querySelector("#server-survivalTime")

    var now = new Date();
    var difference = now - startDate;
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    SST.innerHTML = ` ${days}天 ${hours}小時 ${minutes}分鐘 ${seconds}秒`
}

serverSurvivalTime();
setInterval(serverSurvivalTime, 1000);