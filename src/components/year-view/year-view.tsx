import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'year-view',
  styleUrl: 'year-view.css',
  shadow: true,
})
export class YearView {

  @State() selectedYear: number = new Date().getFullYear();

  render() {
    return (
      <div class="dates-grid">
        {
            Array.from({length: 20}, (_, i) => i).map((count) => {
              return (
                <div class="date-pick">{ this.selectedYear + count }</div>
              )
            } )
        }
      </div>
    );
  }

}
