const Publisher = require('@pact-foundation/pact-node').Publisher;

const opts = {
  pactBroker: '192.168.178.38:9292',
  pactBrokerUsername: 'lorenzbayr',
  pactBrokerPassword: 'test',
  consumerVersion: '0.0.3',
  pactFilesOrDirs: ['./pact/pacts']
};

new Publisher(opts)
  .publish()
  .then(() => console.log('PactFiles published successfully'))
  .catch(err => console.error(err));
