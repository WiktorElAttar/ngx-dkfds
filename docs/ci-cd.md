# This document documents setting up CI/CD pipelines

## CI

1. Add `test:ci` script in `package.json` to run tests inside pipeline.

2. Generate `angular-ci.yml` pipeline.
In build part, you need to specify project to build.
You cannot run build on workspace

### SonarCloud

1. Login with `GitHub` accound and follow displayed step to set up project in `SonarCloud`.
