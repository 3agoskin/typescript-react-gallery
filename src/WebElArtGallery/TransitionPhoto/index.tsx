import {
    Ref,
    useEffect,
    useLayoutEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import cl from "classnames";
import { Photo, CommonClassProps } from "../types";

import style from "./index.module.scss";

interface TransitionPhotoProps extends CommonClassProps {
    photos: Photo[];
    indexActivePhoto: number;
}

type RefT = React.MutableRefObject<HTMLDivElement | null>;
const getPhotoByRef = (ref: RefT, index: number): HTMLElement | null =>
    ref.current!.querySelector(`img:nth-of-type(${index + 1})`);

const hidePhoto = (element: HTMLElement | null) => {
    if (!element) {
        return;
    }
    element.dataset.active = "false";

    if (element.previousSibling) {
        // @ts-ignore
        element.previousSibling.dataset.active = "false";
    }

    if (element.nextSibling) {
        // @ts-ignore
        element.nextSibling.dataset.active = "false";
    }
};

const showPhoto = (element: HTMLElement | null) => {
    if (!element) {
        return;
    }
    element.dataset.active = "true";

    if (element.previousSibling) {
        // @ts-ignore
        element.previousSibling.dataset.active = "prepered";
    }

    if (element.nextSibling) {
        // @ts-ignore
        element.nextSibling.dataset.active = "prepered";
    }
};

export const TransitionPhoto: React.FC<TransitionPhotoProps> = ({
    photos,
    indexActivePhoto,
    className,
}) => {
    const [prevActiveIndexPhoto, setPrevActiveIndexPhoto] =
        useState(indexActivePhoto);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        if (!containerRef) {
            return;
        }

        const activePhoto = getPhotoByRef(containerRef, prevActiveIndexPhoto);

        const nextActivePhoto = getPhotoByRef(containerRef, indexActivePhoto);

        if (prevActiveIndexPhoto !== indexActivePhoto) {
            hidePhoto(activePhoto);
            showPhoto(nextActivePhoto);
        } else {
            showPhoto(activePhoto);
        }

        setPrevActiveIndexPhoto(indexActivePhoto);
    }, [indexActivePhoto]);

    return useMemo(
        () => (
            <div
                className={cl(className, style.transitionPhoto)}
                ref={containerRef}
            >
                {photos.map((photo, id) => (
                    <img
                        key={id}
                        className={style.transitionPhotoImage}
                        data-active={id === indexActivePhoto}
                        src={photo.src}
                        alt={photo.description}
                        loading="lazy"
                    />
                ))}
            </div>
        ),
        []
    );
};
