const Publisher = require('@pact-foundation/pact-node').Publisher;

const opts = {
  pactBroker: process.env.PACT_BROKER,
  pactBrokerUsername: 'lorenzbayr',
  pactBrokerPassword: 'test',
  consumerVersion: '0.0.4',
  pactFilesOrDirs: ['./pact/pacts']
};

new Publisher(opts)
  .publish()
  .then(() => console.log('PactFiles published successfully'))
  .catch(err => console.error(err));
