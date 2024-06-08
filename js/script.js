$(document).ready(function(){
    $("#banners ul").bxSlider({
        auto:true,
        speed: 1000,
        mode:"horizontal"
    });

    $('.fotos').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, 
            opener: function(element) {
                return element.find('img');
            }
        }
    });
});

function showGif(container) {
    container.querySelector('.jpeg').style.display = 'none';
    container.querySelector('.gif').style.display = 'block';
}

function showJpeg(container) {
    container.querySelector('.gif').style.display = 'none';
    container.querySelector('.jpeg').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    });

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => {
        observer.observe(section);
    });
});
