### GraphQL Notes

 - GraphQL is a query language that requests specific fields from database instead of the entire object.

 - The @model directive tells the GraphQL autogenerates a CRUD schema and works with DynamoDB to know what type of fields to accept.

#### Terms

Mutations - write data to the API (create, update, delete operations)

Queries - read data from the API (list, get operations)

Subscriptions - subscribe to changes in data for real-time functionality (onCreate, onUpdate, onDelete)