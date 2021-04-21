/* Live Watch */
function startTime(){
  let today = new Date();//날짜 생성자
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  //console.log(h+'시 '+m+'분 '+s+'초');
  if( h == 17 && m >= 10 && m < 21){
    document.getElementById('txt').innerHTML = '쉬는 시간입니다.';
  }else{
    document.getElementById('txt').innerHTML = '수업시간 입니다. '+h+':'+m+':'+s;
  }
  let t = setTimeout(startTime,1000);
}

function checkTime(i){
  if(i < 10){
    i = '0' + i;
  }
  return i;
}

startTime();
