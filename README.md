This project was made using React.js at the fornt-end and Nest.js at the Back-end.

## To Run the Front End

run the following command

### `yarn start`

## To Migrate and seed the Database tables using the factories at Backend

replace the path of entities in the server/ormconfig.json<br />

"entities": ["dist/**/entities/*{.ts,.js}"] => ["src/**/entities/*{.ts,.js}"]<br />

Then run the following commands

yarn run seed:run

## Then Start the project

return the path of entities in the server/ormconfig.json to it's original state<br />

"entities": ["src/**/entities/*{.ts,.js}"] => ["dist/**/entities/*{.ts,.js}"]<br />

yarn run start:dev

### To Refresh the Database and drop all tables

yarn run schema:drop
