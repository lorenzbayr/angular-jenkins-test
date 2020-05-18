const Publisher = require('@pact-foundation/pact-node').Publisher;

const opts = {
  pactBroker: process.env.PACT_BROKER,
  pactBrokerUsername: process.env.PACT_BROKER_USERNAME,
  pactBrokerPassword: process.env.PACT_BROKER_PASSWORD,
  consumerVersion: '0.0.' + process.env.BUILD_NUMBER,
  pactFilesOrDirs: ['./pact/pacts']
};

new Publisher(opts)
  .publish()
  .then(() => console.log('PactFiles published successfully'))
  .catch(err => console.error(err));
