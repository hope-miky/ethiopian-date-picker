


class EthiopianDatePicker extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const template = `
            <template id="ethiopian-datepicker-template">
                    <div class="datepicker">
                        <select id="day" name="day"></select>
                        <select id="month" name="month"></select>
                        <select id="year" name="year"></select>
                    </div>
                </template>`;
        this.shadowRoot.appendChild(template.cloneNode(true));

        this.populateMonths();
        this.populateDays();
        this.populateYears();
    }

    populateMonths() {
        const months = ["Meskerem", "Tikimt", "Hidar", "Tahsas", "Tir", "Yekatit", 
                        "Megabit", "Miyaziya", "Genbot", "Sene", "Hamle", "Nehase", "Pagumē"];
        const monthSelect = this.shadowRoot.querySelector('#month');
        months.forEach((month, index) => {
            let option = document.createElement('option');
            option.textContent = month;
            option.value = index + 1;
            monthSelect.appendChild(option);
        });
    }

    populateDays() {
        const daySelect = this.shadowRoot.querySelector('#day');
        for (let i = 1; i <= 30; i++) {
            let option = document.createElement('option');
            option.textContent = i;
            option.value = i;
            daySelect.appendChild(option);
        }
    }

    populateYears() {
        const yearSelect = this.shadowRoot.querySelector('#year');
        for (let i = 2010; i <= 2030; i++) { // Adjust the range as needed
            let option = document.createElement('option');
            option.textContent = i;
            option.value = i;
            yearSelect.appendChild(option);
        }
    }
}

customElements.define('ethiopian-datepicker', EthiopianDatePicker);
