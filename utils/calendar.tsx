const arrMonthsString = ["","janvier","février","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","décembre"]

export function getMonthLabelFromInt(monthNumber:number){
    if (monthNumber<0 || monthNumber>12){
        return "ERROR_MONTH_NUMBER_SHOULDBE_ABOVE_0_AND_BELOW_12"
    }
    return arrMonthsString[monthNumber]
}

export function getLabelDay(year:string, month:string, day:number) {
    var date = new Date(`${year}/${month}/${day}`);
    return date.toLocaleDateString("fr-FR", { weekday: 'long' });
  }