# PhotoApp

## Run the app

It is currently running at [https://main.dnyh20s0lna3w.amplifyapp.com/#/](https://main.dnyh20s0lna3w.amplifyapp.com/#/)


Next, run:

`
    npm install
    npm start
`

### GraphQL Notes

- GraphQL is a query language that requests specific fields from database instead of the entire object.

- The @model directive tells the GraphQL autogenerates a CRUD schema and works with DynamoDB to know what type of fields to accept.

- GraphQL is testable locally with amplify mock api which pulls up a local console to query against.

- GraphQL schema language is the language it uses to tell the server what type to expect. The exclaimation mark
  serves as a way to telll the server the value is NON-NULL and throw an error if it is.

#### Terms

Mutations - write data to the API (create, update, delete operations)

Queries - read data from the API (list, get operations)

Subscriptions - subscribe to changes in data for real-time functionality (onCreate, onUpdate, onDelete)


### Amplify Notes

- Set up IAM user access to resources to set as user for Amplified project.
- Add all neccessary services like Auth, App.
- App sync accepts the schema and configures resolved to output auto generated query and mutation code.

