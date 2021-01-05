const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");
const replace = require("replace");

(async() => {
  await imagemin([ "src/static/images/*.{jpg,png}" ], {
    destination: "dist/static/images",
    plugins: [ imageminWebp({quality: 75}) ],
  });
  await replace({
    regex: "jpg",
    replacement: "webp",
    paths: [ "./src/_data/" ],
    recursive: true,
    silent: true,
  });
  console.log("Images optimized");
})();
