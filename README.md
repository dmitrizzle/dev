# dev

This is a simple portfolio/resume page built (within a span of an evening) in Next.js with Styled Components, `react-markdown`, and a little bit of Bash scripting.

This project is hosted for free on GitHub pages. [See it live](https://dev.analog.cafe).

Deployment:
1. Run `$ yarn deploy`
2. The scripts in the `./deploy` folder will:
    - Rename all files and folder in the Next.js build output folder that start with an underscore (this ensures that this bundle is [compatible with GitHub Pages](https://docs.github.com/en/enterprise/2.14/user/articles/files-that-start-with-an-underscore-are-missing)).
    - Move contents to `./docs` folder, which GitHub pages will use for publishing.
    - Commit the above folder with changes with version from `./package.json` file as a message.
3. Push to GitHub when ready.

If you like, you can clone this repo and use it as a starting point to host your own static website for free on GitHub pages. You will need to change the `./docs/CNAME` file to point to your domain if you want to use a custom one or remove it.Ï Run `$ yarn && yarn build && yarn dev` to get started.
