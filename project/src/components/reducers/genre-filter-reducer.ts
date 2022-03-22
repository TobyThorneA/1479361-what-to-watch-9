import { createReducer } from '@reduxjs/toolkit';
import { changeGenre } from '../../store/action';


interface GenreFilterReducerProps {
  genre: string;
}

const defaultGenre: GenreFilterReducerProps = {
  genre: 'All Genres',
};

const reducer = createReducer(defaultGenre, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    });
});

export {reducer};
