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
  stress: string;
  company: string;
  phone: string;
}

export interface RegisterReq extends Partial<IUser> {
  confirm_password: string;
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
// export interface LoginRes extends RegisterRes {}
export interface LoginRes {
  result: {
    result: boolean;
    jwt: string;
    data: IUser;
  }
}

export interface LogoutRes {}
export interface GetUserInfoRes {
  // status: string;
  // message: string;
  data: {
    user_id: number;
    rule: number;
    created_at: Date;
    updated_at: Date;
    user_profile: IUser;
  };
}
