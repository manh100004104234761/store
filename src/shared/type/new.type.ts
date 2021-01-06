export interface INew {
  new_id : string;
  created_at: Date;
  update_at: Date;
  title: string;
  short_content: string;
  content: string;
}

export interface INewRes {
  status: boolean;
  message: string;
  data: INew[]
}

export interface newReq {
  title: string;
  short_content: string;
  content: string;
}
