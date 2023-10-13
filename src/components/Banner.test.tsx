import { cleanup, render, screen } from '@solidjs/testing-library';
import { describe, expect, it, afterEach, beforeEach } from 'vitest';
import '@testing-library/jest-dom';
import { BannerComponent } from './Banner';
import { data } from '../data';

describe('Banner', () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    const bannerData = data.find((item) => item._type === 'banner');
    if (!bannerData || bannerData._type !== 'banner') {
      throw new Error('Expected banner data not found');
    }

    render(() => (
      <BannerComponent
        bannerText={bannerData.bannerText}
        bannerTitle={bannerData.bannerTitle}
      />
    ));
  });

  it('it should render banner component with text', () => {
    const bannerData = data.find((item) => item._type === 'banner');
    if (!bannerData || bannerData._type !== 'banner') {
      throw new Error('Expected banner data not found');
    }

    expect(screen.getByText(bannerData.bannerTitle)).toBeInTheDocument();
    expect(screen.getByText(bannerData.bannerText)).toBeInTheDocument();
  });
});
