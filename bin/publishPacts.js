import pact from '@pact-foundation/pact-node'

let opts = {
    consumerVersion: "1.0.0",
    pactBroker: process.env.PACT_BROKER_URL,
    pactFilesOrDirs: [path.resolve(process.cwd(), 'pacts')]
}
pact.publishPacts(opts).then(() => { console.log("Pact files uploaded.") })