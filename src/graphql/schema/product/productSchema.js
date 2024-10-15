import gql from "graphql-tag";

const productSchema = gql`
  type Product {
    _id: ID!
    title: String!
    img: String!
    price: Int!
    color: String!
    description: String!
    brand: String!
    category: String!
    collectionType: String!
  }

  # Query for GET (read) data
  type Query {
    products: [Product]
    product(id: ID!): Product
    productByCategories(category: String!): [Product]
    collectionType(collectionType: String!): [Product]
  }

  # TODO: Work in later
  # Mutation for POST, PUT, DELETE
  #   type Mutation {
  #     addProduct(title:String!, img:String!, price:Number!, desc:desc)
  #   }
`;

export default productSchema;
