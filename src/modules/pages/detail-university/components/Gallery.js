import React, { useEffect, useState, useCallback } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
//internal modules
import detailUniversityQuery from 'query/detail-university';
//internal components
import LoadingIcon from 'common/loading/LoadingIcon';
import Author from 'modules/pages/detail-university/common/Author';
//external components
import GalleryImages from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

function Gallery() {
  //STATE
  const { slug } = useParams();
  const { data, loading, error } = useQuery(detailUniversityQuery.GET_GALLERY, {
    variables: {
      id: slug,
    },
  });
  const galleries =
    !loading &&
    !error &&
    !!data &&
    data.allUniversities[0].detailUniversity.galeries;

  const [photoAlbum, setPhotoAlbum] = useState([]);
  //Feature: clicking shows image full size on screen
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  //METHOD
  // Assign image to state photoAlbum variable from image api
  const fetchPhoto = () => {
    if (!!galleries) {
      let array = [];
      galleries.map((item) => {
        array = [
          ...array,
          {
            src: item.image.publicUrl,
            alt: 'gallery',
            width: Math.floor(Math.random() * 3) + 1,
            height: 1,
            className: 'img-gallery',
          },
        ];
        return '';
      });
      setPhotoAlbum(array);
    }
  };
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  //LIFECYCLE
  useEffect(() => {
    fetchPhoto();
  }, [data, loading, error]);

  return (
    <div className="gallery-container container">
      <Author />
      <h1 className="title-galery">Các hoạt động của trường</h1>
      {!!galleries ? (
        <div>
          {/* shows all of images on gallery */}
          <GalleryImages photos={photoAlbum} onClick={openLightbox} />
          {/* click to show full image */}
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photoAlbum.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      ) : (
        <LoadingIcon />
      )}
    </div>
  );
}

export default Gallery;
