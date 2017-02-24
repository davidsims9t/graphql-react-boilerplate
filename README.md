```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  ____ ____      _    ____  _   _  ___  _       ___ ____  │
│ / ___|  _ \    / \  |  _ \| | | |/ _ \| |     |_ _/ ___| │
│| |  _| |_) |  / _ \ | |_) | |_| | | | | |      | |\___ \ │
│| |_| |  _ <  / ___ \|  __/|  _  | |_| | |___   | | ___) |│
│ \____|_| \_\/_/   \_\_|   |_| |_|\__\_\_____| |___|____/ │
│                                                          │
│         ___        _______ ____   ___  __  __ _____      │
│        / \ \      / / ____/ ___| / _ \|  \/  | ____|     │
│       / _ \ \ /\ / /|  _| \___ \| | | | |\/| |  _|       │
│      / ___ \ V  V / | |___ ___) | |_| | |  | | |___      │
│     /_/   \_\_/\_/  |_____|____/ \___/|_|  |_|_____|     │
│                                                          │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

# GraphQL, Apollo Client, and React Boilerplate

Uses GraphQL and Express for the back-end, MongoDB for the database, Mongoose as the ODM, Auth0 and JWTs for authentication, Apollo client as the client library, React for the front-end framework, Webpack as the front-end build tool, Bootstrap for the styling, Jest for unit testing, and Flow for static-type checking.

## Configuration

Create a .env file after you've checked out this repo and use this as a template:

```
MONGO_URI=mongodb://user:password@myhost/collection
PORT=4000

AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=
```

## Authentication

If you haven't already sign up at Auth0 to setup your client id and secret.

https://auth0.com/

## Starting the dev server

Start the dev server by running:

```
npm run dev
```

## Running Tests

Use jest --updateSnapshot to update your Jest snapshots prior to testing. Then use npm test to run jest.

## Testing with Flow

Simply use npm run flow.
