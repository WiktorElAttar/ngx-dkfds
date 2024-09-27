# This document documents setting up CI/CD pipelines

## CI

1. Add `test:ci` script in `package.json` to run tests inside pipeline.

    Commit: `d4b8d04ac4c0819a96000a0a04b0007c6e57341c`

2. Generate `angular-ci.yml` pipeline.
In build part, you need to specify project to build.
You cannot run build on workspace

    Commits:
    - `99d3721ed3f5a641bb8e90d4a33e1ed57067598c`
    - `99d3721ed3f5a641bb8e90d4a33e1ed57067598c`
    - `9145114a0c023d9bfd2a696793048de96b147f51`

### SonarCloud

1. Login with `GitHub` accound and follow displayed step to set up project in `SonarCloud`.
