setInterval(()=>
{ 
    date=new Date();
    hour=date.getHours();
    min=date.getMinutes();
    sec=date.getSeconds();
    hour_rotation=30*hour + min/2;
    min_rotation=6*min;
    sec_rotation=6*sec;
    // h=.innerHTML;
    // m=.innerHTML;
    // s=.innerHTML;

    document.getElementById("hour").style.transform= `rotate(${hour_rotation}deg)`;
    document.getElementById("minute").style.transform= `rotate(${min_rotation}deg)`;
    document.getElementById("second").style.transform= `rotate(${sec_rotation}deg)`;

    },1000)
