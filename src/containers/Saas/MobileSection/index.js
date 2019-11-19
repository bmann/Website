import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Card from 'reusecore/src/elements/Card';
import Image from 'reusecore/src/elements/Image';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import MobileSectionWrapper, { SectionObject } from './mobile.style';

import ImageOne from '../../../img/phone-screen-1@2x.png';
import ImageTwo from '../../../img/phone-screen-2@2x.png';
import DownloadMobile from '../../../img/download-mobile.png';
import ImageBg from 'common/src/assets/image/saas/banner/bannerObject1.png';

const MobileSection = ({
  tag,
  title,
  description,
  textArea,
  imageWrapper,
  imageDownload,
}) => {
  return (
    <MobileSectionWrapper id="mobileSection">
      <Container>
        <Box {...textArea}>
          <Heading
            content="Comming soon"
            {...tag}
          />
          <FeatureBlock
            title={
              <Heading
                content="Quickly save & organise content on the go"
                {...title}
              />
            }
            description={
              <Text
                content="Securely sync your Memex between browsers, iOS & Android devices."
                {...description}
              />
            }
          />
          <Image src={DownloadMobile} {...imageDownload} className="mobileDownload" alt="Download mobile" />
        </Box>
      </Container>
      <SectionObject>
        <Card className="objectWrapper" {...imageWrapper}>
          <Zoom>
            <Image src={ImageBg} className="bg-image" alt="BgImage" />
          </Zoom>
          <Card className="imageOne" {...imageWrapper}>
            <Fade right>
              <Image src={ImageOne} className="mobile-img" alt="Mobile 1" />
            </Fade>
          </Card>
          <Card className="imageTwo" {...imageWrapper}>
            <Fade right>
              <Image src={ImageTwo} className="mobile-img" alt="Mobile 2" />
            </Fade>
          </Card>
        </Card>
      </SectionObject>
    </MobileSectionWrapper>
  );
};

MobileSection.propTypes = {
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object,
};

MobileSection.defaultProps = {
  textArea: {
    width: ['100%', '100%', '45%'],
    mr: [0, 0, '58%'],
  },
  imageWrapper: {
    boxShadow: 'none',
  },
  tag: {
    fontWeight: 'bold',
    fontSize: '50px'
  },
  title: {
    fontSize: ['20px', '26px', '26px', '36px', '36px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
    lineHeight: '1.4',
  },
  description: {
    fontSize: '20px',
    lineHeight: '30px',
    color: '#757280',
    mb: '33px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
  },
  imageDownload: {
    opacity: 0.5,
    height: '80px',
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
};

export default MobileSection;
