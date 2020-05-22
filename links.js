window.onload = function() {
    var x = window.location.search;
    var url = x.searchParams.get("url");
    alert("This link will be opened up in new tab. \r\nMake sure popup blocker is turned off for this website (usually in URL address bar).\t\nTry again once unblocked - Professor Konkol, RVC");
    window.open(url, '_blank');
};

function get(name){
    var url = window.location.search;
    var num = url.search(name);
    var namel = name.length;
    var frontlength = namel+num+1; //length of everything before the value
    var front = url.substring(0, frontlength);
    url = url.replace(front, "");
    num = url.search("&");
    if(num>=0) return url.substr(0,num);
    if(num<0)  return url;
}


//get("list");
