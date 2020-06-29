

export default function dateConvert() {

    const date = new Date();

    const monthNow = convertMonth(date.getMonth() + 1);

    const dateNow = date.getFullYear() + '-' + monthNow + '-' + date.getDate();

    date.setMonth(date.getMonth() - 1);

    const monthPrevious = convertMonth(date.getMonth() + 1);
    const datePrevious = date.getFullYear() + '-' + monthPrevious + '-' + date.getDate();

    return {
        dateNow,
        datePrevious
    }
}


function convertMonth(month) {

    return month.toString().match('^[0-9]$') ?
        "0" + month
        :
        month;

}