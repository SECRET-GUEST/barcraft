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




//  ___  ____   ___    ___  ____ ____ _  _ ____ ____ ____ _  _ _  _ ___  
//  ___| |___  |   |   |__] |__| |    |_/  | __ |__/ |  | |  | |\ | |  \ 
//  ___| |___| |___|   |__] |  | |___ | \_ |__] |  \ |__| |__| | \| |__/ 

                                                  
// Image names
const images = ['sky.jpg', 'sky2.jpg', 'sky3.jpg'];
let index = -1;

// Get image elements
const image360_1 = document.getElementById('image360_1');
const image360_2 = document.getElementById('image360_2');

let currentImage = image360_1;
let nextImageElement = image360_2;

// Define rotation speeds for the X and Y axes
let rotationSpeedX = 0;
let rotationSpeedY = 0;

// Define a factor to adjust the speed of rotation
let speedFactor = 0.00001;



function loadImage() {
  // Increment the index; cycle back to 0 when it reaches the length of the images array
  index = (index + 1) % images.length;

  // Set source
  nextImageElement.setAttribute('src', 'img/' + images[index]);

  // Set an animation on the next image element to gradually increase its opacity to 1 over 1 second
  nextImageElement.setAttribute('animation', {
    property: 'material.opacity',
    to: '1',
    dur: '1000',
    easing: 'linear'
  });

    // Set an animation on the current image element to gradually decrease its opacity to 0 over 1 second
  currentImage.setAttribute('animation', {
    property: 'material.opacity',
    to: '0',
    dur: '1000',
    easing: 'linear'
  });

  
  // Swap the images
  let temp = currentImage;
  currentImage = nextImageElement;
  nextImageElement = temp;

  // Start updating rotation
  updateRotation();
}

function updateRotation() {
  // Rotate both images
  currentImage.object3D.rotation.y += rotationSpeedY;
  currentImage.object3D.rotation.x += rotationSpeedX;

  nextImageElement.object3D.rotation.y += rotationSpeedY;
  nextImageElement.object3D.rotation.x += rotationSpeedX;

  // Continue rotation
  requestAnimationFrame(updateRotation);
}

function handleMouseMove(e) {
  // Retrieve the current mouse coordinates
  let x = e.clientX;
  let y = e.clientY;

  // Get the width and height of the window
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;

  // Calculate the distance of the mouse from the center of the window
  let distanceX = x - windowWidth / 2;
  let distanceY = y - windowHeight / 2;

  // If the mouse is near the center of the screen, reduce the rotation speed
  if (Math.abs(distanceX) < windowWidth / 4 && Math.abs(distanceY) < windowHeight / 4) {
    rotationSpeedY *= 0.9;
    rotationSpeedX *= 0.9;
  } else {
    // Otherwise, adjust the rotation speeds based on the mouse coordinates and speed factor
    rotationSpeedY = distanceX * speedFactor;
    rotationSpeedX = distanceY * speedFactor;
  }
}

// Attach mousemove event listener to the document
document.addEventListener('mousemove', handleMouseMove);

// Hide VR button
window.addEventListener('load', (event) => {
  var vrButton = document.querySelector('.a-enter-vr');
  var arButton = document.querySelector('.a-enter-ar');
  
  if (vrButton) {
    vrButton.style.display = 'none';
  }
  
  if (arButton) {
    arButton.style.display = 'none';
  }
});


// Launch image
loadImage();

// Define random delay between 20~40s
let delay = Math.random() * 20000 + 20000;

setInterval(loadImage, delay);

// Start updating rotation
updateRotation();


//____ ____ _  _ ____ ____ ____ ___ ____ ____ ____ 
//| __ |___ |\ | |___ |__/ |__|  |  |  | |__/ [__  
//|__] |___ | \| |___ |  \ |  |  |  |__| |  \ ___] 
                                                 

//Link event listener to the "Generate" button
document.getElementById('generate-btn').addEventListener('click', generateImages);





//Function to generate codes images
function generateImages() {

    const url = document.getElementById('url-input').value;
    const generateQR = document.getElementById('qr-checkbox').checked;
    const generateBarcode = document.getElementById('barcode-checkbox').checked;
    const folderLabel = document.getElementById('folder-label');
    folderLabel.innerHTML = '';


    // We set style here because javascript is complete garbage (neither setAttribute or assign object does work 👩‍❤️‍👨 javascript 👨‍👩‍👧 )
    const imagesContainer = document.createElement('div');
    imagesContainer.style.display = 'flex';
    imagesContainer.style.flexDirection = 'column';
    imagesContainer.style.alignItems = 'center';
    imagesContainer.style.backgroundColor = '#ffffff'; 
    imagesContainer.style.borderRadius = '8px'; 
    imagesContainer.style.margin = '10px'; 
    imagesContainer.style.padding = '10px';




    if (!generateQR && !generateBarcode) {
        alert("Bruh !");
        return;
    }


    //Create a box to contain the qr code image and display it in 666x666px / black and white 
    if (generateQR) {
        const qrCodeDiv = document.createElement('div');
        new QRCode(qrCodeDiv, {
            text: url,
            width: 666,
            height: 666,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.L
        });
        imagesContainer.appendChild(qrCodeDiv);
    }


    //Make container for txt label then add it to the imagesContainer
    const textContainer = document.createElement('div');
    textContainer.className = 'text-container';
    textContainer.innerHTML = '<p><br><br><br>⚔️ Bruh have to save the generated ⚔️<br><br><br></p>';
    imagesContainer.appendChild(textContainer);



    if (generateBarcode) {
        const barcode = document.createElement('img');
        JsBarcode(barcode, url, {
            format: "CODE128",
            lineColor: "#000",
            width: 2,
            height: 666,
            displayValue: false
        });
        imagesContainer.appendChild(barcode);
    }


    folderLabel.appendChild(imagesContainer);

    //Display the box after image are generated
    folderLabel.style.display = 'flex';
}
