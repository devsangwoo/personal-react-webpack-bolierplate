import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import styles from './style.module.scss';

const ImageBox = ({ images }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className={styles.wrapper} onClick={() => setIsOpen(true)}>
        <span className={styles.modalImgContainer}>
          <img className={styles.modalImg} src={images[0]} />
        </span>
        <span className={styles.modalImgContainer}>
          <img className={styles.modalImg} src={images[1]} />
        </span>
      </div>

      {isOpen && (
        <Lightbox
          wrapperClassName={'MyGallery'}
          enableZoom={false}
          imageCaption={
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <p className={styles.modalFont}>
                {photoIndex + 1} of {images.length}
              </p>
            </div>
          }
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default ImageBox;
