// DrawRectangle.js
 function main() {
 // Lấy phần tử <canvas>.<- (1)
 var canvas = document.getElementById('canvas1');
 if (!canvas) {
 console.log('Failed to retrieve the <canvas> element');
 return;
 }
 // Dựng hình "context" 2D từ phần tử. (2)
 var ctx = canvas.getContext('2d');
 // Vẽ hình chữ nhật xanh <- (3)
 ctx.fillStyle = 'rgba(0, 0, 255, 1.0)'; // Thiết lập màu xanh
 ctx.fillRect(120, 10, 150, 150); // Hình chữ nhật có màu
 }
