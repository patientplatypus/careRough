
import styled from 'styled-components';
// import glamorous, {ThemeProvider} from 'glamorous'
import glamorous from 'glamorous';


export const Flex = glamorous.div({
        display: 'flex'   
    }   
    ,({size = 1}) => ({
        flex: size
    })
);

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%
`;
