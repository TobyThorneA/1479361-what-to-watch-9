import HomePage from '../../pages/home-page/home-page';
import {FilmCard, Promo} from '../../types';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import FilmPage from '../../pages/film-page/film-page';
import PlayerPage from '../../pages/player-page/player-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../../components/private-route/private-route';
interface AppProps {
  films: Array<FilmCard>,
  promo: Promo;
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
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyListPage/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerPage {...props}/>}
        />
        <Route
          path={AppRoute.Film}
          element={<FilmPage {...props}/>}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInPage/>}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReviewPage {...props}/>}
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
