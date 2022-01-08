/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { SpacePhoto } from 'components/types/types';
import { useAppContext } from 'context/state';
import { CardContainer, Button, ButtonContainer } from 'components/common/Card';

type CardProps = {
  spacePhoto: SpacePhoto;
};

function Card({ spacePhoto }: CardProps) {
  const [readMore, setReadMore] = useState(false);
  const { likedPhotos, handleLike } = useAppContext();

  const likedBg = likedPhotos?.some((photo) => photo.title === spacePhoto.title)
    ? `yellow`
    : `#202020`;

  const likedColor = likedPhotos?.some(
    (photo) => photo.title === spacePhoto.title,
  )
    ? `#202020`
    : `#e5e5e5`;

  return (
    <CardContainer>
      <img src={spacePhoto?.url} alt={spacePhoto.title} />
      <a href={spacePhoto?.hdurl} target="_blank" rel="noreferrer">
        <h2>{spacePhoto?.title}</h2>
      </a>

      {spacePhoto?.explanation.length > 300 ? (
        <>
          <p>
            {spacePhoto?.explanation.slice(0, 300)}
            {readMore ? null : `...`}
            {readMore && spacePhoto?.explanation.slice(300)}
          </p>

          <ButtonContainer>
            <Button
              type="button"
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              {readMore ? `see less` : `see more`}
            </Button>

            <Button
              type="button"
              onClick={() => handleLike(spacePhoto)}
              bg={likedBg}
              color={likedColor}
            >
              {likedPhotos?.some((photo) => photo.title === spacePhoto.title)
                ? `liked`
                : `like`}
            </Button>
          </ButtonContainer>
        </>
      ) : (
        <p>{spacePhoto?.explanation}</p>
      )}
    </CardContainer>
  );
}

export default Card;
