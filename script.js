const images = [
    'images/image1.jpg', 'images/image2.jpg',
    'images/image3.jpg', 'images/image4.jpg',
    'images/image5.jpg', 'images/image6.jpg',
    'images/image7.jpg', 'images/image8.jpg',
    'images/image9.jpg', 'images/image10.jpg',
    'images/image11.jpg', 'images/image12.jpg',
    'images/image13.jpg', 'images/image14.jpg',
    'images/image15.jpg', 'images/image16.jpg',
    'images/image17.jpg', 'images/image18.jpg',
    'images/image19.jpg', 'images/image20.jpg',
    'images/image21.jpg', 'images/image22.jpg',
    'images/image23.jpg', 'images/image24.jpg',
    'images/image25.jpg', 'images/image26.jpg',
    'images/image27.jpg', 'images/image28.jpg'
];

document.addEventListener('DOMContentLoaded', function() {
    let currentPage = 0;
    const totalSpreads = images.length / 2; // 14 spreads

    const pageImgLeft = document.getElementById('page-img-left');
    const pageImgRight = document.getElementById('page-img-right');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const flipbookPages = document.getElementById('flipbook-pages');

    // Create page buttons
    const pageButtons = [];
    for (let i = 0; i < totalSpreads; i++) {
        const btn = document.createElement('button');
        btn.className = 'page-btn';
        btn.textContent = (i + 1);
        btn.addEventListener('click', function() {
            animateFlip('jump', i * 2);
        });
        flipbookPages.appendChild(btn);
        pageButtons.push(btn);
    }

    function updateActiveButton() {
        pageButtons.forEach((btn, idx) => {
            btn.classList.toggle('active', Math.floor(currentPage / 2) === idx);
        });
    }

    function updatePage() {
        pageImgLeft.src = images[currentPage];
        pageImgRight.src = images[currentPage + 1] || '';
        updateActiveButton();
    }

    function animateFlip(direction, targetPage = null) {
        pageImgLeft.classList.remove('flip-in', 'flip-out');
        pageImgRight.classList.remove('flip-in', 'flip-out');

        if (direction === 'next' || direction === 'jump') {
            pageImgLeft.classList.add('flip-out');
            pageImgRight.classList.add('flip-out');
        } else if (direction === 'prev') {
            pageImgLeft.classList.add('flip-in');
            pageImgRight.classList.add('flip-in');
        }

        setTimeout(() => {
            if (direction === 'jump' && targetPage !== null) {
                currentPage = targetPage;
            } else if (direction === 'next') {
                currentPage += 2;
            } else if (direction === 'prev') {
                currentPage -= 2;
            }
            updatePage();
            pageImgLeft.classList.remove('flip-in', 'flip-out');
            pageImgRight.classList.remove('flip-in', 'flip-out');
        }, 600);
    }

    prevBtn.addEventListener('click', () => {
        if (currentPage > 0) {
            animateFlip('prev');
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPage < images.length - 2) {
            animateFlip('next');
        }
    });

    // Initialize
    updatePage();
});

