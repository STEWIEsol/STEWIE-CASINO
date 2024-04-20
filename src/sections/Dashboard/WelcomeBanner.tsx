import React from 'react';
import styled from 'styled-components';
import { EXPLORER_URL } from '../../constants';

const Buttons = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media (min-width: 800px) {
    height: 100%;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding-top: 0!important;
  }

  & > button {
    border: none;
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    background: #ffffffdf;
    transition: background .2s ease;
    color: black;
    cursor: pointer;
    &:hover {
      background: white;
    }
  }
`;

const Welcome = styled.div`
  background-image: url('/NEON.png'); /* Adjust the path to your NEON image */
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  filter: drop-shadow(0 4px 3px rgba(0,0,0,.07)) drop-shadow(0 2px 2px rgba(0,0,0,.06));

  & img {
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    width: 100px;
    height: 100px;
    top: 0;
    right: 0;
    &:nth-child(1) {animation-delay: 0s;}
    &:nth-child(2) {animation-delay: 1s;}
  }

  & > div {
    padding: 0px;
    filter: drop-shadow(0 4px 3px rgba(0,0,0,.07)) drop-shadow(0 2px 2px rgba(0,0,0,.06));
  }

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 0;
    & > div {
      padding: 40px;
    }
  }

  h1 {
    text-shadow: 4px 4px 4px black; /* Increases the size of the stroke */
    padding: 10px;
    font-size: 36px; /* Increased font size */
    font-weight: bold; /* Added font weight for emphasis */
    color: white; /* Added white color for better visibility */
  }

  p {
    text-shadow: 2px 2px 2px black; /* Adds a black stroke around the text */
    padding: 10px;
    font-size: 24px; /* Increased font size */
    font-weight: bold; /* Added font weight for emphasis */
    color: white; /* Added white color for better visibility */
  }
`;

export function WelcomeBanner() {
  return (
    <Welcome>
      <div>
        <h1>STEWIE CASINO</h1>
        <p>New Listing LICKGOATCOIN.</p>
        <button className="small-button" onClick={() => window.open('https://twitter.com/LickGoatCoin', '_blank')}>
           Twitter <img src="/x.png" alt="X" style={{ width: '0.8em', height: '0.8em', marginLeft: '4px' }} />
        </button>
      </div>
      <Buttons>
        <button onClick={() => window.open('https://twitter.com/StewiePuffy', '_blank')}>
          Twitter <img src="/x.png" alt="X" style={{ width: '0.8em', height: '0.8em', marginLeft: '4px' }} />
        </button>
        <button onClick={() => window.open('https://github.com/gamba-labs/gamba', '_blank')}>
          List your MeMe Token <img src="/meme.png" alt="X" style={{ width: '0.8em', height: '0.8em', marginLeft: '4px' }} />
        </button>
        <button onClick={() => window.open('https://t.me/Stewiepuffy')}>
          Telegram <img src="/Telegram.png" alt="X" style={{ width: '0.8em', height: '0.8em', marginLeft: '4px' }} />
        </button>
      </Buttons>
    </Welcome>
  );
}
