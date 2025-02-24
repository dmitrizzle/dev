# dev

This is a simple portfolio/resume page built (within a span of an evening) in Next.js with Styled Components and `react-markdown`.

This project is hosted on GitHub pages. [See it live](https://dev.analog.cafe).

To deploy:
    - Run `$ yarn build:gh`
    - The scripts in the `./deploy` folder will:
        1. Rename all files and folder in the Next.js build output folder that start with an underscore (this ensures that this bundle is [compatible with GitHub Pages](https://docs.github.com/en/enterprise/2.14/user/articles/files-that-start-with-an-underscore-are-missing)).
        2. Move contents to `./docs` folder, which GitHub pages will use for publishing.
        3. Commit the above folder with changes with version from `./package.json` file as a message.
    - Push to GitHub when ready.
