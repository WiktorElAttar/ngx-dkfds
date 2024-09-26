# Document how this project was set up

1. Run `ng new ngx-dkfds --no-create-application` command to create initial workspace.

2. Run `ng generate library ngx-dkfds --prefix fds` command to create `ngx-dkfds` library with `fds` prefix for selectors.

3. Run `ng generate application playground --style scss` command to create `playground` application.

4. Update root `tsconfig.json` with strict compiler options.

5. Run `ng add @angular-eslint/schematics` command to setup eslint. It will install all required dependencies:

    - `eslint`
    - `typescript-eslint`
    - `angular-eslint`

    At this point `eslint` is only installed in *root workspace* and it is not used by projects.
