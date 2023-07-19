import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum LocalStorageKey {
  Token = "token",
}

export interface UserState {
  user: {
    email: string | null;
    nickname: string | null;
    isLogged: boolean;
    token: string | null | undefined;
    logInLoading: boolean;
    logInDone: boolean;
    logInError: boolean;
    imageUrl: string | null;
    profileContent: string | null;
  };
}

export interface UserResponse {
  email: string;
  nickname: string;
}

const initialState: UserState = {
  user: {
    email: null,
    nickname: null,
    isLogged: false,
    token: null,
    logInLoading: false,
    logInDone: false,
    logInError: false,
    imageUrl: null,
    profileContent: null,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    LOGIN_USER: (state: UserState, action: PayloadAction<UserResponse>) => {
      state.user.email = action.payload.email;
      state.user.nickname = action.payload.nickname;
      // state.user.token = action.payload.token;
      // localStorage.setItem(LocalStorageKey.Token, action.payload.token);
      state.user.isLogged = true;
    },
    LOGOUT_USER: (state: UserState) => {
      state.user.email = null;
      state.user.token = null;
      state.user.isLogged = false;
      state.user.profileContent = null;
      state.user.imageUrl = null;
      state.user.nickname = null;
      //localStorage.removeItem(LocalStorageKey.Token);
    },
    LOAD_PROFILE_IMAGE: (state: UserState, action: PayloadAction<string>) => {
      state.user.imageUrl = action.payload;
    },
    AUTH_USER: (state: UserState, action: PayloadAction<UserResponse>) => {
      state.user.email = action.payload.email;
      state.user.nickname = action.payload.nickname;
      state.user.isLogged = true;
    },
    UNAUTH_USER: (state: UserState) => {
      state.user.email = null;
      state.user.isLogged = false;
      state.user.profileContent = null;
      state.user.imageUrl = null;
      state.user.nickname = null;
      state.user.token = undefined;
      //localStorage.removeItem(LocalStorageKey.Token);
    },
  },
});

export const {
  LOGIN_USER,
  LOGOUT_USER,
  AUTH_USER,
  UNAUTH_USER,
  LOAD_PROFILE_IMAGE,
} = userSlice.actions;

export default userSlice.reducer;
