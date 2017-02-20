# GraphQL, Apollo Client, and React Boilerplate

Uses GraphQL and Express for the back-end, MongoDB for the database, Mongoose as the ODM, Apollo client as the client library, and React for the front-end framework, Webpack as the front-end build tool, Bootstrap for the styling, Jest for unit testing, and Flow for static-type checking.

## Configuration

Create a .env file after you've checked out this repo and use this as a template:

```
MONGO_URI=mongodb://user:password@myhost/collection
PORT=4000
```

## Starting the dev server

Start the dev server by running:

```
npm run dev
```

## Running Tests

Use jest --updateSnapshot to update your Jest snapshots prior to testing. Then use npm test to run jest.

## Testing with Flow

Simply use npm run flow.
