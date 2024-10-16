import gql from "graphql-tag";

const blogSchema = gql`
  type Blog {
    _id: ID!
    title: String!
    date: String!
    image: String!
    description: String!
  }

  type Query {
    blogs: [Blog]
    blog(id: ID!): Blog
  }
`;

export default blogSchema;
