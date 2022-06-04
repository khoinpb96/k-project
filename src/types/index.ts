export type User = {
  username: string;
  authType?: "local" | "google" | "facebook" | "twitter" | "github";
  email?: string;
  bio?: string;
  phone?: string;
  photoUrl?: string;
  accessToken: string;
  fullName?: string;
};
