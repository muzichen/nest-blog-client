import { Router } from '@reach/router';
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
        <Router>
          <HomePage path="/" />
          <ArticleDetail path="/article/:id" />
        </Router>
      </MainWrapper>
      {/* <HomePage /> */}
      {/* <ArticleDetail /> */}
    </Wrapper>
  )
}

export default App;
