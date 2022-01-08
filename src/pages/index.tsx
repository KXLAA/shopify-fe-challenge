import Head from 'next/head';
import { useQuery, gql, NetworkStatus } from '@apollo/client';
import { SpacePhoto } from 'components/types/types';
import Grid from 'components/common/Grid';
import Card from 'components/home/Card';
import Header, { HeaderLinks, Container } from 'components/common/Header';
import ErrorEmpty from 'components/common/ErrorEmpty';
import Layout from 'components/common/Layout';
import Link from 'next/link';

export const SPACE_PHOTOS_FOR_HOME = gql`
  query SpacePhotosForHome {
    spacePhotosForHome {
      copyright
      explanation
      hdurl
      title
      url
      date
    }
  }
`;

export default function Home() {
  const { loading, error, data, refetch, networkStatus } = useQuery(
    SPACE_PHOTOS_FOR_HOME,
    {
      notifyOnNetworkStatusChange: true,
    },
  );

  const spacePhotos: SpacePhoto[] = data?.spacePhotosForHome;

  return (
    <Layout>
      <Head>
        <title>SPACESTAGRAM 🚀</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="SPACESTAGRAM 🚀" />

      <Container>
        <HeaderLinks onClick={() => refetch()}> ✨ MORE PICS ✨</HeaderLinks>
        <HeaderLinks>
          <Link href="/likes">💖 LIKES 💖</Link>
        </HeaderLinks>
      </Container>

      {error && (
        <ErrorEmpty
          message={error.message}
          line01="Oopps 🙊 there is an Error:"
          line02="Try Again ?"
        />
      )}

      {loading || networkStatus === NetworkStatus.refetch ? (
        <p>Loading</p>
      ) : (
        <Grid>
          {spacePhotos?.map((spacePhoto) => (
            <Card key={spacePhoto.title} spacePhoto={spacePhoto} />
          ))}
        </Grid>
      )}
    </Layout>
  );
}
