// -----------------
// parallax
// -----------------
const rellax = new Rellax('.rellax');

const scheduleSelectorItems = $('[data-target="schedule-day-selector"]');
const scheduleTabContainer = $('[data-target="schedule-tab-container"]');
scheduleSelectorItems.click((event) => {
    scheduleSelectorItems.each((index, element) => {
        $(element).removeClass('active');
    });
    $(event.target).addClass('active');

    const position = $(event.target).data('tab-position');
    // console.log(position)
    scheduleTabContainer.css('transform', `translateX(${position})`);
});

// -----------------
// google map hack to prevent scroll to zoom
// -----------------
const $mapContainer = $('[data-target="location-map-container"]');
const $map = $('[data-target="location-map"]');

$mapContainer.on('click', () => $map.addClass('active'))
             .mouseleave(() => $map.removeClass('active'));

// -----------------
// ticket form 
// -----------------
const $ticketForm = $('[data-target="ticket-form"]');
const $total = $('[data-container="ticket-form-total"]');
const features = $ticketForm.find('[type="checkbox"]');

$ticketForm.on('change', 'input[type="checkbox"]', () => {
    let total = 0;

    features.each((index, el) => {
        if ($(el).is(':checked')) {
            total += $(el).data('price');
        }
    });

    $total.text(total + '$');
});

$('[data-target="section-title-link"]').on('click', (event) => {
    event.preventDefault();
    const href = $(event.target).attr('href');
    $('[data-target="nav"]').find(`[href="${href}"]`).click();
});

$('[data-action="navigate-tickets"]').click((event) => {
    event.preventDefault();
    $('[data-target="nav"]').find('[href="#tickets"]').click();
});