# Document how this project was set up

1. Run `ng new ngx-dkfds --no-create-application` command to create initial workspace.

    Commit: `1bbf5e96bf5f47569556e886625ce3289be1da2c`

2. Run `ng generate library ngx-dkfds --prefix fds` command to create `ngx-dkfds` library with `fds` prefix for selectors.

    Commit: `32384c3dd921de3c33191e37b459049220e7c98b`

3. Run `ng generate application playground --style css` command to create `playground` application.

    Commit: `4829d83ec9cee6286432062b39714bae14c29f44`

4. Update root `tsconfig.json` with strict compiler options.

    Commit: `025ece45bb5e3b476d8bd7572f11413501c496ee`

5. Run `ng add @angular-eslint/schematics` command to setup eslint. It will install all required dependencies:

    - `eslint`
    - `typescript-eslint`
    - `angular-eslint`

    At this point `eslint` is only installed in *root workspace* and it is not used by projects.

    Commit: `8049b9d2fed7ffc8f32f110afb744bec5404c891`

6. Run `ng generate @angular-eslint/schematics:add-eslint-to-project ngx-dkfds` to add `eslint` to `ngx-dkfds` project.
From now you can run `ng lint` command.
This steps also adds `eslint.config.js` with `eslint` config.

    Commit: `51a0da885fcb753c3ede2b5b922bf9ba08bc6e0f`

7. Run `ng generate @angular-eslint/schematics:add-eslint-to-project playground` to do the same for `playground` project.

    `ng lint` will now lint both projects.

    Commit: `0b017421a4fdc3eb84c9bac344713663a85a21f5`

8. Set `type` to `module` in `package.json` to support ESM imports in `eslint.config.json`.

    I should have done this at the beginning.

    Commit: `ea4320da8044b908fe6085770a7efff7fa839b1d`

9. Set `typescript-eslint` rules to utilize the awesome power of TypeScript's type checking APIs to provide much deeper insights into your code.

    Done based on https://typescript-eslint.io/getting-started/typed-linting/.

    Commit: `df87479595ba88da4123436b2a05d93775b4125e`

10. Install `prettier` by running following commands:

    - `npm install --save-dev --save-exact prettier`
    - `node --eval "fs.writeFileSync('.prettierrc','{}\n')"`
    - `node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"`

    Commit: `80424f775656128567f3f10d5b71bff066203999`

11. Configure `.pretterrc` and `.prettierignore`.

    It is recommented to keep `.gitignore` and `.prettierignore` in sync.

    Commit: `80424f775656128567f3f10d5b71bff066203999`

12. Run `npm install --save-dev eslint-config-prettier` command to install intergration between `prettier` and `eslint`.

    Commit: `cfae31502bacb5aea0bf151d62767fc9c2ff76a3`

13. Integrate `VS Code` with `prettier`in `.vscode/setting.json`.

    Commit: `bae876f29cc4be17636acd7563eec10b952c924c`
