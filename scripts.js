var line = 0;
var count = 0;
var interval = 1;

function next() {
  line += 1;

  let id = "line" + line.toString();

  document.getElementById(id).style.display = 'block';

  if (line < 33) {
    document.getElementById('big2').style.display = 'none';
  } else {
    document.getElementById('big2').style.display = 'block';
  }
}

setInterval(function() {
  if (line < 25) {
    let num = "Accessing Virtual Memory @index 0x";

    if (getRandomInt(0,3) == 0) {
      num = "Mapping Permission Configuration @uesrID 0x";
    } else if (getRandomInt(0,3) == 1) {
      num = "Extracting Data Files @fileLocation 0x";
    } else if (getRandomInt(0,3) == 2) {
      num = "Retrieving VRAM @config 0x";
    } else {
      num = "Instantiating Memory @terminal 0x"
    }

    let possible = "ABCDEF0123456789";

    for (let i = 0; i < getRandomInt(4,256); i++)
      num += possible.charAt(Math.floor(Math.random() * possible.length));

    document.getElementById('repeat').innerHTML = num;
    if (getRandomInt(0,100) < 5) {
      document.getElementById('repeat').style.display = 'block';
    } else {
      document.getElementById('repeat').style.display = 'none';
    }
  }
}, 100);

setInterval(function() {
  if (line > 18 && line < 26) {
    if (count % 3 == 0)
      document.body.style.background = "red";
    if (count % 3 == 1)
      document.body.style.background = "green";
    if (count % 3 == 2)
      document.body.style.background = "white";
  }
  if (line < 33) {
    if (line > 9 && line < 26) {
      if (getRandomInt(0,200) < line/5)
        document.getElementById('big').style.display = "block";
      else {
        document.getElementById('big').style.display = "none";
      }
    } else {
      document.getElementById('big').style.display ="none";
    }
  }
}, 25);

setInterval(function() {
  if (line < 25) {
    document.getElementById("next").innerHTML = 'next';
    if (count % 4 == 0)
      document.getElementById("next").style.background = 'white';
    if (count % 4 == 1)
      document.getElementById("next").style.background = 'grey';
    if (count % 4 == 2) {
      document.getElementById("next").style.background = 'black';
      document.getElementById("next").style.color = "grey";
    }
    if (count % 4 == 3)
      document.getElementById("next").style.background = 'white';
    count += 1;
    if (getRandomInt(0, 100) <= 2)
      document.getElementById("next").innerHTML = 'stop';
    interval = getRandomInt(20,5000);
  } else {
    document.body.style.background = "black";
  }
}, interval);

setInterval(function () {
  let mod = 6
  if (line > 30) {
    if (getRandomInt(0,1) == 0)
      document.getElementById('big2').innerHTML = "ALIVE";
    else {
      document.getElementById('big2').innerHTML = "VIVUS";
    }
  }
  if (count % mod == 0) {
    document.getElementById('big2').style.color = 'red';
  }
  if (count % mod == 1) {
    document.getElementById('big2').style.color = 'pink';
  }
  if (count % mod == 2) {
    document.getElementById('big2').style.color = 'yellow';
  }
  if (count % mod == 3) {
    document.getElementById('big2').style.color = 'white';
  }
  if (count % mod == 4) {
    document.getElementById('big2').style.color = 'blue';
  }
  if (count % mod == 5) {
    document.getElementById('big2').style.color = 'green';
  }
  count += 1;
}, 20);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
