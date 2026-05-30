import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Contact from '../components/Contact/Contact';
import userEvent from '@testing-library/user-event';

describe('Contact', () => {
  it('renders the contact form heading', () => {
    render(<Contact />);
    expect(screen.getByText(/send us a message/i)).toBeInTheDocument();
  });

  it('renders all required form fields', () => {
    render(<Contact />);
    // Query by id to avoid ambiguity with sidebar text
    expect(document.querySelector('#contact-name')).toBeInTheDocument();
    expect(document.querySelector('#contact-email')).toBeInTheDocument();
    expect(document.querySelector('#contact-message')).toBeInTheDocument();
  });

  it('renders the Send Message button', () => {
    render(<Contact />);
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('shows success message after form submission', async () => {
    const user = userEvent.setup();
    render(<Contact />);

    await user.type(document.querySelector('#contact-name'), 'Test User');
    await user.type(document.querySelector('#contact-email'), 'test@example.com');
    await user.type(document.querySelector('#contact-message'), 'Test message for DHI');
    await user.click(screen.getByRole('button', { name: /send message/i }));

    expect(await screen.findByRole('alert')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toHaveTextContent(/thank you/i);
  });
});


