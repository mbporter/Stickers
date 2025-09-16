const images = [
    'images/image1.jpeg', 'images/image2.jpeg',
    'images/image3.jpeg', 'images/image4.jpeg',
    'images/image5.jpeg', 'images/image6.jpeg',
    'images/image7.jpeg', 'images/image8.jpeg',
    'images/image9.jpeg', 'images/image10.jpeg',
    'images/image11.jpeg', 'images/image12.jpeg',
    'images/image13.jpeg', 'images/image14.jpeg',
    'images/image15.jpeg', 'images/image16.jpeg',
    'images/image17.jpeg', 'images/image18.jpeg',
    'images/image19.jpeg', 'images/image20.jpeg',
    'images/image21.jpeg', 'images/image22.jpeg',
    'images/image23.jpeg', 'images/image24.jpeg',
    'images/image25.jpeg', 'images/image26.jpeg',
    'images/image27.jpeg', 'images/image28.jpeg'
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

