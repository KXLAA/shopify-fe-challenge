/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { SpacePhoto } from 'components/types/types';
import { useAppContext } from 'context/state';
import { CardContainer, Button } from 'components/common/Card';

type CardProps = {
  spacePhoto: SpacePhoto;
};

function Card({ spacePhoto }: CardProps) {
  const { handleLike } = useAppContext();

  return (
    <CardContainer>
      <img src={spacePhoto?.url} alt={spacePhoto.title} />

      <a href={spacePhoto?.hdurl} target="_blank" rel="noreferrer">
        <h2>{spacePhoto?.title}</h2>
      </a>
      <Button type="button" onClick={() => handleLike(spacePhoto)}>
        unlike
      </Button>
    </CardContainer>
  );
}

export default Card;
