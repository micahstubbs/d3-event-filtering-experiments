/* global d3 */

function zoomFiltering(divId) {
  const width = 400;
  const height = 250;
  const maxR = 30;

  const svg = d3.select(divId)
                .append('svg')
                .attr('width', width)
                .attr('height', height);
  const g = svg.append('g');

    // create 15 circles
  const numCircles = 55;
  const circles = [];
  for (let i = 0; i < numCircles; i += 1) {
    circles.push({ x: 1 + Math.floor(Math.random() * width),
      y: 1 + Math.floor(Math.random() * height),
      r: 1 + Math.floor(Math.random() * maxR) });
  }

  g.selectAll('circle')
        .data(circles)
        .enter()
        .append('circle')
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)
        .attr('r', d => d.r)
        .classed('no-zoom', true);

  const zoom = d3.zoom()
                 .filter(() => !d3.event.path[0].classList.contains('no-zoom'))
                 .on('zoom', (d) => { g.attr('transform', d3.event.transform); });

  const texts = ["The red circles don't allow scroll-wheel zooming and",
    'drag-based panning'];
  svg.selectAll('text')
       .data(texts)
       .enter()
       .append('text')
       .attr('x', 200)
       .attr('y', (d, i) => 20 + (i * 20))
       .text(d => d);

  svg.call(zoom);
}
