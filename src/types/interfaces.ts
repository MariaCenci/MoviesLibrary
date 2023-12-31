

export interface MovieType{
    id: number,
   tagline?: string,
    runtime?: string,
    overview?: string,
    genres?: Genre[] ,
    release_date?: Date ,
    poster_path?: string,
  vote_average?: string,
  original_title?: string,
    budget?: number 
  movie: string[],
  favorite?: boolean
  
  }


  

  export interface MovieCardProps {
    movie: MovieType 
    showBtn?: boolean,
          updateFavorites?: (updatedFavorites: MovieType[]) => void;   
          updateWatchList?: (updatedWatchList: MovieType[]) => void; 
          onTogglefavorite: (movieId: number, isFavorite: boolean) => void;  
          
       
  }

export type FavoriteProps = {
  userId?: string;
};



export type Movie = {
    id: number,
    favorite?: boolean,


  }

  export type Genre = {
    id: number,
    name: string
    
  }

  export type CarouselProps = {
movies?: Movie[],
onTogglefavorite?: (movieId: number, isFavorite: boolean) => void

  }


