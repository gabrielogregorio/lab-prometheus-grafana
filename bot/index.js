const axios = require('axios');

(async function () {
  while (true) {
    const valor = Math.random();
    if (valor > 0.5) {
      try {
        await axios.get('http://localhost:3333');
        console.log('success');
      } catch (error) {
        console.error('Error', error);
      }
    } else {
      console.log('skip');
    }
  }
})();
