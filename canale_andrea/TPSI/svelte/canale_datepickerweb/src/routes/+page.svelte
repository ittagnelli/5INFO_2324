<script>
    import DatePicker from '../lib/date_picker.svelte';
    let day = "GG", month = "MM", year = "AAAA";

    function onChangeDate(e) {
        const details = e.detail;
        day = details.day;
        month = details.month;
        year = details.year;
    }
</script>

<h1>L'utente ha selezionato {day} - {month} - {year} </h1>

<DatePicker on:newDate={onChangeDate} day={day} month={month} year={year}></DatePicker>