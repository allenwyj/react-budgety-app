import styled from 'styled-components';

export const ContentWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);

  // Media query for hiding content in mobile view
  @media only screen and (max-device-width: 520px) {
    display: none;
  }
`;

export const TipContentWrapper = styled.p`
  position: fixed;
  top: 30%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  color: #fff;
`;

export const QRImage = styled.img`
  position: fixed;
  top: 50%;
  left: 50%;
  height: 256px;
  width: 256px;
  z-index: 2;
  transform: translate(-50%, -50%);
`;
