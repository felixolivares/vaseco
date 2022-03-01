const axios = require('axios');

const getWeeksPDF = async (object) => {
  const url = 'https://outsystems.imss.gob.mx/IMSSDigital/screenservices/Semanas_Cotizadas_MCW/SemanasCotizadas_Private/Paso4/DataActionGeneratePDF';
  let res = await axios.post(url, {
    "versionInfo": {
      "moduleVersion": "kCIEz5QnDywB3lK67yZoNw",
      "apiVersion": "I62fOf7E869V364_jitGAA"
    },
    "viewName": "IMSSDigital.SemanasCotizadas",
    "screenData": {
      "variables": {
        "Loaded": false,
        "NSS": object.ssn,
        "_nSSInDataFetchStatus": 1,
        "CURP": object.curp,
        "_cURPInDataFetchStatus": 1,
        "Detalles": false,
        "_detallesInDataFetchStatus": 1,
        "TokenExpirado": false,
        "_tokenExpiradoInDataFetchStatus": 1
      }
    }
  }, {
    headers: {
      'Host': 'outsystems.imss.gob.mx',
      'Connection': 'keep-alive',
      'Accept': 'application/json',
      'x-csrftoken': 'T6C+9iB49TLra4jEsMeSckDMNhQ=',
      'Content-Length': '389',
      'Cookie': 'osVisit=e1412ef5-7610-4c60-87b8-3ad3b49f3606; BIGipServerpool.outsystems.443=498602156.60432.0000; ROUTEID=.2; nr1Users=lid%3dAnonymous%3btuu%3d0%3bexp%3d0%3brhs%3dXBC1ss1nOgYW1SmqUjSxLucVOAg%3d%3bhmc%3dZX%2fb4i0FX3ffzGXmapWog6hKECw%3d; nr2Users=crf%3dT6C%2b9iB49TLra4jEsMeSckDMNhQ%3d%3buid%3d0%3bunm%3d; osVisitor=cbf0ecdc-9166-4446-b050-ddd4671a7d5d',
      "Access-Control-Allow-Origin": "*",
    }
  });
  console.log("Response from IMSS: ", res);
  return res.data;
};

module.exports = { getWeeksPDF };