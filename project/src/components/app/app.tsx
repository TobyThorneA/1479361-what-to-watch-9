import HomePage from '../../pages/home-page/home-page';
import {Movie, Promo} from '../../types';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import AddReview from '../../pages/add-review-page/add-review-page';
import Film from '../../pages/film-page/film-page';
import Player from '../../pages/player-page/player-page';
import SignIn from '../../pages/sign-in-page/sign-in-page';
import MyList from '../../pages/my-list-page/my-list-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../../components/private-route/private-route';
interface AppProps {
  movies: Array<Movie>,
  promo: Promo,
}

function App(props: AppProps) {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<HomePage {...props}/>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyList/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player}
          element={<Player/>}
        />
        <Route
          path={AppRoute.Film}
          element={<Film/>}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn/>}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReview/>}
        />
        <Route
          path='*'
          element={<NotFoundPage/>}
        />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
