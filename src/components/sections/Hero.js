import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Modal from '../elements/Modal';
import source from './lamp.png';

import {Box, Stack, Center, Image, Heading, Text, ChakraProvider} from '@chakra-ui/react'


const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
          <Center>
                <Image src={source} />
            </Center>
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              welcomes you to <span className="text-color-secondary">NFT Mash</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
               Help us be funny. Caption our art, upvote top captions, and we'll add them to our content or turn them into NFTs (whichever one makes us more money off of your hard work).
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href='/login'>
                    Get started
                    </Button>
                  <Button tag="a" color="dark" wideMobile href="https://github.com/rnori-harv/nftmash">
                    View on Github
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;