// MARVEL API

// end point URL
const url = "https://gateway.marvel.com/v1/public/"

// public key
//const pubKey = "074682df827cdde830e4ed0cdfa00ba2"
const pubKey = "bcdc3920ae5757fe9c3f4a4ed58de843"

// time stamp
const ts = "1"

// md5 hash
//const hash = "4db3916c5b0900e5fe1ecf15002ae3a0"
const hash = "a86fbab04cdf768df4f00d079ed26cf6"

const credentials = `?apikey=${pubKey}&hash=${hash}&ts=${ts}`

const security = 50; //

const fetchLimit = 20; //20


export const api = {url, credentials, security, fetchLimit}