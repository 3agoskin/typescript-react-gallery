import { Photo } from "./types";
import { TransitionPhoto } from "./TransitionPhoto";
import { PreviewGallery } from "./PreviewGallery";
import { Navigation } from "./Navigation";

import style from "./index.module.scss"
import { useState } from "react";

interface WebElArtGalleryProps {
    photos: Photo[]
}

export const WebElArtGallery: React.FC<WebElArtGalleryProps> = ({
    photos,
}) => {
    if (!photos.length) {
        return null;
    }

    const [indexActivePhoto, setIndexActivePhoto] = useState(0);
    const activePhoto = photos[indexActivePhoto];
    const prevPhoto = photos[indexActivePhoto - 1];
    const nextPhoto = photos[indexActivePhoto + 1];

    return (
        <div className={style.webelartGallery}>
            <div className={style.webelartGalleryContainer}>
                <TransitionPhoto 
                    photos={photos}
                    indexActivePhoto={indexActivePhoto}
                />
                <Navigation 
                    className={style.webelartGalleryNavigation}
                    disabledPrev={!prevPhoto}
                    disabledNext={!nextPhoto}
                    onPrevClick={() => {
                        setIndexActivePhoto(indexActivePhoto - 1);
                    }}
                    onNextClick={() => {
                        setIndexActivePhoto(indexActivePhoto + 1);
                    }}
                />
            </div>
            <PreviewGallery 
                activePhotoIndex={indexActivePhoto}
                photos={photos}
                className={style.webelartGalleryPreviewList}
            /> 
        </div>
    )
}