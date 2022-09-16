/**
 * Return a word after removing english plural marker
 * If no marker : return input world
 * if no input : return empty string
 *
 * @param plural
 * @returns {string}
 */
export default function setSingle(plural="") {
    let output = ""
    if (plural && plural !== "") {
        if (plural.endsWith("ies")) { output = output.concat(plural.substring(0,plural.length-3),"y") }
        else if (plural.endsWith("s")) { output = plural.substring(0, plural.length-1)}
        else {return plural}
        return output
    }
    
    return output
}