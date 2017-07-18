// -----------------
// parallax
// -----------------
const rellax = new Rellax('.rellax');

const scheduleSelectorItems = $('[data-target="schedule-day-selector"]');
scheduleSelectorItems.click((event) => {
    scheduleSelectorItems.each((index, element) => {
        $(element).removeClass('active');   
    });
    $(event.target).addClass('active');
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
