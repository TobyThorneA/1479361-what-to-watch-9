import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, showMore } from '../../store/action';
import { GenreFilterReducerProps } from '../../types';


const defaultGenre: GenreFilterReducerProps = {
  genre: 'All Genres',
  filmsCount: 8,
};

const reducer = createReducer(defaultGenre, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.filmsCount = defaultGenre.filmsCount;
    })
    .addCase(showMore, (state) => {
      state.filmsCount += 8;
    });
});

export {reducer};
