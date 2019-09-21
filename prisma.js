import { Prisma } from 'prisma-binding'

const prisma = new Prisma({
    typeDefs: 'generated/prisma.graphql',
    endpoint: 'http://localhost:4466'
})

prisma.query.users(null, '{id, name, email}').then((data => console.log(data)))

/************** important commands (run them where docker-compose.yml located)**********/
// 1. docker-compose up -d
// 2. prisma deploy (whenyou change datamodel.graphql, deploy them to remote heroku DB, it takes some time)
// 3. npm run get-schema (to fetch new changes in schema / updated schema) (from package.json directory)
// docker-compose down
// database https://data.heroku.com/datastores/33ad949e-814b-493e-a760-bbf0ebee7a87
/***************************************************************************************/
