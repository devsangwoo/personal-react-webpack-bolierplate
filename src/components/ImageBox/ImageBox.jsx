import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import styles from './style.module.scss';

const imagesCaption = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
];

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
              <p>{imagesCaption[0].slice(0, 65).concat('...')}</p>
              <p>
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
