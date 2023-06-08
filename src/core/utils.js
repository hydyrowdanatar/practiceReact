export function getLanguageValue(keyword, item, language) {
    return item[`${keyword}_${language}`]
}