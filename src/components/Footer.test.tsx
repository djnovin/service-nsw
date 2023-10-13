import { cleanup, render, screen } from '@solidjs/testing-library';
import { describe, expect, it, afterEach, beforeEach } from 'vitest';
import '@testing-library/jest-dom';
import { data } from '../data';
import { FooterComponent } from './Footer';

describe('Footer', () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    const footerData = data.find((item) => item._type === 'footer');
    if (!footerData || footerData._type !== 'footer') {
      throw new Error('Expected footer data not found');
    }

    render(() => <FooterComponent footerLinks={footerData.footerLinks} />);
  });

  it('it should render footer component with text', () => {
    const footerData = data.find((item) => item._type === 'footer');
    if (!footerData || footerData._type !== 'footer') {
      throw new Error('Expected footer data not found');
    }

    footerData.footerLinks.forEach((link) => {
      expect(screen.getByText(link.label)).toBeInTheDocument();
    });
  });
});
