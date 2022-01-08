import React, { createContext, useContext, useState, useEffect } from 'react';
import { SpacePhoto } from 'components/types/types';

type AppContextType = {
  likedPhotos: SpacePhoto[];
  setLikedPhotos: React.Dispatch<React.SetStateAction<SpacePhoto[] | []>>;
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

  const sharedState = {
    likedPhotos: likedPhotos,
    setLikedPhotos: setLikedPhotos,
  };
  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
