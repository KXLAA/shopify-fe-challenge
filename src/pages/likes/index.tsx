import React from 'react';
import Link from 'next/link';
import Grid from 'components/common/Grid';
import Card from 'components/likes/Card';
import Header, { HeaderLinks } from 'components/common/Header';
import styled from 'styled-components';
import ErrorEmpty from 'components/common/ErrorEmpty';
import { useAppContext } from 'context/state';
import Layout from 'components/common/Layout';

const LikeLink = styled(HeaderLinks)`
  margin-bottom: 1.5rem;
`;

function Likes() {
  const { likedPhotos } = useAppContext();

  return (
    <Layout>
      <Header
        title={`YOU HAVE ${likedPhotos.length} ${
          likedPhotos.length === 1 ? `LIKES 💖` : `LIKES 💖`
        } `}
      />
      <LikeLink>
        <Link href="/">BACK HOME 🚀</Link>
      </LikeLink>

      {likedPhotos.length <= 0 ? (
        <ErrorEmpty
          line01="Your likes are empty 😔"
          line02="✨ Checkout some Space Pics ✨"
        />
      ) : (
        <Grid>
          {likedPhotos.map((spacePhoto) => (
            <Card key={spacePhoto.title} spacePhoto={spacePhoto} />
          ))}
        </Grid>
      )}
    </Layout>
  );
}

export default Likes;
