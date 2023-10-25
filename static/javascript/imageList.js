// imageList.js

const imageFiles = require.context('/static/imagens', false, /\.(png|jpe?g|gif|svg)$/);

const imageList = imageFiles.keys().map(imageFiles);

window.imageList = imageList; // Definindo uma variável global

