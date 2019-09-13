# instagram-clone-coding

node.js + react.js + react native + prisma + GraphQL

## Setting up the project

```js
npm install graphql-yoga
npm install nodemon -D
```

## Creating GraphQL Server

```js
npm install dotenv -D
npm install @babel/preset-env -D
npm install @babel/core -D
npm install @babel/node -D
```

## Setting Up the Server like the Pros

```js
npm install morgan -D
npm install eslint-config-airbnb-base
npx install-peerdeps --dev eslint-config-airbnb
```

```js
#! package.json
"eslintConfig": {
    "extends": "airbnb"
}
```

```js
npm install graphql-tools merge-graphql-schemas --save
```

## Introduction to Prisma

```js
npm install prisma
npm install --save prisma-client-lib
prisma init
```

## prisma

- `prisma deploy` : schema of datamodel.prisma migrate
- `prisma generate` : create prisma client

## dotenv

import `.env`

## models.graphql

Using GraphQL Server
`datamodel.prisma` -> `models.graphql`
db model schema

## api

create folder
`.graphql` (query type) + `.js` (query resolvers)

## merge schema and resolvers

```js

#! src/schema.js

const allTypes = fileLoader(path.join(__dirname, '/api/**/*.graphql'));
const allResolvers = fileLoader(path.join(__dirname, '/api/**/*.js'));

const schema = makeExecutableSchema({
  typeDefs: mergeTypes(allTypes),
  resolvers: mergeResolvers(allResolvers),
});

#! src/server.js
const server = new GraphQLServer({
  schema,
});
```

## utils.js

utility functions

## nodemailer

```js
npm install --save nodemailer
npm install --save nodemailer-sendgrid-transport
```

## passport.js

```js
npm install passport passport-jwt
```

passport는 인증관련 일처리.
jwt 토큰이나 쿠키에서 정보를 가져와 사용자 정보에 serialize(저장)함.
토큰을 해독 후 사용자 객체를 request에 추가.
