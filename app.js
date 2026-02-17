//               
//                 |                                                |            |                                   |                               |                           |                               |                           |                               |                                |                               |
//          |                                  |                                     |
//               
//                 |                     |                                                     |                                   |                               |     |                                   |                               |     |                                   |                               |          |                                   |                               |
//  |                          |                       |                    |
//          |                                    |                                         |     |                    |                                    | |     |                    |                                    | |     |                    |                                    |      |     |                                                        |
//     |                        |                                 |      |                                |                       |                    |                |                       |                    |                |                       |                    |                     |                       |                    |
//               
//                     |                                                |      |                                   |                               |                         |                               |                         |                               |                              |                               |
//          |                                   |                               |                   |                                |                       |                    |          |                                |                       |                    |          |                                |                       |                    |               |                                |                                        |
//               
//                 |                     |
//  |                                |                       |                    |            |                                |                       |                    |     |                                |                       |                    |     |                                |                       |                              |                                |
//          |                               |                                         |                              |                       |                    |                           |                       |                    |                           |                       |                    |                                |                       |                    |
//               
//  |         |                                   PRESENTATION                                                |                                |                    |   |                                |                    |   |                                |                    |        |                                |                    |
//                                                                                                                              |                               |     |                                   |                               |     |                                   |                               |          |                                   |                               |
//               |                             /                 \                          |                                                                              |                               |     |                                   |                               |     |                                   |                               |          |                                   |                               |
//               
//       |                              Javascript to generate QrCode                   |                                           |               |                                           |               |                                           |                    |                                           |
//               
//                                 /             |    v    |             \
//               
//                       and barcode images from url for a github website project        |                                |                                          |      |                                |                                          |      |                                |                                          |           |                                |  
//     |                  !      |                                   |     |                                |                       |                    |                |                       |                    |                |                       |                    |                    |                                           |
//                               |                                   |     |                  
//                  |            |                   Anyway          !                        |                                         |                                |                       |                    |                |                       |                    |                |                       |                    |                    |
//               
//             |                      |                 have                                                 |                        |                                         |                                |                       |                    |                |                       |                    |                |                       |                    |                     |                                           |
//               //
//                |                                  FUN         |                        |                                         |                                |                       |                    |                |                       |                    |                |                       |                    |                    |                                                                      |
//               
//                                                        =)
//               
//
//                               |                      or                                       |                                                            |                    |                |                       |                    |                |                       |                    |                    |                                           |
//               //
//             |                              |       DIE ! ! !        |                       |                            |                |                       |                    |                |                       |                    |                    |                                           |#     |                        |                                         |                                |
//               
//
//                                                    !                                       |                                |                    |  |                                |                    |  |                                |                    |       |                                |                    |
//               
//     |               |                                 !
//               
//                 |                                                |            |                                   |                               |                           |                               |                           |                               |                                |                               |
//          |                                  !                                     |
//               
//                 |                     |                                                     |                                   |                               |     |                                   |                               |     |                                   |                               |          |                                   |                               |
//  |                          |                       |                    !
//          |                                    |                                         |     |                    |                                    | |     |                    |                                    | |     |                    |                                    |      |     |                    |                                    |
//     |                        |                                 |      |                                |                       |                    |                |                       |                    |                |                       |                    |                    |                                           |
//               
//                     |                                                |      |                                   |                               |                         |                               |                         |                               |                              |                               |
//          |                                   |                               |                   |                                |                       |                    |          |                                |                       |                    |          |                                |                       |                    |               |                                                                |
//               
//                 |                     |
//  |                                |                       |                    |            |                                |                       |                    |     |                                |                       |                    |                                    |                       |                              |                                                                        |
//          |                               |                                         !                              |                       |                    |                           |                       |                    |                           |                       |                    |                                |                       |                    |
//

//___  ____ _ _ _ ____ ____    ___  _    ____ _  _ ___
//|__] |  | | | | |___ |__/    |__] |    |__| |\ |  |
//|    |__| |_|_| |___ |  \    |    |___ |  | | \|  |

//OPENING | https://www.youtube.com/watch?v=_85LaeTCtV8 :3



/*
___  ____   ___    ___  ____ ____ _  _ ____ ____ ____ _  _ _  _ ___  
___| |___  |   |   |__] |__| |    |_/  | __ |__/ |  | |  | |\ | |  \ 
___| |___| |___|   |__] |  | |___ | \_ |__] |  \ |__| |__| | \| |__/ 
*/

  import * as THREE from "https://cdn.skypack.dev/three@0.130.0";
  import { OrbitControls } from "https://cdn.skypack.dev/three@0.130.0/examples/jsm/controls/OrbitControls.js";
  
  
  
  let intro360_scene, intro360_camera, intro360_renderer, intro360_controls, intro360_textureLoader, intro360_sphere1, intro360_sphere2, intro360_material1, intro360_material2;
  const intro360_images = ['img/sky.jpg', 'img/sky2.jpg', 'img/sky3.jpg'];
  let intro360_index = 0;
  
function BG360() {
    // Créer une scène
    intro360_scene = new THREE.Scene();
  
    // Créer une caméra
    intro360_camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    intro360_camera.position.z = 1;
  
    // Créer un renderer
    intro360_renderer = new THREE.WebGLRenderer();
    intro360_renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('intro360').appendChild(intro360_renderer.domElement);
  
    // Créer des contrôles pour gérer les événements de la souris
    intro360_controls = new OrbitControls(intro360_camera, intro360_renderer.domElement);
  
  
    // Créer des contrôles pour gérer les événements de la souris
    intro360_controls = new OrbitControls(intro360_camera, intro360_renderer.domElement);
  
    // Créer un chargeur de texture pour charger nos images
    intro360_textureLoader = new THREE.TextureLoader();
  
    // Créer une sphère
    const geometry = new THREE.SphereGeometry(5, 32, 32);
  
    // Créer les matériaux avec la première texture
    intro360_material1 = new THREE.MeshBasicMaterial({color: 0xffffff, side: THREE.BackSide, transparent: true, opacity: 1});
    intro360_material2 = new THREE.MeshBasicMaterial({color: 0xffffff, side: THREE.BackSide, transparent: true, opacity: 0});
    
    intro360_sphere1 = new THREE.Mesh(geometry, intro360_material1);
    intro360_scene.add(intro360_sphere1);
  
    intro360_sphere2 = new THREE.Mesh(geometry, intro360_material2);
    intro360_scene.add(intro360_sphere2);
  
    // Lorsque la fenêtre est redimensionnée
    window.addEventListener('resize', () => {
      // Mettre à jour l'aspect de la caméra
      intro360_camera.aspect = window.innerWidth / window.innerHeight;
      // Mettre à jour la matrice de projection de la caméra
      intro360_camera.updateProjectionMatrix();
      // Mettre à jour la taille du rendu
      intro360_renderer.setSize(window.innerWidth, window.innerHeight);
    }, false);
  
    // Charger la première image
    intro360_loadNextImage();
  
    function intro360_loadNextImage() {
      // Swap spheres and materials
      [intro360_sphere1, intro360_sphere2] = [intro360_sphere2, intro360_sphere1];
      [intro360_material1, intro360_material2] = [intro360_material2, intro360_material1];
  
      intro360_textureLoader.load(intro360_images[intro360_index], function(texture) {
        intro360_material1.map = texture;
        intro360_material1.needsUpdate = true;
        fadeTransition(8000);
      });
  
      // Passer à l'image suivante
      intro360_index = (intro360_index + 1) % intro360_images.length;
  
      // Charger la prochaine image après un délai aléatoire entre 100000 et 130000
      setTimeout(intro360_loadNextImage, Math.random() * 100000 + 130000);
    }
  
    function fadeTransition(duration) {
      const startTime = Date.now();
      const animateFade = function() {
        const elapsed = Date.now() - startTime;
        const progress = elapsed / duration;
        if(progress < 1) {
          intro360_material1.opacity = progress;
          intro360_material2.opacity = 1 - progress;
          requestAnimationFrame(animateFade);
        } else {
          intro360_material1.opacity = 1;
          intro360_material2.opacity = 0;
        }
      }
      animateFade();
    }
  
    function intro360_animate() {
      requestAnimationFrame(intro360_animate);
  
      // Faire tourner la sphère
      intro360_sphere1.rotation.y += 0.001;
      intro360_sphere2.rotation.y += 0.001;
  
      intro360_renderer.render(intro360_scene, intro360_camera);
    }
  
    intro360_animate();
  }
  


BG360();




/*
____ _  _    _    ____ ____ ___  _ _  _ ____ 
|___  \/     |    |  | |__| |  \ | |\ | | __ 
|    _/\_    |___ |__| |  | |__/ | | \| |__] 

import $ from 'https://code.jquery.com/jquery-3.7.0.js'; 
*/

function loadPage() {

  $(document).ready(function () {

    var loadingDuration = 1000;
    var intervalDuration = 10;

    jQuery(function($) {

        // DOM elements used during the loading sequence
        var loading = $('#loading');
        var blackRectangle = $('#blackRectangle');
        var glitchText = $('#glitchText');
        var whiteScreen = $('#whiteScreen');

        // Calculate how many intervals will run
        var intervalsCount = loadingDuration / intervalDuration;

        // Calculate how much the height should increase per interval (in %)
        var increment = 100 / intervalsCount;

        // Start interval animation
        var intervalId = setInterval(function() {

            // Get current height of the black rectangle (in %)
            var currentHeight = blackRectangle.height();

            // Compute next height value
            var newHeight = currentHeight + increment;

            // Prevent exceeding 100%
            if (newHeight > 100) newHeight = 100;

            // Apply new height
            blackRectangle.css('height', newHeight + '%');

            // When the rectangle reaches full height
            if (newHeight >= 100) {

                // Stop the interval loop
                clearInterval(intervalId);

                // First transition phase
                setTimeout(function() {

                    // Move the black rectangle out of view
                    blackRectangle.css('bottom', '100%');

                    // Fade out white overlay
                    whiteScreen.css('opacity', 0);

                    // Animate glitch text shrink and fade
                    glitchText.css({
                        transition: 'font-size 2s, opacity 0.3s',
                        fontSize: '4vw',
                        opacity: 0
                    });

                }, 1000);

                // Final cleanup phase
                setTimeout(function() {

                    // Remove white screen from DOM
                    whiteScreen.remove();

                    // Reveal services block
                    $('#servicesBlock').css('bottom', '0%'); 

                    loading.remove();

                }, 1600);
            }

        }, intervalDuration);
    });

  });
}


function leavingPage() {
  let rectangles = Array.from(document.getElementsByClassName('overlay-rectangle'));
  
  // Start the white rectangle moving first
  rectangles[rectangles.length - 1].style.transition = `top 0.7s`;
  rectangles[rectangles.length - 1].style.top = '0';
  
  // Start each black rectangle moving after a delay
  for (let i = 0; i < rectangles.length - 1; i++) {
    setTimeout(function() {
      rectangles[i].style.transition = `top 1s`;
      rectangles[i].style.top = '100vh';
    }, 200 * i);  // Delay each rectangle by 0.5s
  }
}


function endPage() {

  // Select all links that should trigger the leaving animation
  let links = document.getElementsByClassName('leaving');

  // Loop through each matching link
  for (let i = 0; i < links.length; i++) {

    // Attach click event listener
    links[i].addEventListener('click', function(event) {

      // Prevent the default immediate navigation behavior
      event.preventDefault();

      // Store the target URL from the href attribute
      let href = this.getAttribute('href');

      leavingPage();

      setTimeout(function() {

        // Redirect to the original link destination
        window.location.href = href;

      }, 1333); 

    });
  }
}



loadPage();
endPage();

/*
____ ____ ____ ___  
|    |__| |__/ |  \ 
|___ |  | |  \ |__/ 

import $ from 'https://code.jquery.com/jquery-3.7.0.js'; 
*/


$(document).ready(function() {
  if (isMobile()) return;

    $(".card").on({
      mousemove: function(e) {
        if (isMobile()) return;
        const card = this;
        const glowElement = card.querySelector('.glowMou, .glowMouCrea, .glowMouTech');
        
        const cardRect = card.getBoundingClientRect();
        
        const offsetX = e.clientX - cardRect.left;
        const offsetY = e.clientY - cardRect.top;
  
        const diffX = (cardRect.width / 2) - offsetX;
        const diffY = (cardRect.height / 2) - offsetY;
  
        const rotateY = (2 * diffX) / (cardRect.width / 2);
        const rotateX = (2 * diffY) / (cardRect.height / 2);
        
        const invertRotateX = -rotateX;
  
        card.style.transform = `rotateX(${invertRotateX}deg) rotateY(${rotateY}deg)`;
  
        glowElement.style.setProperty('--mouse-x', `${offsetX}px`);
        glowElement.style.setProperty('--mouse-y', `${offsetY}px`);
        glowElement.classList.add("glowing");
      },
      mouseleave: function() {
        if (isMobile()) return;
        const card = this;
        card.style.transform = "";
  
        const glowElement = card.querySelector('.glowMou, .glowMouCrea, .glowMouTech');
        glowElement.classList.remove("glowing");
      }
    });
  });





/* 
_  _ ____ _  _ ____ ____ 
|\/| |  | |  | [__  |___ 
|  | |__| |__| ___] |___ 
*/



function isMobile() {
  // Basic UA-based mobile detection
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS|IEMobile/i.test(navigator.userAgent);
}

if (!isMobile()) {

  // Pointer state (position, velocity, size/opacity targets)
  let mouseX = 0, mouseY = 0, lastMouseX = 0, lastMouseY = 0, speedX = 0, speedY = 0;
  let posX = 0, posY = 0, size = 28, opacity = 1;
  let targetSize = 28, targetOpacity = 1;

  // Mode flags
  let isRectangle = false, isScrollFastActivated = false;

  // Rotation animation state
  let rotation = 0;
  let animateRotation = false;

  const customPointer = document.getElementById('customPointer');

  function animouse() {
    if (isMobile()) return;

    // Smoothing factor (slower when hidden / fast-scroll mode)
    const factor = isScrollFastActivated || (opacity < 0.1 && targetOpacity < 0.1) ? 0.05 : 0.5;

    posX += (mouseX - posX) * factor;
    posY += (mouseY - posY) * factor;
    size += (targetSize - size) * factor;
    opacity += (targetOpacity - opacity) * factor;

    // One-shot rotation burst
    if (animateRotation) {
      rotation += 6;
      if (rotation >= 360) {
        rotation = 0;
        animateRotation = false;
      }
    }

    // Stretch pointer based on mouse speed
    const newSize = Math.max(size, size + Math.sqrt(speedX * speedX + speedY * speedY) / 8);
    const width = newSize + Math.abs(speedX);
    const height = newSize + Math.abs(speedY);

    customPointer.style.top = `${posY - newSize / 2}px`;
    customPointer.style.left = `${posX - newSize / 2}px`;
    customPointer.style.width = `${width}px`;
    customPointer.style.height = `${height}px`;
    customPointer.style.opacity = `${opacity}`;
    customPointer.style.transform = `rotate(${rotation}deg)`;

    requestAnimationFrame(animouse);
  }

  // Track mouse position + speed
  document.addEventListener('mousemove', (event) => {
    if (isMobile()) return;
    mouseX = event.clientX;
    mouseY = event.clientY;
    speedX = mouseX - lastMouseX;
    speedY = mouseY - lastMouseY;
    lastMouseX = mouseX;
    lastMouseY = mouseY;
  });

  // Middle mouse button: temporary hide pointer (fast scroll)
  document.addEventListener('mousedown', (event) => {
    if (isMobile()) return;
    if (event.button === 1) {
      isScrollFastActivated = true;
      targetSize = 0;
      targetOpacity = 0;
    }
  });

  document.addEventListener('mouseup', (event) => {
    if (isMobile()) return;
    if (event.button === 1) {
      isScrollFastActivated = false;
      targetSize = 28;
      targetOpacity = 1;
    }
  });

  // Hide on leaving window, restore on re-enter
  document.addEventListener('mouseleave', () => {
    if (isMobile()) return;
    targetSize = 0;
    targetOpacity = 0;
  });

  document.addEventListener('mouseenter', () => {
    if (isMobile()) return;
    targetSize = 28;
    targetOpacity = 1;
  });

  // Click: toggle rectangle mode + trigger rotation burst
  document.addEventListener('click', () => {
    if (isMobile()) return;
    isRectangle = !isRectangle;
    customPointer.classList.toggle('mouRectangle');
    animateRotation = true;
  });

  // Hover feedback on clickable elements
  const clickableElements = document.querySelectorAll('a, button');
  clickableElements.forEach((element) => {
    element.addEventListener('mouseover', () => {
      if (isMobile()) return;
      targetSize = 12;
    });
    element.addEventListener('mouseout', () => {
      if (isMobile()) return;
      targetSize = 28;
    });
  });

  // Start animation loop
  animouse();
}



/*
____ _  _    ____ ____ _   _ ___  ___ ____    ___ ____ _  _ ___ 
|___  \/     |    |__/  \_/  |__]  |  |  |     |  |___  \/   |  
|    _/\_    |___ |  \   |   |     |  |__|     |  |___ _/\_  |  

*/


  
// Select all elements with the class "auto-matrix"
const autoMatrixButtons = document.querySelectorAll('.auto-matrix');

// Iterate over each selected button
autoMatrixButtons.forEach((button) => {
  // Adjustable variables
  let intervalTime = 50;  // Time for interval
  let delayTime = 20;     // Time delay for setTimeout
  let loopTimes = 2;      // Number of times the loop will run

  // Original text of the button
  const originalText = button.textContent;

  // Variable to hold the interval instance
  let decryptInterval;

  // Apply multipliers based on classes present in the button
  if(button.classList.contains('x2')) {  // If class 'x2' is present
    intervalTime /= 2;  // Halve the intervalTime
    delayTime /= 2;     // Halve the delayTime
    loopTimes *= 2;     // Double the loopTimes
  }

  if(button.classList.contains('x4')) {  // If class 'x4' is present
    intervalTime /= 4;  // Quarter the intervalTime
    delayTime /= 4;     // Quarter the delayTime
    loopTimes *= 4;     // Quadruple the loopTimes
  }

  if(button.classList.contains('x8')) {  // If class 'x8' is present
    intervalTime /= 8;  // Divide intervalTime by 8
    delayTime /= 8;     // Divide delayTime by 8
    loopTimes *= 8;     // Multiply loopTimes by 8
  }

  function autoMatrix() {
    // If there's already an interval running, clear it
    if (decryptInterval) {
      clearInterval(decryptInterval);
    }

    // Get the original text data attribute if exists, else get current textContent
    const decryptedText = button.dataset.originalText || button.textContent;

    // Start the textContent as '_'
    button.textContent = '_';

    // Initial variables for the decryption process
    let decryptedIndex = 0;
    let loopCounter = 0;

    // Start an interval with the adjusted intervalTime
    decryptInterval = setInterval(() => {
      // If the loopCounter is less than the adjusted loopTimes
      if (loopCounter < loopTimes) {
        // Delay the execution of the function inside setTimeout by delayTime
        setTimeout(() => {
          const encryptedChar = getRandomChar();  // Get a random character
          // Replace the last character of the textContent with the random character
          button.textContent = button.textContent.slice(0, -1) + encryptedChar;
        }, delayTime);
        loopCounter++;
      } 
      // If the decrypted index is less than the length of the decryptedText
      else if (decryptedIndex < decryptedText.length) {
        // Remove the last character from the textContent
        button.textContent = button.textContent.slice(0, -1);

        // Get the decrypted character from the decryptedText by index
        const decryptedChar = decryptedText[decryptedIndex];

        // Append the decrypted character and '█' to the textContent
        button.textContent += decryptedChar;
        button.textContent += "█";

        // Increase the decrypted index and reset the loop counter
        decryptedIndex++;
        loopCounter = 0;
      } 
      // If the entire decryptedText has been processed
      else {
        // Remove the last character from the textContent
        button.textContent = button.textContent.slice(0, -1);

        // Clear the running interval and restore the original text
        clearInterval(decryptInterval);
        button.textContent = originalText;
      }
    }, intervalTime);
  }

  // Start the decryption process
  autoMatrix();
});


function getRandomChar() {
  const chars = 'Σ_—RΣT-9uΣ5T';
  const randomIndex = Math.floor(Math.random() * chars.length);
  return chars[randomIndex];
}



//____ ____ _  _ ____ ____ ____ ___ ____ ____ ____ 
//| __ |___ |\ | |___ |__/ |__|  |  |  | |__/ [__  
//|__] |___ | \| |___ |  \ |  |  |  |__| |  \ ___] 

// Core UI elements
const generatorForm = document.getElementById('generator-form');
const urlInput = document.getElementById('url-input');
const pageContent = document.getElementById('page-content');
const generatedBlock = document.getElementById('generated');

// Output containers
const qrCodeContainer = document.getElementById('qr-code-container');
const textContainer = document.getElementById('text-container');
const barcodeContainer = document.getElementById('barcode-container');

// Status / feedback
const formMessage = document.getElementById('form-message');

// Matrix text config
const memePhrase = '⚔️ Bruh have to save the generated ⚔️';
let matrixWriteInterval;

// Bind form submit
if (generatorForm) {
  generatorForm.addEventListener('submit', generateImages);
}

// Bind Enter key submit (input only)
if (urlInput) {
  urlInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      generateImages(event);
    }
  });
}

// Enable horizontal wheel scrolling on media containers
if (qrCodeContainer) {
  enableHorizontalWheel(qrCodeContainer);
}

if (barcodeContainer) {
  enableHorizontalWheel(barcodeContainer);
}

// Collapse expanded layout on mobile breakpoint
window.addEventListener('resize', () => {
  if (!pageContent) return;

  if (isMobileViewport()) {
    pageContent.classList.remove('card-expanded');
  }
});

function generateImages(event) {
  if (event) event.preventDefault();

  const url = urlInput.value.trim();
  const cardContent = document.querySelector('.card-content');

  // Validate input
  if (!url) {
    setFormMessage('Enter URL / text before Generate.');
    return;
  }
  setFormMessage('');

  // Expand card on desktop
  if (pageContent && !isMobileViewport()) {
    pageContent.classList.add('card-expanded');
  }

  // Reset outputs + states
  qrCodeContainer.innerHTML = '';
  textContainer.innerHTML = '';
  barcodeContainer.innerHTML = '';

  qrCodeContainer.classList.remove('media-ready');
  textContainer.classList.remove('media-ready', 'matrix-writing');
  barcodeContainer.classList.remove('media-ready');

  // Replay "expanded" animation
  generatedBlock.classList.remove('expanded');
  void generatedBlock.offsetWidth;
  generatedBlock.classList.add('expanded');

  // Responsive QR sizing based on card width and viewport height
  const qrSize = Math.max(
    136,
    Math.min(
      220,
      Math.floor(cardContent.offsetWidth * 0.24),
      Math.floor(window.innerHeight * 0.25)
    )
  );

  // QR Code generation (if lib is loaded)
  if (typeof QRCode === 'function') {
    const qrWrap = document.createElement('div');
    qrWrap.className = 'qr-wrap';
    qrCodeContainer.appendChild(qrWrap);

    new QRCode(qrWrap, {
      text: url,
      width: qrSize,
      height: qrSize,
      colorDark: '#14213d',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.M
    });

    // Attach download handler once the QR node exists
    setTimeout(() => {
      const qrElement = qrWrap.querySelector('img, canvas');
      if (qrElement) {
        qrCodeContainer.onclick = () => downloadQrElement(qrElement);
        qrElement.addEventListener('click', () => downloadQrElement(qrElement));
      }

      centerScrollableX(qrCodeContainer);
      qrCodeContainer.classList.add('media-ready');
    }, 130);
  }

  // Matrix writing effect for the text block
  runMatrixWrite(textContainer, memePhrase);

  // Barcode generation (if lib is loaded)
  if (typeof JsBarcode === 'function') {
    const barcodeCanvas = document.createElement('canvas');
    const barcodeWrap = document.createElement('div');

    // Adapt barcode density to input length
    const barcodeLength = url.length;
    const barWidth =
      barcodeLength > 160 ? 0.55 :
      barcodeLength > 110 ? 0.72 :
      barcodeLength > 70  ? 0.9  : 1.2;

    const barcodeHeight = Math.max(70, Math.floor(qrSize * 0.42));

    barcodeWrap.className = 'barcode-wrap';

    try {
      JsBarcode(barcodeCanvas, url, {
        format: 'CODE128',
        lineColor: '#14213d',
        width: barWidth,
        height: barcodeHeight,
        displayValue: true,
        font: 'Krona One',
        fontSize: 11,
        margin: 12,
        background: '#ffffff'
      });

      barcodeWrap.appendChild(barcodeCanvas);
      barcodeContainer.appendChild(barcodeWrap);

      // Click to download
      barcodeCanvas.addEventListener('click', () => {
        downloadCanvasElement(barcodeCanvas, 'barcode.png');
      });
      barcodeContainer.onclick = () => {
        downloadCanvasElement(barcodeCanvas, 'barcode.png');
      };

      setTimeout(() => {
        centerScrollableX(barcodeContainer);
        barcodeContainer.classList.add('media-ready');
      }, 230);

    } catch (error) {
      setFormMessage('Barcode generation failed. Try shorter text.');
    }
  }
}

function isMobileViewport() {
  // Viewport breakpoint (CSS should match this)
  return window.matchMedia('(max-width: 570px)').matches;
}

function enableHorizontalWheel(element) {
  // Convert vertical wheel to horizontal scroll when overflow exists
  element.addEventListener('wheel', (event) => {
    if (element.scrollWidth <= element.clientWidth) return;

    if (Math.abs(event.deltaY) >= Math.abs(event.deltaX)) {
      event.preventDefault();
      element.scrollLeft += event.deltaY;
    }
  }, { passive: false });
}

function centerScrollableX(element) {
  // Center content when container is horizontally scrollable
  requestAnimationFrame(() => {
    if (element.scrollWidth > element.clientWidth) {
      element.scrollLeft = Math.floor((element.scrollWidth - element.clientWidth) / 2);
    } else {
      element.scrollLeft = 0;
    }
  });
}

function runMatrixWrite(element, finalText) {
  // Restart if already running
  if (matrixWriteInterval) clearInterval(matrixWriteInterval);

  const targetChars = Array.from(finalText);
  let revealIndex = 0;
  let randomLoops = 0;

  element.classList.add('matrix-writing');
  element.textContent = '';

  matrixWriteInterval = setInterval(() => {
    const fixed = targetChars.slice(0, revealIndex).join('');
    const randomTailLength = Math.min(3, targetChars.length - revealIndex);
    const randomTail = Array.from({ length: randomTailLength }, () => getMatrixChar()).join('');

    element.textContent = fixed + randomTail;
    randomLoops += 1;

    // Reveal one more character every other tick
    if (randomLoops % 2 === 0 && revealIndex < targetChars.length) {
      revealIndex += 1;
    }

    // Finish
    if (revealIndex >= targetChars.length) {
      clearInterval(matrixWriteInterval);
      element.classList.remove('matrix-writing');
      element.textContent = finalText;
      element.classList.add('media-ready');
    }
  }, 42);
}

function getMatrixChar() {
  // Random glyphs used for the matrix tail
  const chars = 'Σ_—RΣT-9uΣ5T█▒';
  return chars[Math.floor(Math.random() * chars.length)];
}

function setFormMessage(message) {
  if (!formMessage) return;
  formMessage.textContent = message;
}

function downloadQrElement(qrElement) {
  if (!qrElement) return;

  // QRCode lib may output either canvas or img
  if (qrElement.tagName === 'CANVAS') {
    downloadCanvasElement(qrElement, 'QRCode.png');
    return;
  }

  if (qrElement.tagName === 'IMG' && qrElement.src) {
    triggerDownload(qrElement.src, 'QRCode.png');
  }
}

function downloadCanvasElement(canvasElement, fileName) {
  if (!canvasElement || canvasElement.tagName !== 'CANVAS') return;

  const dataURL = canvasElement.toDataURL('image/png');
  triggerDownload(dataURL, fileName);
}

function triggerDownload(href, filename, revokeAfterDownload = false) {
  // Create a temporary <a> and click it to download
  const link = document.createElement('a');
  link.href = href;
  link.download = filename;
  link.rel = 'noopener';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  if (revokeAfterDownload) {
    setTimeout(() => URL.revokeObjectURL(href), 1200);
  }
}
