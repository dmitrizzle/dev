import { replaceInFileSync } from "replace-in-file";

// this file runs in node environment on development machine to find and replace all instances of file names and folder names that start with an underscore
// GitHub Pages can not publish or use files that start with an underscore

(() => {
  const stage1 = {
    files: "out/**/**.*",
    from: /_next/g,
    to: "next",
  };

  const stage2 = {
    files: "out/**/**.*",
    from: /_app/g,
    to: "app",
  };

  const stage3 = {
    files: "out/**/*.js",
    from: /_error/g,
    to: "err",
  };

  const stage4 = {
    files: "out/**/**.*",
    from: /_buildManifest/g,
    to: "buildManifest",
  };

  const stage5 = {
    files: "out/**/**.*",
    from: /_ssgManifest/g,
    to: "ssgManifest",
  };

  replaceInFileSync(stage1);
  replaceInFileSync(stage2);
  replaceInFileSync(stage3);
  replaceInFileSync(stage4);
  replaceInFileSync(stage5);

  console.log("Rewrote filenames to rid of underscores in _next, _app, _error.");
})();