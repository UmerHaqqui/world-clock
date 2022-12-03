const updateTime = () => {
    let d = new Date();
    pak.innerHTML = d.toLocaleString('en-US', {
        timeZone: 'Asia/Karachi',
    }).split(", ")[1]

    usa.innerHTML = d.toLocaleString('en-US', {
        timeZone: 'America/Los_Angeles',
    }).split(", ")[1]

    china.innerHTML = d.toLocaleString('en-US', {
        timeZone: 'Asia/Shanghai',
    }).split(", ")[1]

    aus.innerHTML = d.toLocaleString('en-US', {
        timeZone: 'Australia/Sydney',
    }).split(", ")[1]

    rus.innerHTML = d.toLocaleString('en-AU', {
        timeZone: 'Europe/Moscow',
    }).split(", ")[1]

    ind.innerHTML = d.toLocaleString('en-AU', {
        timeZone: 'Asia/Kolkata',
    }).split(", ")[1]


    let alarmHour = alarm.value.split(":")[0]
    let alarmMin = alarm.value.split(":")[1]
    // console.log(d.getHours(),alarmHour)
    // console.log(d.getMinutes(),alarmMin)
    if(d.getHours()==alarmHour && d.getMinutes()==alarmMin){
        console.log("alarm is ringing")
        let audioUrl = "https://file-examples.com/storage/fe352586866388d59a8918d/2017/11/file_example_OOG_1MG.ogg";
        let audio = new Audio(audioUrl);
        audio.play();
    }
}

setInterval(updateTime, 1000)