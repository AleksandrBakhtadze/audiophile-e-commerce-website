import React from 'react';
import styled from 'styled-components';
import image_mobile from '/shared/mobile/image-best-gear.jpg';
import image_tablet from '/shared/tablet/image-best-gear.jpg';
import image_desktop from '/shared/desktop/image-best-gear.jpg';

const AboutUs = () => {
  const width = window.innerWidth;
  return (
    <Wrapper className='container'>
      <div>
        <img
          src={`${
            width >= 1280
              ? image_desktop
              : width >= 768
              ? image_tablet
              : image_mobile
          }`}
          alt='best gear'
        />
      </div>
      <Content>
        <h4>
          bringing you the <span>best</span> audio gear
        </h4>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 2rem;
  padding-bottom: 3rem;
  div {
    img {
      margin-bottom: 2.5rem;
      width: 100%;
      max-width: 100%;
      height: auto;
      border-radius: var(--radius);
      object-fit: cover;
      display: block;
    }
  }
  @media screen and (max-width: 480px) {
    gap: 1.5rem;
    padding-bottom: 2rem;
    div {
      img {
        margin-bottom: 1.5rem;
      }
    }
  }
  @media screen and (min-width: 768px) {
    gap: 3rem;
    div {
      img {
        margin-bottom: 4rem;
      }
    }
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row-reverse;
    align-items: center;
    gap: 7rem;
    div {
      max-width: 50%;
      img {
        margin-bottom: 0;
      }
    }
  }
`;
const Content = styled.div`
  width: 100%;
  box-sizing: border-box;
  h4 {
    letter-spacing: var(--ls-micro);
    margin-bottom: 2rem;
    span {
      color: var(--clr-primary-1);
    }
  }
  p {
    opacity: 0.5;
    font-weight: 500;
    font-size: var(--fs-base);
    line-height: var(--lh-micro);
    margin: 0 auto;
    max-width: 100%;
  }
  @media screen and (max-width: 480px) {
    h4 {
      font-size: 1.25rem;
      margin-bottom: 1.25rem;
    }
    p {
      font-size: 0.95rem;
    }
  }
  @media screen and (min-width: 768px) {
    h4 {
      font-size: var(--fs-h2);
      letter-spacing: var(--ls-h2);
      max-width: 80%;
      margin: 0 auto;
      margin-bottom: 2rem;
    }
    p {
      max-width: 83%;
      margin: 0 auto;
    }
  }
  @media screen and (min-width: 1280px) {
    text-align: left;
    padding-top: 9rem;
    h4 {
      margin: 0;
      margin-bottom: 2rem;
      max-width: 75%;
    }
    p {
      margin: 0;
      max-width: 81%;
    }
  }
`;
export default AboutUs;
