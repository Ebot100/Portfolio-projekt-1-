const canvas = document.getElementById('canvas-chart');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 340;

const data = [37.6, 28.6, 17, 16.8];
const labels = ['CSS', 'HTML', 'PHP', 'Js'];

const barWidth = 50;
const gap = 40;
const maxData = Math.max(...data);
const chartHeight = canvas.height - 40;

ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.beginPath();
ctx.moveTo(50, 10);
ctx.lineTo(50, chartHeight);
ctx.strokeStyle = '#ffffff';
ctx.lineWidth = 2;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(50, chartHeight);
ctx.lineTo(canvas.width - 10, chartHeight);
ctx.stroke();

data.forEach((value, index) => {
  const x = 50 + gap + index * (barWidth + gap);
  const y = chartHeight - (value / maxData) * (chartHeight - 20);
  const height = (value / maxData) * (chartHeight - 20);

  ctx.fillStyle = 'rgba(58, 110, 255, 0.8)';
  ctx.fillRect(x, y, barWidth, height);

  ctx.fillStyle = '#ffffff';
  ctx.font = '13px Comfortaa';
  ctx.fillText(value, x + barWidth / 4, y - 10);

  ctx.fillText(labels[index], x + barWidth / 4, chartHeight + 20);
});