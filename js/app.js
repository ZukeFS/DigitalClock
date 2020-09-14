function updateClock(){
    var now = new Date();
    var dname = now.getDay();
    var mon = now.getMonth();
    var dnum = now.getDate();
    var yr = now.getFullYear();
    var hr = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var pe = "AM";

    if(hr == 0){
        hr = 12;
    }
    else if(hr > 12){
        hr = hr-12;
        pe = "PM";
    }

    Number.prototype.pad = function(digits){
        for(var n=this.toString(); n.length<digits; n=0+n);
        return n;
    }

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
    var values = [week[dname], months[mon], dnum.pad(2), yr, hr.pad(2), min.pad(2), sec.pad(2), pe];
    
    for(var i=0; i<ids.length; i++){
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }
}

function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1);
}