an [es2015](https://babeljs.io/learn-es2015/) iteration on the block [D3 event filtering](https://bl.ocks.org/pkerpedjiev/32b11b37be444082762443c4030d145d) from [@pkerpedjiev](https://twitter.com/pkerpedjiev)

this iteration also makes sure the title text is not accidentally selected when attemption to drag over an un-draggable red circle:

```
  svg.selectAll('text')
    .style('-webkit-user-select', 'none') /* Chrome/Safari */
    .style('-moz-user-select', 'none') /* Firefox */
    .style('-ms-user-select', 'none') /* IE10+ */
```

credit to this [stackoverflow answer](http://stackoverflow.com/a/6900392/1732222) for the styles to make text un-selectable in most browsers