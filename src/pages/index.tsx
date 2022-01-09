import Head from 'next/head';
import { useQuery, gql, NetworkStatus } from '@apollo/client';
import { SpacePhoto } from 'components/types/types';
import Grid from 'components/common/Grid';
import Card from 'components/home/Card';
import Header, { HeaderLinks, Nav } from 'components/common/Header';
import ErrorEmpty from 'components/common/ErrorEmpty';
import Layout from 'components/common/Layout';
import Link from 'next/link';
import Loading from 'components/common/Loading';
import Footer from 'components/common/Footer';

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
      ssr: false,
    },
  );

  const spacePhotos: SpacePhoto[] = data?.spacePhotosForHome;

  return (
    <>
      <Head>
        <title>SPACESTAGRAM 🚀</title>
        <meta
          name="description"
          content="Shopify is extending our mission to Make Commerce Better for Everyone to include the whole entire universe. "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header title="SPACESTAGRAM 🚀" />
        <Nav>
          <HeaderLinks onClick={() => refetch()}>
            {` `}✨ MORE PICS ✨
          </HeaderLinks>

          <Link href="/likes" passHref>
            <HeaderLinks>💖 LIKES 💖</HeaderLinks>
          </Link>
        </Nav>
        <main>
          {error && (
            <ErrorEmpty
              message={error.message}
              line01="Oopps 🙊 there is an Error:"
              line02="Try Again ?"
            />
          )}

          {loading || networkStatus === NetworkStatus.refetch ? (
            <Loading />
          ) : (
            <Grid>
              {spacePhotos?.map((spacePhoto) => (
                <Card key={spacePhoto.title} spacePhoto={spacePhoto} />
              ))}
            </Grid>
          )}

          {loading ||
            (networkStatus && (
              <HeaderLinks onClick={() => refetch()}>
                ✨ MORE PICS ✨
              </HeaderLinks>
            ))}
        </main>
        <Footer />
      </Layout>
    </>
  );
}
