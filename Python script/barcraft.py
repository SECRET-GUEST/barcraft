#      |               |                                 |
                
#                  |                                                |            |                                   |                               |                           |                               |                           |                               |                                |                               |
#           |                                  |                                     |
                
#                  |                     |                                                     |                                   |                               |     |                                   |                               |     |                                   |                               |          |                                   |                               |
#   |                          |                       |                    |
#           |                                    |                                         |     |                    |                                    | |     |                    |                                    | |     |                    |                                    |      |     |                                                        |
#      |                        |                                 |      |                                |                       |                    |                |                       |                    |                |                       |                    |                     |                       |                    |
                
#                      |                                                |      |                                   |                               |                         |                               |                         |                               |                              |                               |
#           |                                   |                               |                   |                                |                       |                    |          |                                |                       |                    |          |                                |                       |                    |               |                                |                                        |
                
#                  |                     |
#   |                                |                       |                    |            |                                |                       |                    |     |                                |                       |                    |     |                                |                       |                              |                                |
#           |                               |                                         |                              |                       |                    |                           |                       |                    |                           |                       |                    |                                |                       |                    |
                
#   |         |                                   PRESENTATION                                                |                                |                    |   |                                |                    |   |                                |                    |        |                                |                    |
#                                                                                                                               |                               |     |                                   |                               |     |                                   |                               |          |                                   |                               |
#                |                             /         |      \                          |                                                                              |                               |     |                                   |                               |     |                                   |                               |          |                                   |                               |
                
#                        |               Simple QRcode/barcode generator  
               
#                   |            |                   Anyway          !                        |                                         |                                |                       |                    |                |                       |                    |                |                       |                    |                    |
                
#              |                      |                 have                                                 |                        |                                         |                                |                       |                    |                |                       |                    |                |                       |                    |                     |                                           |
                

#                 |                                  FUN         |                        |                                         |                                |                       |                    |                |                       |                    |                |                       |                    |                    |                                                                      |
                
#                                                         =)
                
#
#                                |                      or                                       |                                                            |                    |                |                       |                    |                |                       |                    |                    |                                           |
                

#              |                              |       DIE ! ! !        |                       |                            |                |                       |                    |                |                       |                    |                    |                                           |#      |                        |                                         |                                |
                
#
#                                                     !                                       |                                |                    |  |                                |                    |  |                                |                    |       |                                |                    |
                
#      |               |                                 !
                
#                  |                                                |            |                                   |                               |                           |                               |                           |                               |                                |                               |
#           |                                  !                                     |
                
#                  |                     |                                                     |                                   |                               |     |                                   |                               |     |                                   |                               |          |                                   |                               |
#   |                          |                       |                    !
#           |                                    |                                         |     |                    |                                    | |     |                    |                                    | |     |                    |                                    |      |     |                    |                                    |
#      |                        |                                 |      |                                |                       |                    |                |                       |                    |                |                       |                    |                    |                                           |
                
#                      |                                                |      |                                   |                               |                         |                               |                         |                               |                              |                               |
#           |                                   |                               |                   |                                |                       |                    |          |                                |                       |                    |          |                                |                       |                    |               |                                                                |
                
#                  |                     |
#   |                                |                       |                    |            |                                |                       |                    |     |                                |                       |                    |                                    |                       |                              |                                                                        |
#           |                               |                                         !                              |                       |                    |                           |                       |                    |                           |                       |                    |                                |                       |                    |
                
#_ _  _ ____ ___ ____ _    _    ____ ___ _ ____ _  _
#| |\ | [__   |  |__| |    |    |__|  |  | |  | |\ |
#| | \| ___]  |  |  | |___ |___ |  |  |  | |__| | \|
              
import sys,os,qrcode

from PyQt5.QtWidgets import QApplication, QWidget, QVBoxLayout, QLabel, QLineEdit, QCheckBox, QPushButton, QFileDialog, QMessageBox
from PyQt5.QtGui import QIcon 
from PyQt5.QtCore import Qt

from barcode import Code128
from barcode.writer import ImageWriter




#___  ____ _ _ _ ____ ____    ___  _    ____ _  _ ___
#|__] |  | | | | |___ |__/    |__] |    |__| |\ |  |
#|    |__| |_|_| |___ |  \    |    |___ |  | | \|  |
                

#OPENING | https://www.youtube.com/watch?v=_85LaeTCtV8 :3



#function to make an exe file without errors
def ressource_path(relative_path):
    try:
        base_path = sys._MEIPASS
    except Exception:
        base_path = os.path.abspath('.')
    return os.path.join(base_path, relative_path)
#to make it works, you have to rename all your path with ressource_path (/path/) WHEN YOU WILL TURN THE SCRIPT TO EXE
#Example : /icon/lol.png  BECOME  ressource_path(/icon/lol.png)



#Now the code generator
class codecrafter(QWidget):
    def __init__(self):
        super().__init__()

        self.selected_folder = None

        self.GUI()



#Function to zoom on fonts
    def scale_fonts(self, widget, scale_factor):
        for child in widget.children():
            if isinstance(child, QWidget):
                
                #Define zoom factor on the police font
                font = child.font()
                font.setPointSizeF(font.pointSizeF()*scale_factor)
                child.setFont(font)

                self.scale_fonts(child, scale_factor) #then apply



#Function to zoom with scroller
    def wheelEvent(self, event):
        if QApplication.keyboardModifiers() == Qt.ControlModifier: #if we press ctrl + scrolling mouse..
            delta = event.angleDelta().y() #define the angle of scrolling

            if delta > 0: #if we scroll up we zoom
                self.zoom(1.1)

            elif delta < 0:
                self.zoom(1 / 1.1)


#Function to zoom with ctrl "+" et "-"
    def keyPressEvent(self, event):

        if event.key() == Qt.Key_Plus: #if we press "+" = zoom and invert..
            self.zoom(1.1)

        elif event.key() == Qt.Key_Minus:
            self.zoom(1 / 1.1)
        else:
            super().keyPressEvent(event)


#Apply the zoom
    def zoom(self, scale_factor):
        self.scale_fonts(self, scale_factor)
        


#Function to ask to select the folder
    def select_folder(self):

        self.selected_folder = QFileDialog.getExistingDirectory(self, "Select folder")
        self.lab_folder.setText(f"Selected folder: {self.selected_folder}")




#Function to generate images from codes
    def generate_images(self):

        url = self.in_url.text()
        gen_qr = self.chkbx_qrx.isChecked()
        generate_barcode = self.chkbx_barcode.isChecked()

        
        #Pop up if no ticked box 
        if not gen_qr and not generate_barcode:
            QMessageBox.warning(self, "Warning", "Please choose an option.")
            return
        
        #Pop up if no folder
        if not self.selected_folder:
            QMessageBox.warning(self, "Warning", "Please select a folder for saving.")
            return
    
        #If options are chosen we launch script to generate codes
        if gen_qr:
            self.generate_qr_code(url)
        
        if generate_barcode:
            self.generate_barcode(url)
            
            
        QMessageBox.information(self, "Success", "The images have been generated.")




#function to generate qr code
    def generate_qr_code(self, url):

        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_L,
            box_size=10,
            border=4,
        )

        qr.add_data(url)
        qr.make(fit=True)

        img_qr = qr.make_image(fill_color="black", back_color="white")

        #Then we save in the chosen folder
        img_qr.save(f"{self.selected_folder}/QRcode.png")


#function to generate barcode with Code128 to generate barcode from a text
    def generate_barcode(self, url):
        code128 = Code128(url, writer=ImageWriter())
        code128.save(f"{self.selected_folder}/Barcode")





#Function of the graphical user interface
    def GUI(self):

        self.setWindowTitle("B A R C R A F T")
        self.setWindowIcon(QIcon(ressource_path("ico/barcraft.png")))
        self.setStyleSheet("""
QWidget {
    background-color: #B0F2B4;
    color: #023047;
    font-family: "Comic Sans MS";
}

QLineEdit {
    background-color: #BAD7F2;
    color: #023047;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    padding: 5px 10px;
}


QPushButton {
    background-color: #F2E2BA;
    color: #023047;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 5px 10px;
}

QPushButton:hover {
    background-color: #c7baf2;
}

QPushButton:pressed {
    background-color: #A0E2A4;



QCheckBox::indicator {
    border: 0.5px solid #023047;
    border-radius: 50%; 
    width: 10px;
    height: 10px;
}

QCheckBox::indicator:checked {
    background-color: #023047;
    border-color: #023047;
}

QCheckBox::indicator:hover {
    border-color: #F2E2BA;
}

QCheckBox::indicator:checked:hover {
    background-color: #F2E2BA;
    border-color: #F2E2BA;
}

QCheckBox::indicator:disabled {
    border-color: #B0F2B4;
    background-color: #B0F2B4;

}


""")

        #Buttons to do stuff
        self.in_url = QLineEdit()
        self.in_url.setPlaceholderText("Enter URL or text to display here")

        self.chkbx_qrx = QCheckBox("QR Code")
        self.chkbx_qrx.setChecked(True)

        self.chkbx_barcode = QCheckBox("Barcode")

        self.btn_select_folder = QPushButton("Select folder")
        self.btn_select_folder.clicked.connect(self.select_folder)

        self.btn_generator = QPushButton("Generate")
        self.btn_generator.clicked.connect(self.generate_images)

        #Button to show the choosen folder
        self.lab_folder = QLabel()
        
        lay_barcraft = QVBoxLayout()
        lay_barcraft.addWidget(self.in_url)
        lay_barcraft.addWidget(self.chkbx_qrx)
        lay_barcraft.addWidget(self.chkbx_barcode)
        lay_barcraft.addWidget(self.btn_select_folder)
        lay_barcraft.addWidget(self.btn_generator)
        lay_barcraft.addWidget(self.lab_folder)

        self.setLayout(lay_barcraft)
        



#____ ____ ____ _  _ ____ ___    _    ____ _  _ _  _ ____ _  _
#|__/ |  | |    |_/  |___  |     |    |__| |  | |\ | |    |__|
#|  \ |__| |___ | \_ |___  |     |___ |  | |__| | \| |___ |  |
                
#ENDING | https://www.youtube.com/watch?v=CgZVrvQZB6U&ab_channel=SECRETGUEST :3

if __name__ == '__main__':
    app = QApplication(sys.argv)
    window = codecrafter()
    window.show()
    sys.exit(app.exec_())
