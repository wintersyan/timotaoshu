Date.prototype.Format = function(fmt) { //author: zouqj
    fmt = fmt ? fmt : 'yyyy-MM-dd hh:mm';
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};

Array.prototype.insert = function(start, value) {
    this.splice(start, 0, value);
    return this;
}

Array.prototype.remove = function(value) {
    let index = this.indexOf(value);
    if(index != -1) {
        this.splice(index,1);
    }
    return this;
}
Array.prototype.removeArr = function(arr) {
    let i = 0, length = arr.length;
    let thisLength = this.length;
    for(i; i<length; i++) {
        let that = this.remove(arr[i]);
        while(that.length != thisLength) {
            thisLength--;
            that = this.remove(arr[i]);
        }
    }
    return this;
}