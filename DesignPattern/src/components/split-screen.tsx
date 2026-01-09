import React from 'react'
import styled from 'styled-components';

interface SplitScreenProps {
  //Left: React.ComponentType;
  //Right: React.ComponentType;
    children: React.ReactNode;
    LeftWidth?: number;
    RightWidth?: number;
}
interface PanelProps {
  flex: number;
}

const Container = styled.div`
  display: flex;
`;
const Panel = styled.div<PanelProps>`
  flex: ${({ flex }) => flex};
`;

const SplitScreen : React.FC<SplitScreenProps> = ({children,LeftWidth=1,RightWidth =1}) => {
    const [Left, Right] = React.Children.toArray(children);
  return (
    
   <Container>
        <Panel flex={LeftWidth}>
          {Left}
        </Panel>  
        <Panel flex={RightWidth}>
            {Right}                         
        </Panel>
    </Container>
  )
}

export default SplitScreen
