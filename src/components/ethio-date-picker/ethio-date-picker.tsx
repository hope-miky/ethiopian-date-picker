import { Component, Listen, State, h, Element } from '@stencil/core';

@Component({
  tag: 'ethio-date-picker',
  styleUrl: 'ethio-date-picker.css',
  shadow: true,
})
export class EthioDatePicker {

  @State() viewDropdown: boolean = false;
  @Element() el: HTMLElement;  // Reference to the host element


  @Listen('focus', { capture: true })
  handleFocus(_event: Event) {
    this.viewDropdown = true;
  }


  @Listen('click', { target: 'document' })
  handleDocumentClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;

    // Check if the click is outside of this component
    if (!this.el.contains(clickedElement)) {
      // Click is outside, handle accordingly
      this.viewDropdown = false;
    }
  }

  render() {
    return (
      <div class="main-div">
        <div class="datepicker-container">
            <input type="text" id="datepicker" placeholder="Select Date" />
            <span class="date-icon">📅</span>
        </div>

        {
          this.viewDropdown && (
              <div id="customMenu" class="dropdown-menu">
                <div class="date-picker">
                    <div class="dates">
                        <div class="month-yr-navigation">
                            <div class="current-month-year">
                                <div class="view month">April</div>
                                <div class="view year">2022</div>
                                <div class="drop-icon">&#10095;</div>
                            </div>
                            <div class="buttons">
                                <span class="arrow prev-month">&#10094;</span>
                                <span class="arrow next-month">&#10095;</span>
                            </div>
                        </div>
                        <div class="dates-grid">
                            <div class="date-view">M</div>
                            <div class="date-view">T</div>
                            <div class="date-view">W</div>
                            <div class="date-view">T</div>
                            <div class="date-view">F</div>
                            <div class="date-view">S</div>
                            <div class="date-view">S</div>

                            <div class="date-pick">1</div>
                            <div class="date-pick">2</div>
                            <div class="date-pick">3</div>
                            <div class="date-pick">4</div>
                            <div class="date-pick">5</div>
                            <div class="date-pick">7</div>
                            <div class="date-pick">8</div>
                            <div class="date-pick">9</div>
                            <div class="date-pick">10</div>
                            <div class="date-pick">11</div>
                            <div class="date-pick">12</div>
                            <div class="date-pick">13</div>
                            <div class="date-pick">14</div>
                            <div class="date-pick">15</div>
                            <div class="date-pick">16</div>
                            <div class="date-pick">17</div>
                            <div class="date-pick">18</div>
                            <div class="date-pick">19</div>
                            <div class="date-pick">20</div>
                            <div class="date-pick">21</div>
                            <div class="date-pick">22</div>
                            <div class="date-pick">23</div>
                            <div class="date-pick">24</div>
                            <div class="date-pick">25</div>
                            <div class="date-pick">26</div>
                            <div class="date-pick">27</div>
                            <div class="date-pick">28</div>
                            <div class="date-pick">29</div>
                            <div class="date-pick">30</div>
                        </div>
                    </div>
                </div>
              </div>
          )
        }

      </div>
      
    );
  }

}
