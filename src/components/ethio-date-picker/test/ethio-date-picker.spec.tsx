import { newSpecPage } from '@stencil/core/testing';
import { EthioDatePicker } from '../ethio-date-picker';

describe('ethio-date-picker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EthioDatePicker],
      html: `<ethio-date-picker></ethio-date-picker>`,
    });
    expect(page.root).toEqualHtml(`
      <ethio-date-picker>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ethio-date-picker>
    `);
  });
});
