document.addEventListener("DOMContentLoaded", () => {
    let navbarLogo = document.querySelectorAll('.brand-img');

    let firstImg = getNewImg();
    navbarLogo[0].setAttribute('src', firstImg);
    navbarLogo[1].setAttribute('src', firstImg);

    navbarLogo[0].addEventListener('click', swapNavLogo);
    navbarLogo[1].addEventListener('click', swapNavLogo);

    console.log("Loaded");

    loadProjects();
});

window.addEventListener("scroll",function(){
    let windowHeight = document.documentElement.clientHeight;

    if (window.pageYOffset >= windowHeight + windowHeight * 0.05 ) {
        document.querySelector('.navbar').classList.add('navbar-shadow');
    } else {
        document.querySelector('.navbar').classList.remove('navbar-shadow');
    }
});

let usedLogos = [1, 4, 7, 2, 5, 8, 3, 6, 9];

function getRandomElement() {
    let engine = Random.engines.mt19937().autoSeed();
    let distribution = Random.integer(0, usedLogos.length - 1);
    let num = distribution(engine);

    let output = usedLogos[num];

    usedLogos.splice(num, 1);

    // Random refills
    if (usedLogos.length < 1) {
        let engine2 = Random.engines.mt19937().autoSeed();
        let distribution2 = Random.integer(0, 5);
        let num2 = distribution2(engine2);

        switch (num2) {
            case 0:
                usedLogos = [1, 4, 7, 2, 5, 8, 3, 6, 9];
                break;
            case 1:
                usedLogos = [1, 4, 7, 3, 6, 9, 2, 5, 8];
                break;
            case 2:
                usedLogos = [2, 5, 8, 1, 4, 7, 3, 6, 9];
                break;
            case 3:
                usedLogos = [2, 5, 8, 3, 6, 9, 1, 4, 7];
                break;
            case 4:
                usedLogos = [3, 6, 9, 1, 4, 7, 2, 5, 8];
                break;
            case 5:
                usedLogos = [3, 6, 9, 2, 5, 8, 1, 4, 7];
                break;
        }
    }

    return output;
}

function getNewImg() {
    let currentSrc = document.querySelector('.brand-img').src;

    let currentVersion = currentSrc.slice(-5, -4);

    let newVersion = getRandomElement();

    if (newVersion === currentVersion) {
        newVersion = getRandomElement();
    }

    return `img/logo/logo-v${newVersion}.svg`;
}

let canSwap = true;

function swapNavLogo() {

    // Check if it's ok to swap
    if (!canSwap) return;

    // Disallow swapping
    canSwap = false;

    // Get logo element
    let logos = document.querySelectorAll('.brand-img');

    // Start animation
    logos[0].classList.add('animated');
    logos[0].classList.add('jello');
    logos[0].classList.add('blur');
    logos[1].classList.add('animated');
    logos[1].classList.add('jello');
    logos[1].classList.add('blur');

    // Swap logo
    setTimeout(() => {
        let newImg = getNewImg();
        logos[0].setAttribute('src', newImg);
        logos[1].setAttribute('src', newImg);
    }, 450);

    // Remove animation
    setTimeout(() => {
        logos[0].classList.remove('animated');
        logos[0].classList.remove('jello');
        logos[0].classList.remove('blur');
        logos[1].classList.remove('animated');
        logos[1].classList.remove('jello');
        logos[1].classList.remove('blur');
        canSwap = true;
    }, 850);

}

function closeModal() {
    document.querySelector('#gallery-modal').classList.add('is-modal-hidden');
    setTimeout(() =>  {
        document.querySelector('#gallery-modal').classList.remove('is-active');
    }, 300);
}

function showModal() {
    document.querySelector('#gallery-modal img').setAttribute('src', currentProject.images[0]);

    document.querySelector('#gallery-modal').classList.add('is-active');
    setTimeout(() =>  {
        document.querySelector('#gallery-modal').classList.remove('is-modal-hidden');
    }, 300);

}

function nextImage(){
    if (currentImage + 1 <= currentProject.images.length - 1) {
        currentImage++;
    }
    else {
        currentImage = 0;
    }

    document.querySelector('#gallery-modal img').setAttribute('src', currentProject.images[currentImage]);
}

function prevImage() {
    if (currentImage - 1 >= 0) {
        currentImage--;
    }
    else {
        currentImage = currentProject.images.length - 1;
    }

    document.querySelector('#gallery-modal img').setAttribute('src', currentProject.images[currentImage]);

}

async function loadProjects() {
    // let data = [
    //     {
    //         "name": "St@k",
    //         "yearStart": 2016,
    //         "yearEnd": null,
    //         "description": "Print design for the student magazines St@k and St@kić",
    //         "heroImage": "https://goranalkovic.github.io/img/projects/stak/card-hero.png",
    //         "images": [
    //             "https://goranalkovic.github.io/img/projects/stak/hero-1.png",
    //             "https://goranalkovic.github.io/img/projects/stak/hero-2.png",
    //             "https://goranalkovic.github.io/img/projects/stak/hero-3.png",
    //             "https://goranalkovic.github.io/img/projects/stak/hero-4.png",
    //         ],
    //         "tags": [
    //             {
    //                 "text": "Print design",
    //                 "color": "is-primary"
    //             },
    //             {
    //                 "text": "InDesign",
    //                 "color": ""
    //             },
    //             {
    //                 "text": "Illustrator",
    //                 "color": ""
    //             },
    //             {
    //                 "text": "Photoshop",
    //                 "color": ""
    //             }
    //         ]
    //     }
    // ];

    let response = await fetch('/files/projects.json');
    let data = await response.json();

    for (let project of data) {
       addProjectCard(project, document.querySelector('#project-container'));
    }
}

var currentProject;
var currentImage = 0;

function addProjectCard(project, projectContainer) {


    // Container div
    let containerDiv = document.createElement('div');
    containerDiv.className = 'column is-narrow is-12-mobile is-6-tablet is-4-desktop is-4-widescreen';

    // Card

    let cardDiv = document.createElement('div');
    cardDiv.className = 'card';

    // Card header image

    let cardImgDiv = document.createElement('div');
    cardImgDiv.className = 'card-image';

    let cardImgFigure = document.createElement('figure');
    cardImgFigure.className = 'image is-3by2';

    let cardImgImage = document.createElement('img');
    cardImgImage.setAttribute('src', project.heroImage);
    cardImgImage.setAttribute('alt', 'Project image');

    cardImgFigure.appendChild(cardImgImage);
    cardImgDiv.appendChild(cardImgFigure);

    // Card contents

    let cardContentDiv = document.createElement('div');
    cardContentDiv.className = 'card-content';

    // Card title

    let cardTitleDiv = document.createElement('div');
    cardTitleDiv.className = 'columns is-mobile';

    let cardTitleColumn1Div = document.createElement('div');
    cardTitleColumn1Div.className = 'column';

    let projectTitle = document.createElement('h4');
    projectTitle.className = 'title is-4';
    projectTitle.innerHTML = project.name;

    let projectDuration = document.createElement('h6');
    projectDuration.className = 'subtitle is-6';
    projectDuration.innerHTML = project.yearStart;

    if(project.yearStart !== project.yearEnd) {
        projectDuration.innerHTML += '-';

        if (project.yearEnd != null) {
            projectDuration.innerHTML += project.yearEnd;
        }
    }

    cardTitleColumn1Div.appendChild(projectTitle);
    cardTitleColumn1Div.appendChild(projectDuration);

    let cardTitleColumn2Div = document.createElement('div');
    cardTitleColumn2Div.className = 'column is-narrow';

    let galleryBtn = document.createElement('button');
    galleryBtn.className = 'button';
    galleryBtn.addEventListener('click', () => {
        currentProject = project;
        showModal();
    });

    let galleryBtnSpan = document.createElement('span');
    galleryBtnSpan.className = 'icon is-medium';

    let galleryBtnIcon = document.createElement('i');
    galleryBtnIcon.className = 'icon-picture';

    galleryBtnSpan.appendChild(galleryBtnIcon);
    galleryBtn.appendChild(galleryBtnSpan);
    cardTitleColumn2Div.appendChild(galleryBtn);

    cardTitleDiv.appendChild(cardTitleColumn1Div);
    cardTitleDiv.appendChild(cardTitleColumn2Div);

    // Card body

    let projectDescription = document.createElement('div');
    projectDescription.className = 'content';
    projectDescription.innerHTML = project.description;

    // Tags

    let tags = document.createElement('div');
    tags.className = 'tags';

    for (let tag of project.tags) {
        let newTag = document.createElement('span');
        newTag.className = 'tag '; // + tag.color;
        newTag.innerHTML = tag.text;
        tags.appendChild(newTag);
    }

    cardContentDiv.appendChild(cardTitleDiv);
    cardContentDiv.appendChild(projectDescription);
    cardContentDiv.appendChild(tags);

    //

    cardDiv.appendChild(cardImgDiv);
    cardDiv.appendChild(cardContentDiv);

    //

    containerDiv.appendChild(cardDiv);

    projectContainer.appendChild(containerDiv);
}