import gql from 'graphql-tag';

export default gql`
query address($id: String, $limit: Int, $offset: Int)
{
  account(id: $id) {
    id
    asOwnable {
      owner { id }
    }
    asAccessControl {
      roles(first: $limit, skip: $offset) {
        id
        role {
          id
        }
      }
    }
    ownerOf(first: $limit, skip: $offset) {
      id
    }
    membership(first: $limit, skip: $offset) {
      accesscontrolrole {
        contract {
          id
        }
        role {
          id
        }
      }
    }
  }
}
`
