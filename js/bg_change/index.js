const rect = document.querySelector('#center');

rect.addEventListener('mousemove', function(details){
    var rectangleLocation = rect.getBoundingClientRect();
    console.log(details.clientX - rectangleLocation.left);
})