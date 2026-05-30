import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Hero from '../components/Hero/Hero';

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('renders Explore Services button', () => {
    render(<Hero />);
    expect(screen.getByRole('button', { name: /explore services/i })).toBeInTheDocument();
  });

  it('renders Contact Us button', () => {
    render(<Hero />);
    expect(screen.getByRole('button', { name: /contact us/i })).toBeInTheDocument();
  });
});
