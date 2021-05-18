import { Eloquent, Model } from "../../../core/helpers/eloquent";
// import Role from './Role';

class User extends Model {
  static endpoint: string;
}

User.endpoint = "/api/posts";

export default User;
