//START NAVBAR
    //for navbutton
const navbuttons = document.querySelector('.navbuttons');
navbuttons.addEventListener('click',()=> navbuttons.classList.toggle('changes'));
//END NAVBAR

//START PROJECTS SECTION
// const gallerylists = document.querySelectorAll('.gallerylists');
// const filterbcjs = document.querySelectorAll('.filters.bcj');
// const filtercsss = document.querySelectorAll('.filters.css');
// const filterjss = document.querySelectorAll('.filters.js');

// gallerylists.forEach((gallerylist)=>{
//     // console.log(gallerylist);
 
//      gallerylist.addEventListener('click',(e)=>{
//          let datafilter = gallerylist.getAttribute('data-filter');
//          // console.log(datafilter);
 
//          removeactiveitem();
//          e.target.classList.add('activeitems');
 
//          if (datafilter === 'all'){
 
//              filterbcjs.forEach(filterbcj=>{
//                  filterbcj.style.display = 'inline-block';
//              });
 
//              filtercsss.forEach(filtercss=>{
//                  filtercss.style.display = 'inline-block';
//              });
 
//              filterjss.forEach(filterjs=>{
//                  filterjs.style.display = 'inline-block';
//              });
 
//          }else if (datafilter === 'bcj'){
 
//              filterbcjs.forEach(filterbcj=>{
//                  filterbcj.style.display = 'inline-block';
//              });
 
//              filtercsss.forEach(filtercss=>{
//                  filtercss.style.display = 'none';
//              });
 
//              filterjss.forEach(filterjs=>{
//                 filterjs.style.display = 'none';
//              });
 
//          }else if (datafilter === 'css'){
 
//              filterbcjs.forEach(filterbcj=>{
//                 filterbcj.style.display = 'none';
//              });
 
//              filtercsss.forEach(filtercss=>{
//                 filtercss.style.display = 'inline-block';
//              });
 
//              filterjss.forEach(filterjs=>{
//                 filterjs.style.display = 'none';
//              });
 
//          }else{
 
//              filterbcjs.forEach(filterbcj=>{
//                  filterbcj.style.display = 'none';
//              });
 
//              filtercsss.forEach(filtercss=>{
//                  filtercss.style.display = 'none';
//              });
 
//              filterjss.forEach(filterjs=>{
//                  filterjs.style.display = 'inline-block';
//              });
//          }
//      });
//  });
 
//  //remove current active item
//  function removeactiveitem(){
//      gallerylists.forEach(gallerylist=>{
//         gallerylist.classList.remove('activeitems');
//      });
//  }
//END PROJECTS SECTION

//START SCROLL SMOOTH & PROJECT SECTION
$(document).ready(function(){

    // smooth scrolling
    $('a[href*="#"]').on('click',function(e){

        e.preventDefault();

        $('html, body').animate({
           
            scrollTop : $($(this).attr('href')).offset().top,

        },
            500,
            'linear'
        );

    });

    //START PROJECT SECTION
    $('.gallerylists').click(function (){
        let datafilter = $(this).attr('data-filter');
        // console.log(datafilter);
    
        if(datafilter === 'all'){
            $('.filters').show(800);
        }else{
            $('.filters').not('.'+datafilter).hide(800);
    
            $('.filters').filter('.'+datafilter).show(800);
        }
    });
    
    //for ul active
        $('.gallerylists').click(function (){
            $(this).addClass('activeitems').siblings().removeClass('activeitems');
        });

    //END PROJECT SECTION

});
//END SCROLL SMOOTH & PROJECT SECTION