/* global d3 */

function zoomFiltering(divId) {
  const width = 960;
  const height = 500;
  const maxR = 60;

  const svg = d3.select(divId)
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  // style svg
  svg
    // .style('border', '1px solid')
    .style('font', '20px sans-serif')
    .style('text-anchor', 'start');

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
    .style('fill', 'red')
    .style('opacity', 0.2)
    .style('stroke', 'black')
    .style('stroke-width', '1px')
    .classed('no-zoom', true);

  const zoom = d3.zoom()
    .filter(() => !d3.event.path[0].classList.contains('no-zoom'))
    .on('zoom', (d) => { g.attr('transform', d3.event.transform); });

  const texts = [
    "The red circles don't allow",
    'scroll-wheel zooming or',
    'drag-based panning'
  ];
  svg.selectAll('text')
    .data(texts)
    .enter()
    .append('text')
    .attr('x', 22)
    .attr('y', (d, i) => 40 + (i * 26))
    .style('-webkit-user-select', 'none') /* Chrome/Safari */
    .style('-moz-user-select', 'none') /* Firefox */
    .style('-ms-user-select', 'none') /* IE10+ */
    .text(d => d);

  svg.call(zoom);
}
