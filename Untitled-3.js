(function(){
  let screen = document.querySelector('.screen');
  let buttons = document.querySelectorAll('.btn');
  let clear = document.querySelector('.btn-clear');
  let equal = document.querySelector('.btn-equal');
  let del = document.querySelector('.btn-delete');
    })

  
function operates (a, b) {
    let output = 0;
    output = a+b;
    return output;
  }
  function operates (a, b) {
    let output = 0;
    output = a-b;
    return output;
}
 function operates (a, b) {
    let output = 0;
    output = a*b;
    return output;
}
  function operates (a, b) {
      let output = 0;
      output = a/b;
      return output;
}
  console.log(operates(a,b));
  clear.addEventListener('click', function(e){
    screen.value = '';
  })

