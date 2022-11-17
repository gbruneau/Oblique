// vite.config.js
export default {
    root: "source",
    base: "./",
    clearScreen: false,
    server: {
        https: false
    },
    build:
    {
        outDir: "../dist/Oblique",
        manifest: true
    }
}