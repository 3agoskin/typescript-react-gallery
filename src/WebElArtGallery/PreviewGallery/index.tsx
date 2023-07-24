import cl from "classnames";
import { Photo, CommonClassProps } from "../types";
import { useEffect, useMemo, useRef } from "react";

import style from "./index.module.scss";

interface PreviewGalleryProps extends CommonClassProps {
    activePhotoIndex: number;
    photos: Photo[];
    setNewPhoto: (id: number) => void;
}

export const PreviewGallery: React.FC<PreviewGalleryProps> = ({
    activePhotoIndex,
    photos,
    className,
    setNewPhoto,
}) => {
    if (!photos.length) {
        return null;
    }

    const previewContainer = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (!previewContainer.current) {
            return;
        }

        previewContainer.current.style.transform = `translate3d(-${
            activePhotoIndex * 164
        }px, 0, 0)`;
    }, [activePhotoIndex]);

    return (
        <div className={cl(style.previewGallery, className)}>
            {useMemo(
                () => (
                    <ul
                        className={style.previewGalleryTrack}
                        ref={previewContainer}
                    >
                        {photos.map((photo, index) => (
                            <li
                                // className={style.previewGalleryPreview}
                                key={index}
                            >
                                <button
                                    className={style.previewGalleryPreview}
                                    onClick={() => setNewPhoto(index)}
                                >
                                    <img
                                        src={photo.preview}
                                        alt={photo.description}
                                    />
                                </button>
                            </li>
                        ))}
                    </ul>
                ),
                []
            )}
            <div className={style.previewGalleryCover}>
                {activePhotoIndex + 1} / {photos.length}
            </div>
        </div>
    );
};
