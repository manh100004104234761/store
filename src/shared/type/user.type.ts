export interface ITokenDecode {
  aud: string;
  jti: string;
  iat: number;
  nbf: number;
  exp: number;
  sub: string;
  scopes: any;
}

export interface IUser {
  id: number;
  user_id: number;
  user_name: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  phone: string;
  birthday: string;
  address: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: any;
}

export interface RegisterReq extends Partial<IUser> {
  password_confirmation: string;
}

export interface RegisterRes {
  status: string;
  message: string;
  results: {
    user_id: number;
    token: string;
  };
}

export interface LoginReq {
  email: string;
  password: string;
}
export interface LoginRes extends RegisterRes {}

export interface LogoutRes {}
export interface GetUserInfoRes {
  status: string;
  message: string;
  results: {
    id: number;
    user_name: string;
    email: string;
    is_looked: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: any;
    user_profile: IUser;
    user_role: any;
  };
}
