import { createContext } from "react";

interface Visit {
  date?: Date;
  ip?: string;
  location?: string;
  browser?: string;
  os?: string;
}

export interface UserInterface {
  token: string;
  _id: string;
  name: string;
  email: string;
  title?: string;
  about?: string;
  profilePic?: string;
  coverPic?: string;
  phone?: number;
  whatsapp?: number;
  website?: string;
  socials?: {
    snapchat?: string;
    instagram?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
    tiktok?: string;
  };
  location?: string;
  createdAt?: Date;
  totalViews?: number;
  visits?: Visit[];
}
const userContext = createContext<{
  user: UserInterface | null;
  setUser: (newValue: UserInterface | null) => void;
}>({
  user: null,
  setUser: () => {},
});

export default userContext;
