const base64toBlob = (data) => {
  // Cut the prefix `data:application/pdf;base64` from the raw base 64
  const base64WithoutPrefix = data.substr(`data:${pdfContentType};base64,`.length);
  const pdfContentType = 'application/pdf';

  const bytes = atob(base64WithoutPrefix);
  let length = bytes.length;
  let out = new Uint8Array(length);
  
  while (length--) {
    out[length] = bytes.charCodeAt(length);
  }
  
  return new Blob([out], { type: pdfContentType });
};  

module.exports = { base64toBlob };