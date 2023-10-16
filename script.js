let prevScrollPos = window.pageYOffset;
const header = document.querySelector(".header_main");
const button = document.getElementsByClassName("button");
const demo = document.getElementById("inputContainer");
const api = document.getElementsByClassName('api')[0];
var url;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = "-120px";
  }
  prevScrollPos = currentScrollPos;
}

function getapi() {
}

api.addEventListener('change', function(){
  const apiname = api.value;
  while (api.nextElementSibling) {
    api.parentNode.removeChild(api.nextElementSibling);
  }

  switch(apiname){
    case 'bard':
      console.log('1');
      break;
    case 'blackai':
      console.log('2');
      break;
    case 'advice':
      console.log('3');
      break;
    case 'ytdl':
      break;
    case 'fun-fact':
      break;
    case 'historyfigure':
      demo.innerHTML= '';
      
      const paragraph = document.createElement('p');
      paragraph.textContent = 'Enter a figure name:';
      const textBox = document.createElement('input');
  
      textBox.setAttribute('type', 'text');
      textBox.setAttribute('placeholder', 'Figure name');
      textBox.classList.add('parameter');
      const sendRequestButton = document.createElement('button');
      textBox.classList.add('sendreq');
      
      sendRequestButton.textContent = 'Send Request';
      
      sendRequestButton.addEventListener('click', function() {
        const figureName = textBox.value;
        console.log('Figure name:', figureName);
      });
      
      api.parentNode.appendChild(textBox);
      api.parentNode.appendChild(sendRequestButton);
      break;
    case 'spamngl':
      break;
    case 'grammarly':
      break;  
    case 'anime':
      break;
    case 'logo':
      break;
  };
});
