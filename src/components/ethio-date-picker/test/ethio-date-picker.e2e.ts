import { newE2EPage } from '@stencil/core/testing';

describe('ethio-date-picker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ethio-date-picker></ethio-date-picker>');

    const element = await page.find('ethio-date-picker');
    expect(element).toHaveClass('hydrated');
  });
});
