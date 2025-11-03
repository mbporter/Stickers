// Keep a raw list and normalize (trim) entries so accidental spaces or
// inconsistent extensions don't break indexing or counting.
const imagesRaw = [
    'Images/image2.jpg', ' Images/image1.jpeg',
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

// Trim whitespace and normalize the array used by the flipbook logic.
const images = imagesRaw.map(s => s.trim());
 
document.addEventListener('DOMContentLoaded', function() {
    let currentPage = 0;
    // Use ceil so an odd number of images still produces the correct
    // number of spreads (last spread will show an 'oops' or single image).
    const totalSpreads = Math.ceil(images.length / 2);

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
        // store target page (left image index) on the button for clarity
        btn.dataset.page = i * 2;
        btn.addEventListener('click', function() {
            // Provide immediate visual feedback (show active state right away)
            pageButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            // Jump to the requested spread (animation will update the page after)
            animateFlip('jump', Number(this.dataset.page));
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
        // Ensure image error fallback
        pageImgLeft.onerror = () => { pageImgLeft.src = 'Images/oops.png'; };
        pageImgRight.onerror = () => { pageImgRight.src = 'Images/oops.png'; };

        // Clamp currentPage so we don't go out of bounds. Keep it even so it
        // always represents the left page index of the spread.
        if (currentPage < 0) currentPage = 0;
        if (currentPage > images.length - 2) currentPage = Math.max(0, images.length - 2);

        pageImgLeft.src = images[currentPage] || 'Images/oops.png';
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

