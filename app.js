$(document).ready(function(){

// alert('JS is up and running!');


 $(function(){
        $(".typewriter").typed({
            strings: ["a web developer.", "a data analyst.", "a writer.", "a mentor.", "a lifelong student.", "Vikash.                   Hi.:)"],
            typeSpeed: 40
        });
    });

  // I am a web developer.
  // I am a scientist.
  // I am a data analyst.
  // I am a writer.
  // I am a reader.
  // I am an athlete.
  // I am a student.
  // I am a mentor.
  // I am Vikash.

// new jBox('Modal', {
//     width: 300,
//     height: 200,
//     attach: $('#resolv'),
//     title: 'Resolv',
//     content: '<i>Hello there!</i>'
// });
 
$('.skill').jBox('Tooltip');
$('#fullpage').fullpage({
        anchors:['about-section', 'portfolio-section', 'skills-section', 'experience-section', 'skills-section']
    });


// function scrollToDiv(name) {
//   var divTag = $("div[name='"+ name + "']");
//   $('html,body').animate({
//     scrollTop: divTag.offset().top},
//                2000); //lengthtime of scroll
// }
// ​
// //use
// ​
// $("#about").click(function() {
//   scrollToDiv('about');
// });
// ​

/////////////////
// Twitter Feed//
/////////////////

// !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
 
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
 
  return t;
}(document, "script", "twitter-wjs"));

});



//   <div class="modal fade" id="resolvModal" tabindex="-1" role="dialog">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
//         <h4 class="modal-title">Resolv</h4>
//       </div>
//       <div class="modal-body">
//         <p><b>Description: </b>A MEAN stack web app that allows users to track and share their New Years Resolutions.</p>
//         <p><b>Technologies: </b>Angular/Bootstrap (front-end), Node/Express/MongoDB (back-end).</p>
//         <p><b>Responsibilities: </b>All stages of development, from schema to deployment.</p>
//         <p><b>Source: </b><a href="https://github.com/project-funtime/resolv" target="_blank">https://github.com/project-funtime/resolv</a></p>
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
//       </div>
//     </div><!-- /.modal-content -->
//   </div><!-- /.modal-dialog -->
// </div><!-- /.modal -->