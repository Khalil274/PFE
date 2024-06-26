// user.model.ts
import { Role } from './Role.enum';

export interface User {
    id: number;
    name: string;
    phone: string;
    address: string;
    email: string;
    password: string;
    role: Role; // Use Role enum
}
