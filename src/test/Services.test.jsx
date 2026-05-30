import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Services from '../components/Services/Services';

describe('Services', () => {
  it('renders all 4 service cards', () => {
    render(<Services />);
    expect(screen.getByText('OFC Backbone Infrastructure')).toBeInTheDocument();
    expect(screen.getByText('FTTH & Last Mile Connectivity')).toBeInTheDocument();
    expect(screen.getByText('HDD & Underground Utility Solutions')).toBeInTheDocument();
    expect(screen.getByText('Telecom O&M Services')).toBeInTheDocument();
  });

  it('expands details on "View Details" click', async () => {
    const user = userEvent.setup();
    render(<Services />);

    const buttons = screen.getAllByRole('button', { name: /view details/i });
    await user.click(buttons[0]);

    // After clicking, button text should change to "Hide Details"
    expect(screen.getByRole('button', { name: /hide details/i })).toBeInTheDocument();
  });

  it('collapses details on second click', async () => {
    const user = userEvent.setup();
    render(<Services />);

    const buttons = screen.getAllByRole('button', { name: /view details/i });
    await user.click(buttons[0]); // expand
    await user.click(screen.getByRole('button', { name: /hide details/i })); // collapse

    // Back to View Details buttons
    expect(screen.getAllByRole('button', { name: /view details/i }).length).toBe(4);
  });
});
