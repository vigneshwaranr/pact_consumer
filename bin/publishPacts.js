import pact from '@pact-foundation/pact-node'

let opts = {
    consumerVersion: "1.0.0",
    pactBroker: 'http://broker_app',
    pactFilesOrDirs: [path.resolve(process.cwd(), 'pacts')]
}
pact.publishPacts(opts).then(() => { done() })