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


// Image names
const images = ['sky.jpg', 'sky2.jpg', 'sky3.jpg'];
let index = -1; 

// Get image elements
const image360front = document.getElementById('image360front'); // front image

// Next image with transition
function nextImage() {
    index = (index + 1) % images.length;
    image360front.setAttribute('src', 'img/' + images[index]);
}

// Hide VR button
window.addEventListener('load', (event) => {
    document.querySelector('.a-enter-vr').style.display = 'none';
});

// Launch image
nextImage();

// Define random delay between 20~40s
let delay = Math.random() * 20000 + 20000;

// Next image every 20~40s
setInterval(function() {
    nextImage();
}, delay);

let rotationSpeedX = 0.05;
let rotationSpeedY = 0.05;
let speedFactor = 0.5;

document.onmousemove = function(e) {
    let x = e.clientX;
    let y = e.clientY;
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    let xProximity = y / windowHeight;
    let yProximity = x / windowWidth;

    rotationSpeedY = 0.05 + (0.5 - yProximity) * speedFactor;
    rotationSpeedX = 0.05 + (0.5 - xProximity) * speedFactor;
}


function rotateImage() {
    let rotation = image360front.getAttribute("rotation");
    rotation.y = (rotation.y + rotationSpeedY) % 360;
    rotation.x = (rotation.x + rotationSpeedX) % 360;
    image360front.setAttribute("rotation", rotation);
    requestAnimationFrame(rotateImage);
}

rotateImage();


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
