function main() {
   var barData = [50, 100, 200, 350, 300, 400]
   var width = 500;
   var scaleFactor = 10;
   var barHeight = 20;
   var margin = 1;

   var svg = d3.select("body")
        .append("svg")
        .attr('width', width)
        .attr('height', barHeight * barData.length);

   var scale = d3.scaleLinear()
        .domain([d3.min(barData), d3.max(barData)])
        .range([50, 500]);
   
   var group = svg.selectAll("g")
        .data(barData)
        .enter()
        .append("g")
        .attr('transform', function(d, i){
            return 'translate(0,' + i * barHeight + ')'
         });
   
   group.append('rect')
        .attr('width', function(d){
             return scale(d);
         })
        .attr('height', barHeight - margin);

    group.append('text')
        .attr('x', function(d){
            return (scale(d));
        })
       .attr('y', barHeight / 2)
       .attr('dy', '.35em')
       .text(function(d){return d;});
   



}
