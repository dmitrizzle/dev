import { replaceInFileSync } from "replace-in-file";

(() => {
  const stage1 = {
    files: "out/**/**.*",
    from: /_next/g,
    to: "next",
  };

  replaceInFileSync(stage1);
  console.log("Rewrote filenames to rid of underscores.");
})();

// && rm -rf ../docs && mv ./website ../docs
