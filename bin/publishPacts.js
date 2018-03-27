import pact from '@pact-foundation/pact-node'
import path from 'path'

let opts = {
    consumerVersion: process.env.npm_package_version,
    pactBroker: process.env.PACT_BROKER_URL,
    pactFilesOrDirs: [path.resolve(process.cwd(), 'pacts')]
}
pact.publishPacts(opts).then(() => { console.log("Pact files uploaded.") })