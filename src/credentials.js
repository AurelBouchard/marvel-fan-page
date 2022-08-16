// MARVEL API

// end point URL
const url = "https://gateway.marvel.com/v1/public/"

// public key
const pubKey = "074682df827cdde830e4ed0cdfa00ba2"

// time stamp
const ts = "1"

// md5 hash
const hash = "4db3916c5b0900e5fe1ecf15002ae3a0"

const credentials = `?apikey=${pubKey}&hash=${hash}&ts=${ts}`

export const api = {url, credentials}