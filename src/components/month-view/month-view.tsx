import { Component, h } from '@stencil/core';
import { months } from '../../constants/months';

@Component({
  tag: 'month-view',
  styleUrl: 'month-view.css',
  shadow: true,
})
export class MonthView {

  render() {
    return (
      <div class="dates-grid">
        {
            months.map((month) => {
              return (
                <div class="date-pick">{ month }</div>
              )
            } )
        }
      </div>
    );
  }

}
