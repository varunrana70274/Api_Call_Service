/* eslint-disable prettier/prettier */
export const Common = {
  baseUrl,
  fileUrl,
  webUrl,
  version,

  longToDate,
  longToDateReverse,
  longToDateTime,

  showHypen,
  showSchoolType,
  showTeacherType,
  getCurrentTimeStamp,
  longToOnlyYear,
  urlFix,
  stringSplit,
  removeZeroDeciaml,
  getRandomNumber,
  priceRound,
  // btnApproveText,
  // btnRejectText,
  // headingApproveText,
  // headingRejectText,
};

function baseUrl() {
  // return "http://localhost:8082/mesua/";
  // return "http://192.168.1.219:8082/mesua/";
  return "http://192.168.1.12:8082/mesua-ferrea/";
  // return 'http://sit.uedeveloper.com:8093/mesua-ferrea/';
  //  return "https://api.mesuaferrea.com/";
}

function fileUrl() {
  // return "http://localhost:8082/mesua/";
  // return "http://192.168.1.219:8082/mesua/";
  return "http://192.168.1.12:8082/mesua-ferrea/";
//  return 'http://sit.uedeveloper.com:8093/'; 
  // return "https://api.mesuaferrea.com/";
}

function webUrl() {
  return 'http://test.mesuaferrea.com/';
  //  return "https://mesuaferrea.com/";
}

function version() {
  return 'v1.3.0 Build 20220909_1200';
}

function urlFix(param) {
  if (!param) return '';
  let url = param.replace(/\s+/g, '-');
  return url.replace(/([^a-zA-Z0-9]+)/g, '-');
}
function stringSplit(param) {
  const string = param;
  const arr = string.split(',');
  return arr;
}
function removeZeroDeciaml(data) {
  const integer = parseFloat(data).toFixed(2);
  return integer.replace(/\.00/, '');
}

function longToDate(text) {
  if (text == undefined || text == 0) {
    return;
  }
  if (typeof text == 'string' || text == '') {
    return text;
  }
  var temp = new Date(text);
  var month = '';
  var date = '';
  if ((temp.getMonth() + 1).toString().length > 1) {
    month = temp.getMonth() + 1;
  } else {
    month = '0' + (temp.getMonth() + 1);
  }
  if (temp.getDate() < 10) date = '0' + temp.getDate();
  else date = temp.getDate();
  var formatted = date + '-' + month + '-' + temp.getFullYear();
  return formatted;
}
function longToOnlyYear(text) {
  if (text == undefined || text == 0) {
    return;
  }
  if (typeof text == 'string' || text == '') {
    return text;
  }
  var temp = new Date(text);
  var formatted = temp.getFullYear();
  return formatted;
}

function longToDateReverse(text) {
  if (text == undefined || text == 0) {
    return;
  }
  if (typeof text == 'string' || text == '') {
    return text;
  }
  var temp = new Date(text);
  var month = '';
  var date = '';
  if ((temp.getMonth() + 1).toString().length > 1) {
    month = temp.getMonth() + 1;
  } else {
    month = '0' + (temp.getMonth() + 1);
  }
  if (temp.getDate() < 10) date = '0' + temp.getDate();
  else date = temp.getDate();
  var formatted = temp.getFullYear() + '-' + month + '-' + date;
  return formatted;
}

function longToDateTime(text) {
  if (text == undefined || text == 0) {
    return;
  }
  if (typeof text == 'string' || text == '') {
    return text;
  }
  var temp = new Date(text);
  var month = '';
  var date = '';

  if ((temp.getMonth() + 1).toString().length > 1) {
    month = temp.getMonth() + 1;
  } else {
    month = '0' + (temp.getMonth() + 1);
  }

  if (temp.getDate() < 10) date = '0' + temp.getDate();
  else date = temp.getDate();

  let time = temp.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  });
  var formatted = date + '-' + month + '-' + temp.getFullYear() + ' ' + time;
  return formatted;
}

function showHypen(value) {
  if (value && value != 'null' && value != 'undefined') {
    return value;
  } else {
    return '-';
  }
}

function showSchoolType(value) {
  switch (value) {
    case 'ELEM':
      return 'Elementary';
    case 'SEC':
      return 'Secondary';
    default:
      return showHypen(value);
  }
}

function showTeacherType(value) {
  switch (value) {
    case 'TE':
      return 'Teacher';
    case 'TU':
      return 'Tutor';
    default:
      return showHypen(value);
  }
}

function getCurrentTimeStamp() {
  return datePipe.transform(new Date(), 'yyyyMMdd_HHmmss');
}

// function btnApproveText(isDisSame) {
//     let text = "Recommend";
//     if (isDisSame == '1') {
//         text = "Approve";
//     }
//     return text;
// }
// function btnRejectText(isDisSame) {
//     let text = "Not Recommend";
//     if (isDisSame == '1') {
//         text = "Reject";
//     }
//     return text;
// }
// function headingApproveText(isDisSame) {
//     let text = "Are you sure want to Recommend?";
//     if (isDisSame == '1') {
//         text = "Are you sure want to Approve?";
//     }
//     return text;
// }
// function headingRejectText(isDisSame) {
//     let text = "Are you sure want to Not Recommend?";
//     if (isDisSame == '1') {
//         text = "Are you sure want to Reject?";
//     }
//     return text;
// }

function getRandomNumber() {
  const min = 1;
  const max = 100;
  const rand = min + Math.random() * (max - min);
  return rand;
}

function priceRound(price) {
  return (Math.round(price * 100) / 100).toLocaleString('INR', {
    minimumFractionDigits: 2,
  });
}
