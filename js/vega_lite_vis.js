var radialPlot = "js/survey_radialplot.vg.json"
var map = "js/hosting_countries_map.vg.json"
var attendance = "js/attendance_linechart.vg.json"
var barChart = "js/worldcup_winners_barchart.vg.json"
var bubbleChart = "js/goal_stats_bubblechart.vg.json"
var boxPlot = "js/goal_scoredperteam_boxplot.vg.json"

vegaEmbed('#radialplot', radialPlot, { "actions": false }).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#host_countries_map', map, { "actions": false }).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#attendance', attendance, { "actions": false }).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#barchart', barChart, { "actions": false }).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#bubblechart', bubbleChart, { "actions": false }).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#boxplot', boxPlot, { "actions": false }).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);