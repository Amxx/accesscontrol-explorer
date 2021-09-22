import gql from 'graphql-tag';

export default gql`
query role($id: String, $limit: Int, $offset: Int)
{
  role(id: $id) {
    id
    roleOf(first: $limit, skip: $offset) {
      contract {
        id
      }
    }
  }
}
`
