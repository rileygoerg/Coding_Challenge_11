function main() {
   var barData = [100, 200, 300, 400]
   var width = 500;
   var scaleFactor = 10;
   var barHeight = 20;

   var graph = d3.select("body")
   .append("svg")
   .attr('width', width)
   .attr('height', barHeight * barData.length);

   var scale = d3.scaleLinear([50, 500])
   
   



}
