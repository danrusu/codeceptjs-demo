const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './src/tests/*',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:3000',
      show: true,
      windowSize: '1200x900',
    },
    REST: {
      endpoint: 'http://qatools.ro',
      onRequest: (request) => {
        request.headers.auth = '123';
      },
    },
  },
  include: {
    I: './steps_file.js',
    CookiePage: './src/pages/CookiePage.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs-demo',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};
