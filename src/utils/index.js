// 姓名校验
export function checkName(str) {
    if (str == null || str == "") return false;
    var reg = /^[a-zA-Z\u4e00-\u9fa5]+$/
    return reg.test(str)
}

// 身份证号校验
export function checkID(str) {
    var city = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙古",
        21: "辽宁",
        22: "吉林",
        23: "黑龙江 ",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北 ",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏 ",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门",
        91: "国外 "
    };
    var pass = true;
    var msg = "验证成功";
    //验证身份证格式（6个地区编码，8位出生日期，3位顺序号，1位校验位）
    if (!str || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/.test(str)) {
        pass = false;
        msg = "身份证号格式错误";
    } else if (!city[str.substr(0, 2)]) {
        pass = false;
        msg = "身份证号地址编码错误";
    } else {
        //18位身份证需要验证最后一位校验位
        if (str.length == 18) {
            str = str.split('');
            //∑(ai×Wi)(mod 11)
            //加权因子
            var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
            //校验位
            var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
            var sum = 0;
            var ai = 0;
            var wi = 0;
            for (var i = 0; i < 17; i++) {
                ai = str[i];
                wi = factor[i];
                sum += ai * wi;
            }
            if (parity[sum % 11] != str[17].toUpperCase()) {
                pass = false;
                msg = "身份证号校验位错误";
            }
        }
        if (str.length != 18) {
            pass = false;
        }
    }
    return pass;
}

// 手机号码校验
export function checkMobile(str){ 
    if (str == "" || str == null) {
        return false;
    }
    var reg = /^((\+?86)|(\(\+86\)))?(13[012356789][0-9]{8}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8}|199[0-9]{8}|1349[0-9]{7})$/
    return reg.test(str)
}

// 固话号码校验
export function checkPhone(str){ 
    if (str == "" || str == null) {
        return false;
    }
    var reg = /^(0[0-9]{2,3}-?)?([2-9][0-9]{6,7})+(-?[0-9]{1,4})?$/
    return reg.test(str)
}

// 纯数字校验
export function checkNumber(str){ 
    if (str == "" || str == null) {
        return false;
    }
    var reg = /^\d+$/;
    return reg.test(str)
}

// 四舍五入
export function getInt(str) {
    return Math.round(str)
}

// 非空校验
export function checkSpace(str){ 
    if (str == "" || str == null) {
        return false;
    }
    if (str.split(" ").join("").length === 0) {
        return false;
    }
}

//     //非空校验
//     isEmpty:function (str) {
//         if (str == null || str == "") return false;
//     },

// var checkService = {
//     // 不校验
//     none: function () {
//         return true;
//     },

//     //非空校验
//     isEmpty:function (str) {
//         if (str == null || str == "") return false;
//     },

//     // 只能输入数字[0-9]
//     isDigits: function (str) {
//         if (str == null || str == "") return true;
//         var reg = /^\d+$/;
//         return reg.test(str);
//     },

//     // 匹配english
//     isEnglish: function (str) {
//         if (str == null || str == "") return true;
//         var reg = /^[A-Za-z]+$/;
//         return reg.test(str);
//     },

//     // 匹配integer(包含正负)
//     isInteger: function (str) {
//         if (str == null || str == "") return true;
//         var reg = /^[-\+]?\d+$/;
//         return reg.test(str);
//     },

//     // 匹配汉字
//     isChinese: function (str) {
//         if (str == null || str == "") return true;
//         var reg = /^[\u4e00-\u9fa5]+$/;
//         return reg.test(str);
//     },

//     // 匹配中文(双字节字符,包括汉字和符号)
//     isChineseChar: function (str) {
//         if (str == null || str == "") return true;
//         var reg = /^[\u0391-\uFFE5]+$/;
//         return reg.test(str);
//     },

//     // 匹配URL
//     isUrl: function (str) {
//         if (str == null || str == "") return true;
//         var reg = /^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\’:+!]*([^<>\"])*$/;
//         return reg.test(str);
//     },

//     // 字符验证，只能包含中文、英文、数字、下划线、空格。
//     stringCheck: function (str) {
//         if (str == null || str == "") return true;
//         var reg = /^[a-zA-Z0-9\u4e00-\u9fa5_ ]+$/;
//         return reg.test(str);
//     },

//     //字符长度校验（最长64位）
//     stringLengthCheck: function (str, length) {
//         if (str == null || str == "") return true;
//         length = length || 64;
//         if (str.length > length) return false;
//         return true;
//     },
//     //IP格式验证
//     isIP: function (str) {
//         if (str == null || str == "") return true;
//         var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
//         return reg.test(str);
//     }
// };