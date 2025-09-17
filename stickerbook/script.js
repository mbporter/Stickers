const images = [
    '../Images/image1.jpeg', '../Images/image1.jpeg',
    '../Images/image3.jpeg', '../Images/image4.jpeg',
    '../Images/image5.jpeg', '../Images/image6.jpeg',
    '../Images/image7.jpeg', '../Images/image8.jpeg',
    '../Images/image9.jpeg', '../Images/image10.jpeg',
    '../Images/image11.jpeg', '../Images/image12.jpeg',
    '../Images/image13.jpeg', '../Images/image14.jpeg',
    '../Images/image15.jpeg', '../Images/image16.jpeg',
    '../Images/image17.jpeg', '../Images/image18.jpeg',
    '../Images/image19.jpeg', '../Images/image20.jpeg',
    '../Images/image21.jpeg', '../Images/image22.jpeg',
    '../Images/image23.jpeg', '../Images/image24.jpeg',
    '../Images/image25.jpeg', '../Images/image26.jpeg',
    '../Images/image27.jpeg', '../Images/image28.jpeg'
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
    // Fallbacks for the main spread images
    pageImgLeft.onerror = () => { pageImgLeft.src = '../Images/oops.png'; };
    pageImgRight.onerror = () => { pageImgRight.src = '../Images/oops.png'; };

    pageImgLeft.src = images[currentPage];
    pageImgRight.src = images[currentPage + 1] || '../Images/oops.png';

    const spreadIndex = Math.floor(currentPage / 2);

    textBox.innerHTML = `<h2>${texts[spreadIndex] || ""}</h2>`;

    // bottom left box
    bottomBoxLeft.innerHTML = `
        <h2>${bottomLeft[spreadIndex]?.text || ""}</h2>
        <img src="${bottomLeft[spreadIndex]?.img || '../Images/oops.png'}" 
             alt="Left box image" 
             onerror="this.src='../Images/oops.png';">
    `;

    // bottom right box
    bottomBoxRight.innerHTML = `
        <h2>${bottomRight[spreadIndex]?.text || ""}</h2>
        <img src="${bottomRight[spreadIndex]?.img || '../Images/oops.png'}" 
             alt="Right box image" 
             onerror="this.src='../Images/oops.png';">
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

