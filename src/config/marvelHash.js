import md5 from "md5";

const privateKey = '99bfb7f9829fb8f5562d126dd6515620ea8e3a10';
const publicKey = '8e2da9938451943e78169a12ba13099e';

export function createHash(timestamp){
  const myHash = timestamp + privateKey + publicKey;
  const hashMessage = md5(myHash);
  return {'md5': hashMessage, 'apiKey': publicKey};
};