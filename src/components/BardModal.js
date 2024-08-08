import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

function BardModal({ isOpen, closeModal }) {
  return (
    <ParallaxProvider>
      <Modal
        isOpen={isOpen}
        toggle={closeModal}
        fullscreen
        className="bard-modal-main-div"
      >
        <ModalHeader toggle={closeModal} className="bard-modal-header">
          <div className="bard-modal-header-text">BARD</div>
          <div className="bard-modal-header-text-two">Online Course</div>
        </ModalHeader>
        <ModalBody className="bard-modal-body-main">
          <div className="bard-modal-main-flex-container">
            <div className="bard-modal-intro-page-one-container">
              {/* <Parallax x={[50, -50]} tagOuter="div"> */}
              <div className="curtain-container">
                <div className="curtain-shadow-one-container">
                  <div className="curtain-shadow-one"></div>
                </div>
                <div className="curtain-shadow-two-container">
                  <div className="curtain-shadow-two"></div>
                </div>
                <div className="curtain-shadow-three-container">
                  <div className="curtain-shadow-three"></div>
                </div>
                <div className="curtain-shadow-four-container">
                  <div className="curtain-shadow-four"></div>
                </div>
                <div className="curtain-shadow-five-container">
                  <div className="curtain-shadow-five"></div>
                </div>
                <div className="curtain-shadow-six-container">
                  <div className="curtain-shadow-six"></div>
                </div>
                <div className="curtain-shadow-seven-container">
                  <div className="curtain-shadow-seven"></div>
                </div>
                <div className="curtain-shadow-eight-container">
                  <div className="curtain-shadow-eight"></div>
                </div>
                <div className="curtain-shadow-nine-container">
                  <div className="curtain-shadow-nine"></div>
                </div>
                <div className="curtain-shadow-ten-container">
                  <div className="curtain-shadow-ten"></div>
                </div>
              </div>
             
              {/* </Parallax> */}
            </div>
            {/* <div className="bard-modal-header-sub-text-container">
          <div className="bard-modal-header-sub-text">
            Shakespeare Online Course: JavaScript, React, Firebase, Firestore, Redux,
            SCSS, SASS. complete quizzes and earn medals, reach your certrificate!
          </div>
        </div> */}
               <Parallax scale={[1, 1]} rotate={[1, 1]}>
           <div className="bard-modal-page-two-container">
           <div className="bard-modal-intro">
                <div className="bard-modal-intro-text">
                  I created an online course platform for all 38 of
                  Shakespeare’s plays. This application aims to provide an
                  engaging way for users to explore Shakespeare's works through
                  a combination of reading, quizzes, and video content.
                </div>
              </div>
           </div>
           </Parallax>
          </div>

        </ModalBody>
        <ModalFooter className="bard-modal-footer">
          <Button
            color="danger"
            className="bard-modal-close-btn"
            onClick={closeModal}
          >
            EXIT
          </Button>
          <Button
            color="warning"
            className="bard-apk-download-btn"
            onClick={(src) =>
              window.open(
                "https://drive.google.com/file/d/1kblapPn0vab5BiiJwcaMAioJ5yW14cCf/view?usp=drive_link",
                "_blank"
              )
            }
          >
            Download APK
          </Button>
          <Button
            color="info"
            className="bard-modal-github-btn"
            onClick={(src) =>
              window.open(
                "https://github.com/ibrahim-karim-22/reactNativePortfolioProject"
              )
            }
          >
            GitHub
          </Button>
        </ModalFooter>
      </Modal>
    </ParallaxProvider>
  );
}

export default BardModal;
