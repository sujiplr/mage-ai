import styled from 'styled-components';

import dark from '@oracle/styles/themes/dark';
import { BORDER_RADIUS_XLARGE } from '@oracle/styles/units/borders';
import { UNIT } from '@oracle/styles/units/spacing';

const MAX_HEIGHT = UNIT * 60;
const MAX_WIDTH = UNIT * 100;

export const BarContainerStyle = styled.div`
  border-radius: ${BORDER_RADIUS_XLARGE}px;
  height: 100%;
  left: 50%;
  max-height: ${MAX_HEIGHT}px;
  max-width: ${MAX_WIDTH}px;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 100;

  ${props => `
    backdrop-filter: saturate(140%) blur(${UNIT * 2}px);
    background-color: ${(props.theme.background || dark.background).overlayBlur};
  `}
`;
