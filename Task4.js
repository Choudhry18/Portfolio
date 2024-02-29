const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const tileSize = 90;
const gridSize = 6;
let grid = [];

// Initialize the grid
function initializeGrid() {
    for (let i = 0; i < gridSize; i++) {
        grid[i] = [];
        for (let j = 0; j < gridSize; j++) {
            grid[i][j] = 0;
        }
    }
    addNewTile();
    addNewTile();
}

// Add a new tile to a random empty spot
function addNewTile() {
    const emptySpots = [];
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            if (grid[i][j] === 0) {
                emptySpots.push({ x: i, y: j });
            }
        }
    }
    if (emptySpots.length > 0) {
        const spot = emptySpots[Math.floor(Math.random() * emptySpots.length)];
        grid[spot.x][spot.y] = Math.random() < 0.9 ? 2 : 4;
    }
}

// Draw the grid
function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const value = grid[i][j];
            const x = j * tileSize;
            const y = i * tileSize;
            ctx.fillStyle = value === 0 ? '#9e948a' : `#${value.toString(16)}`;
            ctx.fillRect(x, y, tileSize, tileSize);
            ctx.fillStyle = '#3232';
            ctx.font = 'bold 24px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            if (value !== 0) {
                console.log(value)
                ctx.fillText(value, x + tileSize / 2, y + tileSize / 2);
            }
        }
    }
}

// Handle key press events
function handleKeyPress(event) {
    switch(event.key){
        case 'ArrowUp':
            moveTilesUp();
            addNewTile();
            drawGrid();
            break;
        case 'ArrowDown':
            moveTilesDown();
            addNewTile();
            drawGrid();
            break;
        case 'ArrowLeft':
            moveTilesUp();
            addNewTile();
            drawGrid();
            break;
        case 'ArrowRight':
            moveTilesRight();
            addNewTile();
            drawGrid();
            break;
        default:
            break;
    }
}

// Move tiles up
function moveTilesUp() {
    // Implementation of moving tiles up
}

// Move tiles down
function moveTilesDown() {
    // Implementation of moving tiles down
}

// Move tiles left
function moveTilesLeft() {
    // Implementation of moving tiles left
}

// Move tiles right
function moveTilesRight() {
    // Implementation of moving tiles right
}

// Initialize the game
function init() {
    initializeGrid();
    drawGrid();
    window.addEventListener('keydown', handleKeyPress);
}

init();