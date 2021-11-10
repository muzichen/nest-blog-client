import { Routes, Route } from 'react-router-dom';
import tw from 'twin.macro';
import ArticleDetail from './containers/ArticleDetail';
import HomePage from './containers/HomePage';
import Header from './layouts/Header';

const Wrapper = tw.div`
  w-full
  flex
  flex-col
  bg-gray-100
`

const MainWrapper = tw.div`
  w-full
`

const App = (): JSX.Element => {
  return (
    <Wrapper>
      <Header />
      <MainWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
        </Routes>
      </MainWrapper>
      {/* <HomePage /> */}
      {/* <ArticleDetail /> */}
    </Wrapper>
  )
}

export default App;
