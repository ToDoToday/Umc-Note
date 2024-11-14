import React, { useState , useEffect} from 'react';
import './App.css';
import NotFound from './page/NotFound.jsx';
import HomePage from './page/HomePage.jsx';
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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


// 글로벌 스타일 정의
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: black;
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
        element: <HomePage />
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

const queryClient = new QueryClient()


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // 로컬 스토리지에서 토큰을 가져와 인증 상태 설정
  useEffect(() => {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
          setIsAuthenticated(true);  // 토큰이 있으면 인증된 상태로 설정
      }
  }, []); 

  return (
      <>
          <QueryClientProvider client={queryClient}>
            <GlobalStyle />
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
      </>
  );
}


export default App;
