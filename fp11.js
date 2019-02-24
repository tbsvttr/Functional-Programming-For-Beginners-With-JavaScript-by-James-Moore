const MEALS = [
  { description: 'Breakfast', calories: 460 },
  { description: 'Snack', calories: 180 },
  { description: 'Lunch', calories: 600 },
];

const { table, thead, tbody, tr, th, td } = tags;

const mealHeader = R.compose(
  tr,
  R.map(R.partial(th, [{ className: 'pa2 tl' }])),
);

const mealRow = R.curry((fields, row) =>
  R.compose(
    R.partial(tr, [{ className: 'stripe-dark' }]),
    R.map(R.partial(td, [{ className: 'pa2' }])),
    R.map(field => row[field]),
  )(fields),
);

const mealsBody = R.curry((fields, rows) =>
  R.compose(tbody, R.map(mealRow(fields)))(rows),
);

const mealsTable = R.curry((columns, fields, rows) =>
  R.compose(
    R.partial(table, [{ className: 'mw5 center w-100 collapse' }]),
    R.append(R.__, [mealHeader(columns)]),
    mealsBody(fields),
  )(rows),
);

const node = document.getElementById('app');

node.appendChild(
  mealsTable(['Meal', 'Calories'], ['description', 'calories'], MEALS),
); 
