import {Constants} from '../common';
const axios = require('axios').default;

export const getWeeksPDF = async (object) => {
  try{
    const response = await axios({
      method: 'POST',
      url: Constants.api.url.weeksPDF,
      headers: Constants.api.headers,
      data: {
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
      }
    });
    return response;
  } catch (err){
    console.error(err);
  }
}