let jsbk = {};
jsbk = {
    // rem:function(){
    //     doc.documentElement.style.fontSize = doc.documentElement.clientWidth / 7.5 + 'px';
    //     win.onresize = function () {
    //         doc.documentElement.style.fontSize = doc.documentElement.clientWidth / 7.5 + 'px';
    //     }
    // },
    TextEllipsis:function(txt,len) {
        if (!txt) { return ''};
        var txt = txt.toString();
        if (txt.length>len)
          txt=txt.substring(0,len)+'...';
        return txt;
    },
    //取当前时间的前几个月的时间
    setMonth:function(n){
        var startTime = new Date();
            startTime.setMonth(startTime.getMonth()-n);
        var year = startTime.getFullYear();
        var month = startTime.getMonth()+1;
        if (month < 10) {month = '0'+month}
        var day = startTime.getDate()
        return year+'-'+month+'-'+day;
    },
    timeType:function(time,type) {
        //默认的数据格式为2019-01-15 23:50:00，在苹果上2019/01/15 23:50:00这种格式才行
        var gsTime = time.toString().split(' ');
        var gsTimeD = gsTime[0].split('-');
        gsTime =gsTimeD[0]+'/'+ gsTimeD[1]+'/'+gsTimeD[2]+' '+gsTime[1];
        if (!time) { return ''};
        if (time.indexOf('-') > 0) {
            time = gsTime;
        }
        var t = new Date(time);
        var o = {
            "M+": t.getMonth() + 1, //month
            "d+": t.getDate(), //day
            "h+": t.getHours(), //hour
            "m+": t.getMinutes(), //minute
            "s+": t.getSeconds(), //second
            "q+": Math.floor((t.getMonth() + 3) / 3), //quarter
            "S": t.getMilliseconds() //millisecond
        }
        if (/(y+)/.test(type)) {
            type = type.replace(RegExp.$1,(t.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(type)){
                type = type.replace(RegExp.$1,RegExp.$1.length == 1 ? o[k] :("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return type;
    },
   getcookie:function(name) {
        var cookie_start = document.cookie.indexOf(name);
        var cookie_end = document.cookie.indexOf(";", cookie_start);
        return cookie_start == -1 ? '' : unescape(document.cookie.substring(
                cookie_start + name.length + 1,
                (cookie_end > cookie_start ? cookie_end : document.cookie.length)));
    };

    delcookie:function (name) {  
        var exp = new Date(); //当前时间   
        exp.setTime(exp.getTime() - 1); //删除cookie 只需将cookie设置为过去的时间    
        var cval = getcookie(name);  
       
            document.cookie = name + "=" + cval + ";expires="+ exp.toGMTString();  
    }

    setcookie:function(name,value) {
        var Days = 30;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days*24*60*60*1000);
        document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
    };

    //获取url中"returl"符后的字串 
    GetUrlSearch: function(returl) {
        var url = location.search;
        var strs = url.split(returl);
        if (strs.length > 1) {
            return strs[1];
        } else {
            return '';
        }
    },

    GetQueryString: function(name) { //获取指定name的url参数
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return (r[2]);
        return null;
    },
};
exports {
    TextEllipsis:jsbk.TextEllipsis,
    setMonth:jsbk.setMonth,
    timeType:jsbk.timeType,
    getcookie:jsbk.getcookie,
    delcookie:jsbk.delcookie,
    setcookie:jsbk.setcookie,
    GetUrlSearch:jsbk.GetUrlSearch
    GetQueryString:jsbk.GetQueryString

}