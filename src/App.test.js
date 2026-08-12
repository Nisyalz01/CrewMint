// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CrewMint title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CrewMint/i);
    expect(titleElement).toBeInTheDocument();
});
