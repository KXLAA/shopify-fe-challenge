import React, { createContext, useContext, useState, useEffect } from 'react';
import { SpacePhoto } from 'components/types/types';

type AppContextType = {
  likedPhotos: SpacePhoto[];
  handleLike: (spacePhoto: SpacePhoto) => void;
};

const AppContext = createContext({} as AppContextType);
const getLocalStorage = (): SpacePhoto[] | [] => {
  let likes: string | null;
  let likesArray: SpacePhoto[];

  // If we are in the client environment where window is accessible.
  if (typeof window !== `undefined`) {
    // Get value from local storage if it exists
    likes = localStorage.getItem(`likes`);
    if (likes && typeof likes === `string`) {
      likesArray = JSON.parse(likes);
      return likesArray;
    }
  }
  // If value does not exists, return an empty array
  return [];
};

export function AppWrapper({
  children,
}: React.PropsWithChildren<Record<never, any>>) {
  // we are getting the initial state value from local storage
  const [likedPhotos, setLikedPhotos] = useState(getLocalStorage());

  useEffect(() => {
    if (typeof window !== `undefined`) {
      try {
        // add photo to local storage when it is liked ie added to the likedPhotos array
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
