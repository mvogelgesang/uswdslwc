# USWDS LWC

A prototype of [USWDS](https://designsystem.digital.gov/) using Lightning Web Components.

## Deploying

`sf project deploy start`
`sf org open -p /lightning/n/uswdsPrototype`

## Prepping USWDS Codebase

Download latest from [USWDS Releases](https://github.com/uswds/uswds/releases). Unzip contents. Run following from within unzipped folder.

`zip -r uswds_3_x.zip CONTRIBUTING.md LICENSE.md README.md dist/css/*.min.css* dist/scss/ dist/fonts/*/*.ttf dist/fonts/*/*.woff dist/img/ dist/js/*.min.js*`

Upload as static resource, pull static resource down locally
