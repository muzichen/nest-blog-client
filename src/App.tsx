import React from 'react';
import tw from 'twin.macro';
import HomePage from './containers/HomePage';

const Wrapper = tw.div`
  w-full
  flex
  flex-col
  bg-gray-100
`

const App = (): JSX.Element => {
  return (
    <Wrapper>
      <HomePage />
    </Wrapper>
  )
}

export default App;
