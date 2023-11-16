import { Component, h } from '@stencil/core';

@Component({
  tag: 'days-name-view',
  styleUrl: 'days-name-view.css',
  shadow: true,
})
export class DaysNameView {

  render() {
    return (
      <div class="dates-grid">
          <div class="date-view">M</div>
          <div class="date-view">T</div>
          <div class="date-view">W</div>
          <div class="date-view">T</div>
          <div class="date-view">F</div>
          <div class="date-view">S</div>
          <div class="date-view">S</div>

          {
            Array.from({length: 30}, (_, i) => i + 1).map((count) => {
              return (
                <div class="date-pick">{ count }</div>
              )
            } )
          }
          
      </div>
    );
  }

}
