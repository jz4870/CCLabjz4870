let mapImages = []; // Array to hold map images
let currentImageIndex = 0; // Index of the current image
let blendAmount = 0; // Blending amount between current and next image

function preload() {
    // Load map images here
    for (let i = 1; i <= 11; i++) { 
      let img = loadImage(`map/image_${i}.png`);
      mapImages.push(img);
    }
}

function setup() {
    canvas = createCanvas(800, 800);
    canvas.parent('p5CanvasContainer'); 
    textFont('serif');
}

function draw() {
    background(255);
    
    // Display current map image
    image(mapImages[currentImageIndex], 0, 0, width, height);
    
    // Calculate next image index
    let nextImageIndex = (currentImageIndex + 1) % mapImages.length;
    
    // Display next map image with blending
    tint(255, 255 * (1 - blendAmount)); // Adjust the alpha of the next image
    image(mapImages[nextImageIndex], 0, 0, width, height);
    
    // Update blending amount
    blendAmount += 0.003; // Adjust this value to control the blending speed
    
    // If blending is complete, switch to the next image
    if (blendAmount >= 1.0) {
      currentImageIndex = nextImageIndex;
      blendAmount = 0;
    }
}
