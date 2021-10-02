import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Board testimonials',
    paragraph: 'The caption contest has helped our board in numerous ways. Check out what some of them had to say:'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    My sense of humor used to come from solely iFunny memes and TikToks, but the witty knee-slapping captions I've seen on this web app have helped me finally tell jokes that people can laugh at!
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Thomas Kain</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a>Writer</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    The proceeds from our NFT sales have helped the Lampoon purchase enough Adderall to get the entire board through finals. Thanks for your hard work, compers.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Ishaan Prasad</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a>Business Board</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                  01001001 00100000 01101000 01100001 01110110 01100101 00100000 00110001 00110010 00100000 01101011 01101001 01100100 01110011 00100000 01101001 01101110 00100000 01110100 01101000 01100101 00100000 01100011 01100001 01110011 01110100 01101100 01100101 00100000 01100010 01100001 01110011 01100101 01101101 01100101 01101110 01110100 00001010
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">David Hacker</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://www.rapidtables.com/convert/number/binary-to-ascii.html">Tech Board</a>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;