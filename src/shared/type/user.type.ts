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
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
  city: string;
  street: string;
  company: string;
  phone: string;
  user_id?: number;
  rule?: number;
  created_at?: Date;
  updated_at?: Date;
  image?: any;
}


export interface RegisterReq extends Partial<IUser> {
  confirm_password: string;
}
export interface RegisterRes {
  status: boolean;
  message: string;
  data: {
    user_id: number;
    token: string;
  };
}

export interface LoginReq {
  email: string;
  password: string;
}
// export interface LoginRes extends RegisterRes {}
export interface LoginRes {
  status: boolean;
  message: string;
  data: {
    jwt: string
  }
}

export interface LogoutRes {}
export interface GetUserInfoRes {
  status: boolean;
  message: string;
  data: IUser;
}

export interface UpdateUserReq{
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  city: string;
  street: string;
  company: string;
  phone: string;
  image?: any;
}

export interface makeOderReq{
  city: string;
  street: string;
  phone: string;
}


export interface UpdatePasswordReq {
  old_password: string;
  new_password: string;
  confirm_password: string;
}
