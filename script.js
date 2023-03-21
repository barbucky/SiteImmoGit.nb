let site = [
  {
    id: 'img1',
    link:'.livi_small',
    urlBig:'img/livingroom.jpg'
  },
  {
    id: 'img2',
    link:'.dini_small',
    urlBig:'img/diningroom.jpg'
  },
  {
    id: 'img3',
    link:'.bed_small',
    urlBig:'img/bedroom.jpg'
  },
  {
    id: 'img4',
    link:'.livi2_small',
    urlBig:'img/livingroom2.jpg'
  }
  
]

function switchImg(image){
  let sourceImage = document.querySelector('.Room')
  sourceImage.setAttribute('src', image.urlBig)

}

function run(){
  site.forEach((image)=>{
    let img = document.querySelector(image.link);
    img.addEventListener('click', ()=>{
      switchImg(image)
    })
  });
  
}

run();

// let img = document.querySelector('.Room');
// let small1 = document.querySelector('.livi_small');
// let small2 = document.querySelector('.dini_small');
// let small3 = document.querySelector('.bed_small');
// let small4 = document.querySelector('.livi2_small');

// function changeImg1(){
//   img.setAttribute('src', 'img/livingroom.jpg')
// }
// small1.addEventListener('click',changeImg1)

// function changeImg2(){
//   img.setAttribute('src', 'img/diningroom.jpg')
// }
// small2.addEventListener('click',changeImg2)

// function changeImg3(){
//   img.setAttribute('src', 'img/bedroom.jpg')
// }
// small3.addEventListener('click',changeImg3)
// function changeImg4(){
//   img.setAttribute('src', 'img/livingroom2.jpg')
// }
// small4.addEventListener('click',changeImg4)

