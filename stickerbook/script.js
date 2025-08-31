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

const texts = [
    "Spread 1: The start to my Sicker Book!",
    "Spread 2: Witch hat atelier spread!",
    "Spread 3: Mix of stickers + We are Frogs.",
    "Spread 4: randomcreativeshop + shopkimmysaur.",
    "Spread 5: byizzyliu (formally mooooonbug).",
    "Spread 6: Mix of stickers!",
    "Spread 7: waffle_zn + wysteribun!",
    "Spread 8: yogurtsnet + Mofusand + michiums!",
    "Spread 9: Shadiaminart + fuyizu.",
    "Spread 10: Sticker Planet.",
    "Spread 11: Sticker Planet.",
    "Spread 12: Sticker Planet.",
    "Spread 13: Sticker Planet.",
    "Spread 14: w0nkk0!"
];

const bottomLeft = [
    { text: "Left box for spread 1.", img: "images/left1.jpg" },
    { text: "Left box for spread 2.", img: "images/left2.jpg" },
    { text: "Left box for spread 3.", img: "images/left3.jpg" },
    { text: "Left box for spread 4.", img: "images/left4.jpg" },
    { text: "Left box for spread 5.", img: "images/left5.jpg" },
    { text: "Left box for spread 6.", img: "images/left6.jpg" },
    { text: "Left box for spread 7.", img: "images/left7.jpg" },
    { text: "Left box for spread 8.", img: "images/left8.jpg" },
    { text: "Left box for spread 9.", img: "images/left9.jpg" },
    { text: "Left box for spread 10.", img: "images/left10.jpg" },
    { text: "Left box for spread 11.", img: "images/left11.jpg" },
    { text: "Left box for spread 12.", img: "images/left12.jpg" },
    { text: "Left box for spread 13.", img: "images/left13.jpg" },
    { text: "Left box for spread 14.", img: "images/left14.jpg" }
];

const bottomRight = [
    { text: "Right box for spread 1.", img: "images/right1.jpg" },
    { text: "Right box for spread 2.", img: "images/right2.jpg" },
    { text: "Right box for spread 3.", img: "images/right3.jpg" },
    { text: "Right box for spread 4.", img: "images/right4.jpg" },
    { text: "Right box for spread 5.", img: "images/right5.jpg" },
    { text: "Right box for spread 6.", img: "images/right6.jpg" },
    { text: "Right box for spread 7.", img: "images/right7.jpg" },
    { text: "Right box for spread 8.", img: "images/right8.jpg" },
    { text: "Right box for spread 9.", img: "images/right9.jpg" },
    { text: "Right box for spread 10.", img: "images/right10.jpg" },
    { text: "Right box for spread 11.", img: "images/right11.jpg" },
    { text: "Right box for spread 12.", img: "images/right12.jpg" },
    { text: "Right box for spread 13.", img: "images/right13.jpg" },
    { text: "Right box for spread 14.", img: "images/right14.jpg" }
];

document.addEventListener('DOMContentLoaded', function() {
    let currentPage = 0;

    const pageImgLeft = document.getElementById('page-img-left');
    const pageImgRight = document.getElementById('page-img-right');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const textBox = document.getElementById('text-box');
    const bottomBoxLeft = document.getElementById('bottom-box-left');
    const bottomBoxRight = document.getElementById('bottom-box-right');
    const flipbookPages = document.getElementById('flipbook-pages');

    // Create page buttons
    const pageButtons = [];
    for (let i = 0; i < 14; i++) {
        const btn = document.createElement('button');
        btn.className = 'page-btn';
        btn.textContent = (i + 1);
        btn.addEventListener('click', function() {
            currentPage = i * 2;
            updatePage();
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
        const spreadIndex = Math.floor(currentPage / 2);

        textBox.innerHTML = `<h2>${texts[spreadIndex] || ""}</h2>`;

        bottomBoxLeft.innerHTML = `
            <h2>${bottomLeft[spreadIndex]?.text || ""}</h2>
            <img src="${bottomLeft[spreadIndex]?.img || ""}" alt="Left box image">
        `;
        bottomBoxRight.innerHTML = `
            <h2>${bottomRight[spreadIndex]?.text || ""}</h2>
            <img src="${bottomRight[spreadIndex]?.img || ""}" alt="Right box image">
        `;

        updateActiveButton();
    }

    prevBtn.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage -= 2;
            updatePage();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPage < images.length - 2) {
            currentPage += 2;
            updatePage();
        }
    });

    // Initialize
    updatePage();
});

