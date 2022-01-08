import React, { createContext, useContext, useState, useEffect } from 'react';
import { SpacePhoto } from 'components/types/types';

type AppContextType = {
  likedPhotos: SpacePhoto[];
  handleLike: (spacePhoto: SpacePhoto) => void;
};

const AppContext = createContext({} as AppContextType);
const getLocalStorage = (): SpacePhoto[] | [] => {
  // Get value from local storage if it exists
  let likes: string | null;
  let likesArray: SpacePhoto[];

  if (typeof window !== `undefined`) {
    likes = localStorage.getItem(`likes`);
    if (likes && typeof likes === `string`) {
      likesArray = JSON.parse(likes);
      return likesArray;
    }
  }
  return [];
};

export function AppWrapper({
  children,
}: React.PropsWithChildren<Record<never, any>>) {
  const [likedPhotos, setLikedPhotos] = useState(getLocalStorage());

  useEffect(() => {
    if (typeof window !== `undefined`) {
      try {
        localStorage.setItem(`likes`, JSON.stringify(likedPhotos));
      } catch (error) {
        console.log(error);
      }
    }
  }, [likedPhotos]);

  const handleLike = (spacePhoto: SpacePhoto) => {
    // If photo does not exist in the likes array array, add photo to likes array
    if (!likedPhotos?.some((photo) => photo.title === spacePhoto.title)) {
      setLikedPhotos([...likedPhotos, spacePhoto]);
      // If photo does exist in the likes array array, remove photo from likes array
    } else if (likedPhotos?.some((photo) => photo.title === spacePhoto.title))
      setLikedPhotos(
        likedPhotos.filter((photo) => photo.title !== spacePhoto.title),
      );
  };

  const sharedState = {
    likedPhotos: likedPhotos,
    handleLike: handleLike,
  };
  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
