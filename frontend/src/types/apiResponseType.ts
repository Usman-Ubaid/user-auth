type SigninResponseType = {
  message: string;
  user: {
    userId: string;
    email: string;
    token: string;
    usernmae: string;
  };
};

type SignupResponseType = {
  message: string;
  userId: string;
  token: string;
};

export type ResponseType = SigninResponseType & SignupResponseType;
