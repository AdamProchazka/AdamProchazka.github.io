function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    if (h == 0){
        h = 24;
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + " : " + m;// + " : " + s;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;

    setTimeout(showTime, 1)
}

function showDate(){
    var date = new Date();
    var mon = date.getMonth();
    var datum = date.getDate();
    mon = mon + 1
    var dateNow = datum + ". " + mon
    document.getElementById("datum").innerText = dateNow;
    document.getElementById("datum").textContent = dateNow;

    setTimeout(showDate, 2000)
}

function showDay(){
    var date = new Date();
    var day = date.getDay();

    if (day == 1) {
        var den = "pondělí";
    }
    if (day == 2) {
        var den = "úterý";
    }
    if (day == 3) {
        var den = "středa";
    }
    if (day == 4) {
        var den = "čtvrtek";
    }
    if (day == 5) {
        var den = "pátek";
    }
    if (day == 6) {
        var den = "sobota";
    }
    if (day == 0) {
        var den = "neděle";
    }

    document.getElementById("den").innerText = den;
    document.getElementById("den").innerText = den;

    setTimeout(showDay, 2000)
}
function zkratkaDne(day){
                if (day == 1) {
                    var den = "PO";
                }
                if (day == 2) {
                    var den = "ÚT";
                }
                if (day == 3) {
                    var den = "ST";
                }
                if (day == 4) {
                    var den = "ČT";
                }
                if (day == 5) {
                    var den = "PÁ";
                }
                if (day == 6) {
                    var den = "SO";
                }
                if (day == 0) {
                    var den = "NE";
                }
                if (day == 7){
                    var den = "NE";
                    var day = 0;
                }
                return (den);
}

function weather(){
    var lon;
    var lat;
    var temperatureDescription = document.querySelector(".temp-desc");
    var temperatureDegree = document.querySelector(".temp-degree");
    var forecastOne = document.querySelector(".forecast1");
    var forecastTwo = document.querySelector(".forecast2");
    var forecastThree = document.querySelector(".forecast3");
    var forecastFour = document.querySelector(".forecast4");
    var forecastFive = document.querySelector(".forecast5");
    var forecastSix = document.querySelector(".forecast6");
    var forecastSeven = document.querySelector(".forecast7");
    var den1 = document.querySelector(".den1");
    var den2 = document.querySelector(".den2");
    var den3 = document.querySelector(".den3");
    var den4 = document.querySelector(".den4");
    var den5 = document.querySelector(".den5");
    var den6 = document.querySelector(".den6");
    var den7 = document.querySelector(".den7");
    var date = new Date();
    var day = date.getDay();
    day = day + 1;
    den1.textContent = zkratkaDne(day);
    if (day == 7) {
        day = 0;
    }
    day = day + 1 ;
    den2.textContent = zkratkaDne(day);
    if (day == 7) {
        day = 0;
    }
    day = day + 1 ;
    den3.textContent = zkratkaDne(day);
    if (day == 7) {
        day = 0;
    }
    day = day + 1 ;
    den4.textContent = zkratkaDne(day);
    if (day == 7) {
        day = 0;
    }
    day = day + 1 ;
    den5.textContent = zkratkaDne(day);
    if (day == 7) {
        day = 0;
    }
    day = day + 1 ;
    den6.textContent = zkratkaDne(day);
    if (day == 7) {
        day = 0;
    }
    day = day + 1 ;
    den7.textContent = zkratkaDne(day);
    if (day == 7) {
        day = 0;
    }
    day = day + 1 ;

    //if(navigator.geolocation){
        //navigator.geolocation.getCurrentPosition(position =>{
           // lon = position.coords.longitude;
           // lat = position.coords.latitude;
            lat = 49.6371882;
            lon = 16.2263193;
            const proxy = "https://cors-anywhere.herokuapp.com/"
            const api = `${proxy}https://api.darksky.net/forecast/6a6067b74f8f52473ed8b57bf9a64563/${lat},${lon}`;
            
            
            fetch(api)
            .then(resp =>{
                return resp.json();
            })
            .then(data => {
                console.log(data);
                const { temperature, summary, icon } = data.currently;
                //přečte api hodnoty a vymění je
                temper = temperature;
                temper = (temper-32)*(5/9);
                temper = temper.toFixed(1);
                temperatureDegree.textContent = temper + "°C";
                temperatureDescription.textContent = summary;
                setIcon(icon, document.querySelector('.icon'), "white");
            });
            fetch(api)
            .then(resp =>{
                return resp.json();
            })
            .then(cast => {
                
            
                console.log(cast);
                var { temperatureMax, temperatureMin, icon } = cast.daily.data[1];
                temperMax = temperatureMax;
                temperMax = (temperMax-32)*(5/9);
                temperMax = temperMax.toFixed(0);
                temperMin = temperatureMin;
                temperMin = (temperMin-32)*(5/9);
                temperMin = temperMin.toFixed(0);
                forecastOne.textContent = temperMax +" / " +temperMin + "°C";
                setIcon(icon, document.querySelector('.ikona1'), "white");
                
                

                console.log(cast);
                var { temperatureMax, temperatureMin, icon } = cast.daily.data[2];
                temperMax = temperatureMax;
                temperMax = (temperMax-32)*(5/9);
                temperMax = temperMax.toFixed(0);
                temperMin = temperatureMin;
                temperMin = (temperMin-32)*(5/9);
                temperMin = temperMin.toFixed(0);
                forecastTwo.textContent =  temperMax +" / " +temperMin + "°C";
                setIcon(icon, document.querySelector('.ikona2'), "#e1e1e1");
                
                
                console.log(cast);
                var { temperatureMax, temperatureMin, icon } = cast.daily.data[3];
                temperMax = temperatureMax;
                temperMax = (temperMax-32)*(5/9);
                temperMax = temperMax.toFixed(0);
                temperMin = temperatureMin;
                temperMin = (temperMin-32)*(5/9);
                temperMin = temperMin.toFixed(0);
                forecastThree.textContent = temperMax +" / " +temperMin + "°C";
                setIcon(icon, document.querySelector('.ikona3'), "#c3c3c3");
                
               

                console.log(cast);
                var { temperatureMax, temperatureMin, icon } = cast.daily.data[4];
                temperMax = temperatureMax;
                temperMax = (temperMax-32)*(5/9);
                temperMax = temperMax.toFixed(0);
                temperMin = temperatureMin;
                temperMin = (temperMin-32)*(5/9);
                temperMin = temperMin.toFixed(0);
                forecastFour.textContent = temperMax +" / " +temperMin + "°C";
                setIcon(icon, document.querySelector('.ikona4'), "#a5a5a5");
             

                console.log(cast);
                var { temperatureMax, temperatureMin, icon } = cast.daily.data[5];
                temperMax = temperatureMax;
                temperMax = (temperMax-32)*(5/9);
                temperMax = temperMax.toFixed(0);
                temperMin = temperatureMin;
                temperMin = (temperMin-32)*(5/9);
                temperMin = temperMin.toFixed(0);
                forecastFive.textContent = temperMax +" / " +temperMin + "°C";
                setIcon(icon, document.querySelector('.ikona5'), "#878787");
                
                
                console.log(cast);
                var { temperatureMax, temperatureMin, icon } = cast.daily.data[6];
                temperMax = temperatureMax;
                temperMax = (temperMax-32)*(5/9);
                temperMax = temperMax.toFixed(0);
                temperMin = temperatureMin;
                temperMin = (temperMin-32)*(5/9);
                temperMin = temperMin.toFixed(0);
                forecastSix.textContent = temperMax +" / " +temperMin + "°C";
                setIcon(icon, document.querySelector('.ikona6'), "#696969");
                
                
                
                console.log(cast);
                var { temperatureMax, temperatureMin, icon } = cast.daily.data[7];
                temperMax = temperatureMax;
                temperMax = (temperMax-32)*(5/9);
                temperMax = temperMax.toFixed(0);
                temperMin = temperatureMin;
                temperMin = (temperMin-32)*(5/9);
                temperMin = temperMin.toFixed(0);
                forecastSeven.textContent = temperMax +" / " +temperMin + "°C";
                setIcon(icon, document.querySelector('.ikona7'), "#4b4b4b");

            })

        //}); 
           
    //}

    setTimeout(weather, 300000)
};
function setIcon(icon, iconID, colorID){
    const skycons = new Skycons({color: colorID});
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);

}











weather();
showTime();
showDate();
showDay();
