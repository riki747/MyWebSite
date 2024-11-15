// console.log('hello word')
        
// // alert('selamat datang di web pemograman 1')
// document.write('selamat datang di pemograman web')

// let nama = 'ujang'
// nama = 'riki'


// console.log(nama)
// console.log(nama);

// const nilai = 50
// if(nilai > 80){
//     console.log('lulus')    
// } else {
//     console.log('tidak lulus')
// }

// nama = 'anj'
// nama = 'yoi'
// console.log(nama)
// console.log(nama)

// 
// const absensi = 50
// const kartu = false

// if (absensi >= 80 && kartu == true){
//     console.log('boleh ujian') 
// }else if(absensi >=  80 || kartu==false){
//     console.log('harus bayar');
// }else{
//     console.log('tidak boleh ujian');   
// }


// perulangan
// for (let i = 0; i<10; i++){
//     console.log('yaolllllll');  
// }



// let i = 0
// while(i < 5){
//     console.log('perulangan ke-'+i);
//     i++ 
// }



// function tambah(a,b) {
//     return a + b
// }
// console.log(tambah(1,4))
const d = document;
const $q = d.querySelectorAll.bind(d);
const $g = d.querySelector.bind(d);
const $prev = $g(".prev");
const $next = $g(".next");
const $list = $g(".carousel__list");
let auto;
let pauser;

const getActiveIndex = () => {
  const $active = $g("[data-active]");
  return getSlideIndex($active);
};

const getSlideIndex = ($slide) => {
  return [...$q(".carousel__item")].indexOf($slide);
};

const prevSlide = () => {
  const index = getActiveIndex();
  const $slides = $q(".carousel__item");
  const $last = $slides[$slides.length - 1];
  $last.remove();
  $list.prepend($last);
  activateSlide($q(".carousel__item")[index]);
};
const nextSlide = () => {
  const index = getActiveIndex();
  const $slides = $q(".carousel__item");
  const $first = $slides[0];
  $first.remove();
  $list.append($first);
  activateSlide($q(".carousel__item")[index]);
};

const chooseSlide = (e) => {
  const max = window.matchMedia("screen and ( max-width: 600px)").matches
    ? 5
    : 8;
  const $slide = e.target.closest(".carousel__item");
  const index = getSlideIndex($slide);
  if (index < 3 || index > max) return;
  if (index === max) nextSlide();
  if (index === 3) prevSlide();
  activateSlide($slide);
};

const activateSlide = ($slide) => {
  if (!$slide) return;
  const $slides = $q(".carousel__item");
  $slides.forEach((el) => el.removeAttribute("data-active"));
  $slide.setAttribute("data-active", true);
  $slide.focus();
};

const autoSlide = () => {
  nextSlide();
};

const pauseAuto = () => {
  clearInterval(auto);
  clearTimeout(pauser);
};

const handleNextClick = (e) => {
  pauseAuto();
  nextSlide(e);
};

const handlePrevClick = (e) => {
  pauseAuto();
  prevSlide(e);
};

const handleSlideClick = (e) => {
  pauseAuto();
  chooseSlide(e);
};

const handleSlideKey = (e) => {
  switch (e.keyCode) {
    case 37:
    case 65:
      handlePrevClick();
      break;
    case 39:
    case 68:
      handleNextClick();
      break;
  }
};

const startAuto = () => {
  auto = setInterval(autoSlide, 3000);
};

startAuto();

$next.addEventListener("click", handleNextClick);
$prev.addEventListener("click", handlePrevClick);
$list.addEventListener("focusin", handleSlideClick);
$list.addEventListener("keyup", handleSlideKey);






