import { render, screen, cleanup } from '@testing-library/react';
import LandingRoom from '../landing-room/LandingRoom';

test('it should display welcome message', () => {
  render(<LandingRoom/>);
  const landingroomElement = screen.getByTestId('landingroom-1');
  expect(landingroomElement).toBeInTheDocument();
  expect(landingroomElement).toHaveTextContent('Welcome to the Dino mystery!');
})

