//U14123683
// Initializing Variables
function main() {
   var barData = [100, 420, 230, 850, 560, 925]
   var width = 500;
   var scaleFactor = 10;
   var barHeight = 20;
   var margin = 1;
// Creating SVG
   var svg = d3.select("body")
        .append("svg")
        .attr('width', width)
        .attr('height', barHeight * barData.length);
// Implementing Linear Scale
   var scale = d3.scaleLinear()
        .domain([d3.min(barData), d3.max(barData)])
        .range([50, 500]);
// Rendering Bars   
   var group = svg.selectAll("g")
        .data(barData)
        .enter()
        .append("g")
        .attr('transform', function(d, i){
            return 'translate(0,' + i * barHeight + ')'
         })
// Creating Bars Variable to Call for Mouse Events            
    var bars = group.append('rect')
        .attr('width', 0) // width is 0 to start for left->right transition
        .attr('height', barHeight - margin);
// Adding Transition from left->right    
    bars.transition()
        .duration(1000)
        .attr('width', function(d){
            return scale(d)
        });
// Creating MouseOver Function    
    function mouseOver(d, i){
            d3.select(this).attr('class','highlight')
            d3.select(this)
            .transition()
            .duration(200)
        }
// Creating MouseOut Function        
    function mouseOut(d, i){
            d3.select(this).attr('class','bar')
            d3.select(this)
            .transition()
            .duration(200)
        }
// Calling mouseOver when bar is hovered    
    bars.on('mouseover', mouseOver)
// Calling mouseOut when bar is not hovered    
    bars.on('mouseout', mouseOut)
// Adding Text to End of Bars    
    group.append('text')
        .attr('x', function(d){
            return (scale(d));
        })
       .attr('y', barHeight / 2)
       .attr('dy', '.35em')
       .text(function(d){
        return d;
    });
    }
