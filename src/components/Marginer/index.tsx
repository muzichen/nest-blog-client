import styled from "styled-components";

interface MarginerProps {
  direction?: 'horizontal' | 'vertical';
  margin?: number | string;
}

const HorizontalMargin = styled.span<MarginerProps>`
  display: flex;
  min-width: ${({ margin }) => typeof margin === 'string' ? margin : `${margin}px`};
`

const VerticalMargin = styled.span<MarginerProps>`
  display: flex;
  min-height: ${({ margin }) => typeof margin === 'string' ? margin : `${margin}px`};
`

const Marginer = (props: MarginerProps): JSX.Element => {
  const { direction } = props;
  if (direction === 'horizontal') return <HorizontalMargin { ...props } />
  return <VerticalMargin { ...props } />
}

export default Marginer;


