var map = "js/hosting_countries_map.vg.json";
var attendance = "js/attendance_linechart.vg.json"
var barChart = "js/worldcup_winners_barchart.vg.json"
var bubbleChart = "js/goal_stats_bubblechart.vg.json"

vegaEmbed('#host_countries_map', map).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#attendance', attendance).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#barchart', barChart).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#bubblechart', bubbleChart).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);