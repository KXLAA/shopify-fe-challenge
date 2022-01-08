/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components';
import React, { useState } from 'react';
import { SpacePhoto } from 'components/types/types';
import device from 'components/common/MediaQueries';
import { useAppContext } from 'context/state';

const CardContainer = styled.div`
  background-color: #121212;
  border-radius: 0.5rem;
  padding: 1.5rem;
  -webkit-box-shadow: 3px 4px 15px -8px rgba(0, 0, 0, 0.71);
  box-shadow: 1px 4px 5px -8px rgba(0, 0, 0, 0.71);

  @media ${device.mobile} {
    background-color: #161616;
    padding: 1rem;
  }

  img {
    width: 100%;
    height: 25rem;
    border-radius: 0.5rem;
    padding-bottom: 1.5rem;
  }

  h2 {
    font-size: 1.3rem;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: solid 1px;

    &:hover {
      transition: all 0.3s ease;
      color: yellow;
    }
  }

  p {
    padding-bottom: 1.5rem;
    font-size: 0.9375rem;
  }
`;

type ButtonProps = {
  bg?: string;
  color?: string;
};

const Button = styled.button<ButtonProps>`
  width: 100%;
  max-width: 100px;
  border: none;
  outline: none;
  background: ${(props) => props.bg || `#202020`};
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-weight: 700;
  color: ${(props) => props.color || `#e5e5e5`};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: yellow;
    color: #202020;
    transform: translateX(0rem) translateY(-0.125rem);
  }
  &:active:not(:disabled) {
    transform: translateX(0rem) translateY(0.125rem);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

type CardProps = {
  spacePhoto: SpacePhoto;
};

function Card({ spacePhoto }: CardProps) {
  const [readMore, setReadMore] = useState(false);
  const { likedPhotos, setLikedPhotos } = useAppContext();

  const handleLike = () => {
    // If photo does not exist in the likes array array, add photo to likes array
    if (!likedPhotos?.some((photo) => photo.title === spacePhoto.title)) {
      setLikedPhotos([...likedPhotos, spacePhoto]);
      // If photo does exist in the likes array, remove photo from likes array
    } else if (likedPhotos?.some((photo) => photo.title === spacePhoto.title))
      setLikedPhotos(
        likedPhotos.filter((photo) => photo.title !== spacePhoto.title),
      );
  };

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
              onClick={handleLike}
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
