import {UserRole} from "./user-role";
import {UserStatus} from "./user-status";

export interface User{
  fullName: string;
  role:UserRole;
  status:UserStatus;
}
