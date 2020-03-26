import { gql } from 'apollo-boost';

export const GET_EMPLOYEE =
    gql`query getEmployee($name: String) {
        getEmployee(name: $name) {
            name,
            current_employee,
        }

}`;

