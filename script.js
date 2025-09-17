const images = [
    'Images/image1.jpeg', ' Images/image1.jpeg',
    'Images/image3.jpeg', 'Images/image4.jpeg',
    'Images/image5.jpeg', 'Images/image6.jpeg',
    'Images/image7.jpeg', 'Images/image8.jpeg',
    'Images/image9.jpeg', 'Images/image10.jpeg',
    'Images/image11.jpeg', 'Images/image12.jpeg',
    'Images/image13.jpeg', 'Images/image14.jpeg',
    'Images/image15.jpeg', 'Images/image16.jpeg',
    'Images/image17.jpeg', 'Images/image18.jpeg',
    'Images/image19.jpeg', 'Images/image20.jpeg',
    'Images/image21.jpeg', 'Images/image22.jpeg',
    'Images/image23.jpeg', 'Images/image24.jpeg',
    'Images/image25.jpeg', 'Images/image26.jpeg',
    'Images/image27.jpeg', 'Images/image28.jpeg'
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
    pageImgLeft.onerror = () => { pageImgLeft.src = 'Images/oops.png'; };
    pageImgRight.onerror = () => { pageImgRight.src = 'Images/oops.png'; };

    pageImgLeft.src = images[currentPage];
    pageImgRight.src = images[currentPage + 1] || 'Images/oops.png';

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

