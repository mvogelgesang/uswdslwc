# USWDS LWC

A prototype of [USWDS](https://designsystem.digital.gov/) using Lightning Web Components.

## Deploying

`sf project deploy start`
`sf org open -p /lightning/n/uswdsPrototype`

## Prepping USWDS Codebase

The following will pull the latest version of USWDS from NPM and copy the necessary contents into the existing static resource.

`npm run uswds:latest`
`npm run uswds:sync`
