// vite.config.js
export default {
    root: "source",
    base: "./",
    clearScreen: false,
    server: {
        https: false,
        middlewareMode: 'ssr'
    },
    build:
        {
            outDir: "../dist/Oblique" ,
            manifest: true
        }    
  }