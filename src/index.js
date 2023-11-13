
const template = document.createElement('template');
template.innerHTML = `
        <link rel="stylesheet" href="styles/index.css">
        <div class="datepicker-container">
            <input type="text" id="datepicker" placeholder="Select Date" />
            <span class="date-icon">📅</span>
        </div>
        `;

const template2 = document.createElement('template');
template2.innerHTML = `
<link rel="stylesheet" href="styles/date-picker.css">
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
                <!-- Dates go here -->
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
`
class EthiopianDatePicker extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.append(template.content.cloneNode(true));
        shadow.append(template2.content.cloneNode(true));

        var input = shadow.getElementById('datepicker');
        var dropdown = shadow.getElementById('customMenu');

        input.addEventListener('focus', function() {
            dropdown.style.display = 'block';
        });

        shadow.addEventListener('click', function(event) {
            if (!input.contains(event.target) && !dropdown.contains(event.target)) {
                dropdown.style.display = 'none';
            }
        });

    }

}

customElements.define('ethiopian-datepicker', EthiopianDatePicker);
