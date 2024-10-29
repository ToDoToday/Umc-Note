import React from 'react';
import './App.css';
import NotFound from './page/NotFound.jsx';
import MoviePage from './page/MoviePage.jsx';
import MovieDetailPage from './page/MovieDetailPage.jsx';
import LoginPage from './page/LoginPage.jsx';
import SignupPage from './page/SignupPage.jsx';
import SearchPage from './page/SearchPage.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import RootLayout from './layout/root-layout.jsx';
import Category from './page/Category.jsx';
import NowPlaying from './page/NowPlaying.jsx';  
import Popular from './page/Popular.jsx';  
import Upcoming from './page/Upcoming.jsx';  
import TopRated from './page/TopRated.jsx';  
import { createGlobalStyle } from 'styled-components';

// 글로벌 스타일 정의
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0;
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <MoviePage />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'signup',
        element: <SignupPage />
      },
      {
        path: 'search',
        element: <SearchPage />
      },
      {
        path: 'category',
        element: <Category />
      },
      {
        path: 'movies/now-playing', 
        element: <NowPlaying />
      },
      {
        path: 'movies/popular', 
        element: <Popular />
      },
      {
        path: 'movies/top-rated', 
        element: <TopRated />
      },
      {
        path: '/movies/up-coming', 
        element: <Upcoming />
      },
      {
        path: '/movies/:movieid',
        element: <MovieDetailPage/>
      }
    ]
  },
]);

function App() {
  return (
    <>
      <GlobalStyle /> {/* 글로벌 스타일 적용 */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
