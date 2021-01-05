import React from 'react';
import {
  ContentWrapper,
  TipContentWrapper,
  QRImage
} from './display-mobile-view.styles';
import QRCode from './qr-code.png';

const MobileViewOnly: React.FC = () => {
  return (
    <ContentWrapper>
      <TipContentWrapper>
        Please scan QR code with phone to open the App
      </TipContentWrapper>
      <QRImage src={QRCode} />
    </ContentWrapper>
  );
};

export default MobileViewOnly;
