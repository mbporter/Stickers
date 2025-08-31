const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image1.jpg' // Add more as needed
];

document.addEventListener('DOMContentLoaded', function() {
    let currentPage = 0;
    const pageImgLeft = document.getElementById('page-img-left');
    const pageImgRight = document.getElementById('page-img-right');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    function animateFlip(direction) {
        // Remove previous animation classes
        pageImgLeft.classList.remove('flip-in', 'flip-out');
        pageImgRight.classList.remove('flip-in', 'flip-out');

        // Add animation classes
        if (direction === 'next') {
            pageImgLeft.classList.add('flip-out');
            pageImgRight.classList.add('flip-out');
        } else {
            pageImgLeft.classList.add('flip-in');
            pageImgRight.classList.add('flip-in');
        }

        // Wait for animation, then update images and remove classes
        setTimeout(() => {
            updatePage();
            pageImgLeft.classList.remove('flip-in', 'flip-out');
            pageImgRight.classList.remove('flip-in', 'flip-out');
        }, 600);
    }

    function updatePage() {
        pageImgLeft.src = images[currentPage];
        pageImgRight.src = images[currentPage + 1] || '';
    }

    prevBtn.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage -= 2;
            animateFlip('prev');
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPage < images.length - 2) {
            currentPage += 2;
            animateFlip('next');
        }
    });

    // Initialize
    updatePage();
});

