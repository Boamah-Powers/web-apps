import axios from 'axios';

async function generateImage(text) {

    let data = JSON.stringify({
      "inputs": text
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev',
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer ' + process.env['ACCESS_TOKEN'],
      },
      data : data,
      responseType: 'arraybuffer'
    };

    try {
      const response = await axios.request(config);
      return response.data;
    }
    catch (error) {
      console.log(error);
    }
}

export {
    generateImage
}