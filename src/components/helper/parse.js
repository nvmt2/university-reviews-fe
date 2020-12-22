export const myParseDate = (stringDate) => {
    let standard = stringDate.substr(0, 10);
    let myDate = new Date(standard);
    return myDate.toDateString()
}