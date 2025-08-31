const images = [
    '../images/image1.jpg',
    '../images/image2.jpg',
    '../images/image3.jpg',
    '../images/image4.jpg'
];

const texts = [
    "Welcome to my sticker book! This spread features my favorite animal stickers.",
    "Here are some cool food-themed stickers I collected last year.",
    "These pages show my rare holographic stickers!",
    "The last spread is all about my custom art stickers."
];

// Bottom boxes: each entry is an object with text and image
const bottomLeft = [
    { text: "Left box for spread 1. Fun facts about these stickers!", img: "images/left1.jpg" },
    { text: "Left box for spread 2. More info and artist credits.", img: "images/left2.jpg" },
    { text: "Left box for spread 3. Holographic sticker details.", img: "images/left3.jpg" },
    { text: "Left box for spread 4. Custom art sticker stories.", img: "images/left4.jpg" }
];

const bottomRight = [
    { text: "Right box for spread 1. Where to buy these stickers.", img: "images/right1.jpg" },
    { text: "Right box for spread 2. My favorite sticker shops.", img: "images/right2.jpg" },
    { text: "Right box for spread 3. How I organize my collection.", img: "images/right3.jpg" },
    { text: "Right box for spread 4. Upcoming sticker releases.", img: "images/right4.jpg" }
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

    function updatePage() {
        pageImgLeft.src = images[currentPage];
        pageImgRight.src = images[currentPage + 1] || '';
        const spreadIndex = Math.floor(currentPage / 2);

        textBox.innerHTML = `<h2>${texts[spreadIndex] || ""}</h2>`;

        // Update bottom boxes with text and image
        bottomBoxLeft.innerHTML = `
            <h2>${bottomLeft[spreadIndex]?.text || ""}</h2>
            <img src="${bottomLeft[spreadIndex]?.img || ""}" alt="Left box image">
        `;
        bottomBoxRight.innerHTML = `
            <h2>${bottomRight[spreadIndex]?.text || ""}</h2>
            <img src="${bottomRight[spreadIndex]?.img || ""}" alt="Right box image">
        `;
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

