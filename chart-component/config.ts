//https://swimlane.gitbook.io/ngx-charts/examples/bar-charts/vertical-bar-chart
export var config =
{
  //width,height
  view: [
    200, 400
  ],
  "scheme": {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  },
  "schemeType": 'ordinal', //ordinal , linear
  "animations": true,
  "legend": false,
  "legendTitle": 'Title',
  "legendPosition": 'right',//right, below
  "xAxis": true,
  "yAxis": true,
  "showGridLines": true,
  "roundDomains": false,
  "showXAxisLabel": true,
  "showYAxisLabel": true,
  "xAxisLabel": 'Country',
  "yAxisLabel": 'Population',
  "trimXAxisTicks": true,
  "trimYAxisTicks": true,
  "rotateXAxisTicks": true,
  "maxXAxisTickLength": 16,
  "maxYAxisTickLength": 16,
  "showDataLabel": true,
  "noBarWhenZero": false,
  "gradient": false,
  "barPadding": 10,
  "tooltipDisabled": false,
  "yScaleMax": 100,
  "yScaleMin": 100,
  "roundEdges": true,
}

