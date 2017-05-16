
var ah = 'ah';
  var cookies = 0;
  var bouton = document.getElementById('bouton');

  document.getElementById('bouton').addEventListener('click', function() {
    multCookies();
  });

function rand() {
  return(Math.round(Math.random()*255));
}

function is_int(value){
  if((parseFloat(value) == parseInt(value)) && !isNaN(value)){
      return true;
  } else {
      return false;
  }
}

function multCookies() {
  cookies = cookies + 1;
  bouton.value = cookies;
  bouton.style.width = 20 + 2* cookies + "px";
  bouton.style.height = 20 + 2* cookies + "px";
  var couleur = '"rgb('+ rand() + ', ' + rand() + ', ' + rand() +')"';
  bouton.style.backgroundColor = couleur;
  if (is_int(cookies/10) === true) { dizaine(cookies/10) }
}

function dizaine(n) {
    var p = document.createElement('p');
    p.innerText = n + ' dizaines';
    document.body.appendChild(p);
  }



  // ah = ah.concat('ah');
  // document.getElementById('rien').placeholder = ah;
