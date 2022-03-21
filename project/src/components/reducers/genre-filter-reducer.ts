import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, clickShowMoreButton } from '../../store/action';


interface GenreFilterReducerProps {
  genre: string;
  numberFilms: number;
}

const defaultGenre: GenreFilterReducerProps = {
  genre: 'All Genres',
  numberFilms: 8,
};

const reducer = createReducer(defaultGenre, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.numberFilms = defaultGenre.numberFilms;
    })
    .addCase(clickShowMoreButton, (state) => {
      state.numberFilms = state.numberFilms + 8;
    });
});

export {reducer};
