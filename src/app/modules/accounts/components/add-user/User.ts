import { Role } from "../services/role";

export interface User {
    id?: number;
    username: String;
    roles: Role[];
    email: String;
    phone: String;
    password: String;
    image: String;

}
