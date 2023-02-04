[
  { $: ... },
  { $window: 
     type: "tumbling"
     interval: [{unit: "minutes", size: 5}],
     streaming: {tskey: "$ts"},
     groupBy: '$customerID',
     output: {
       revenue: { $sum: "orderCost" },
     },
     pipeline: [
        {$sort: {revenue: -1}},
        {$limit: 10}
     ]
  }},
  { $emit: ... }
]


