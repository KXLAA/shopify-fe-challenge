/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components';
import React from 'react';
import { SpacePhoto } from 'components/types/types';
import { useAppContext } from 'context/state';

const CardContainer = styled.div`
  background-color: #121212;
  border-radius: 0.5rem;
  padding: 24px;
  -webkit-box-shadow: 3px 4px 15px -8px rgba(0, 0, 0, 0.71);
  box-shadow: 1px 4px 5px -8px rgba(0, 0, 0, 0.71);

  img {
    width: 100%;
    height: 25rem;
    border-radius: 0.5rem;
    padding-bottom: 1.5rem;
  }

  h2 {
    text-align: center;
    font-size: 1.2rem;
    padding-bottom: 1rem;
  }
`;

const Button = styled.button`
  width: 100%;
  border: none;
  outline: none;
  background: #202020;
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-weight: 700;
  color: #e5e5e5;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled),
  &:disabled:not(:disabled) {
    background: yellow;
    color: #202020;
    transform: translateX(0rem) translateY(-0.125rem);
  }
`;

type CardProps = {
  spacePhoto: SpacePhoto;
};

function Card({ spacePhoto }: CardProps) {
  const { likedPhotos, setLikedPhotos } = useAppContext();

  const handleLike = () => {
    // If photo does not exist in the likes array array, add photo to likes array
    if (!likedPhotos?.some((photo) => photo.title === spacePhoto.title)) {
      setLikedPhotos([...likedPhotos, spacePhoto]);
      // If photo does exist in the likes array array, remove photo from likes array
    } else if (likedPhotos?.some((photo) => photo.title === spacePhoto.title))
      setLikedPhotos(
        likedPhotos.filter((photo) => photo.title !== spacePhoto.title),
      );
  };

  return (
    <CardContainer>
      <img src={spacePhoto?.url} alt={spacePhoto.title} />

      <a href={spacePhoto?.hdurl} target="_blank" rel="noreferrer">
        <h2>{spacePhoto?.title}</h2>
      </a>
      <Button type="button" onClick={handleLike}>
        unlike
      </Button>
    </CardContainer>
  );
}

export default Card;
