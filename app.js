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



// Image name
const images = ['sky.jpg', 'cypunk.jpg', 'cypunk2.jpg', 'dream.jpg', 'neon.jpg'];

let index = 0; // Image index
const image360 = document.getElementById('image360'); // element displaying image




// Function to pass image
function nextImage() {
  // update index
  index = (index + 1) % images.length;

  // update the image source
  image360.setAttribute('src', 'img/' + images[index]);

  // reset opacity (transition)
  image360.style.opacity = 1;
}




// Launch image
nextImage();



// Define random delay between 20~40s
let delay = Math.random() * 20000 + 20000;

// Next image 
setTimeout(function() {
  nextImage();
  // Set opacity progressively to transparent
  image360.style.opacity = 0;
  // Set new delay
  delay = Math.random() * 20000 + 20000;
}, delay);




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
