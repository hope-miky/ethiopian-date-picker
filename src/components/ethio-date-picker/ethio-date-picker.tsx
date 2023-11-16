import { Component, Listen, State, h, Element, Prop } from '@stencil/core';
import { months } from '../../constants/months';

@Component({
  tag: 'ethio-date-picker',
  styleUrl: 'ethio-date-picker.css',
  shadow: true,
})
export class EthioDatePicker {

  maxMonthDays = 30;
  maxYearDays = 365;
  maxLeapYearDays = 366;
  maxMonth = 12;
  
  @Element() el: HTMLElement;  // Reference to the host element

  @State() viewDropdown: boolean = false;
  @State() selectedDate: number = Date.now();

  @State() selectedMonth: number = new Date().getMonth();
  @State() selectedYear: number = new Date().getFullYear();

  @Prop() customPlaceHolder: string;
  @Prop() autoNow: boolean = false;


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
            <input type="text" id="datepicker" placeholder={  this.customPlaceHolder ?? "dd/mm/yyyy"  } />
            <span class="date-icon">📅</span>
        </div>

        {
          this.viewDropdown && (
              <div id="customMenu" class="dropdown-menu">
                <div class="date-picker">
                    <div class="dates">
                        <div class="month-yr-navigation">
                            <div class="current-month-year">
                                <div class="view month"> {months[this.selectedMonth]},</div>
                                <div class="view year">2022</div>
                            </div>
                            <div class="buttons">
                                <span onClick={() => {
                                  if (this.selectedMonth > 0) {
                                    this.selectedMonth = this.selectedMonth - 1;
                                  } else {
                                    this.selectedMonth = this.maxMonth;
                                  }
                                }} class="arrow prev-month">&#10094;</span>
                                <span onClick={() => {
                                  if (this.selectedMonth < this.maxMonth) {
                                    this.selectedMonth = this.selectedMonth + 1;
                                  } else {
                                    this.selectedMonth = 0;
                                  }
                                }} class="arrow next-month">&#10095;</span>
                            </div>
                        </div>
                        {/* <days-name-view></days-name-view> */}
                        {/* <year-view></year-view> */}
                        <month-view></month-view>
                    </div>
                </div>
              </div>
          )
        }

      </div>
      
    );
  }

}
