let btn = document.getElementById('Capa_1');
let sirenField = document.querySelector('.siren-field')
let left = document.querySelector('.left')
let right = document.querySelector('.right')
const audio = new Audio('./assets/audio/siren.mp3')


let sirenOn = null,
    sirenOff = null



btn.addEventListener('click', (e) => {
  btn.parentElement.classList.toggle('active')
 
  
  
  if(btn.parentElement.classList.contains('active')) {
    sirenField.classList.add('active')
    audio.play()
     setInterval(() => {
    if(btn.parentElement.classList.contains('active')) {
      left.classList.add('active')
      right.classList.remove('active')
    }   
  }, 500)
  setInterval(() => {
    if(btn.parentElement.classList.contains('active')) {
      left.classList.remove('active')
      right.classList.add('active')
    }   
  }, 1000)
  }
   else {
    clearInterval(sirenOn)
    clearInterval(sirenOff)
    sirenField.classList.remove('active')
    left.classList.remove('active')
    right.classList.remove('active')
    audio.pause()
  }
  clearInterval(sirenOn)
  clearInterval(sirenOff)
})

