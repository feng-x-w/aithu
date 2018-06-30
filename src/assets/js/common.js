export function dates (times) {
  var d = new Date(times);
  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  var day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate();
  var hour = d.getHours();
  var minutes = d.getMinutes();
  var seconds = d.getSeconds();
  return  year+ '-' + month + '-' + day;
}