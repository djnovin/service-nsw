import { DefaultArrow } from './Icons'; // Adjust the path
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { render, cleanup } from '@solidjs/testing-library';
import '@testing-library/jest-dom';

describe('DefaultArrow Icon', () => {
    beforeEach(() => {
        render(() => <DefaultArrow data-testid="default-arrow-svg" />);
    });

    afterEach(() => {
        cleanup();
    });

    it('renders without crashing', () => {
        const arrowElement = document.querySelector(
            '[data-testid="default-arrow-svg"]'
        );
        expect(arrowElement).toBeInTheDocument();
    });
});

describe('ChevronRight Icon', () => {
    beforeEach(() => {
        render(() => <DefaultArrow data-testid="chevron-right-svg" />);
    });

    afterEach(() => {
        cleanup();
    });

    it('renders without crashing', () => {
        const arrowElement = document.querySelector(
            '[data-testid="chevron-right-svg"]'
        );
        expect(arrowElement).toBeInTheDocument();
    });
});
