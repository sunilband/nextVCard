"use client";
import { createContext, useContext, useState } from "react";

//
type Socials = {
  twitter: string | null;
  facebook: string | null;
  instagram: string | null;
  linkedin: string | null;
  youtube: string | null;
  behance: string | null;
  whatsapp: string | null;
  github: string | null;
};

type BusinessHours = {
  sunday: string | null;
  monday: string | null;
  tuesday: string | null;
  wednesday: string | null;
  thursday: string | null;
  friday: string | null;
  saturday: string | null;
};

type Services = {
  name: string | null;
  description: string | null;
};

type Testimonial = {
  name: string | null;
  description: string | null;
};

type userDataType = {
  name: string | null;
  designation: string | null;
  company: string | null;
  description: string | null;
  email: string | null;
  phone: string | null;
  socials: Socials | null;
  businessHours: BusinessHours | null;
  services: Services[] | null | [];
  testimonials: Testimonial[] | null | [];
  theme: string | null;
  profile: string | null;
};

//
interface UserProps {
  _id: string | null;
  name: string | null;
  email: string | null;
  token: string | null;
  data: userDataType | null;
}

interface User {
  user: UserProps;
  setUser: (user: UserProps) => void;
}

const UserContext = createContext<User>({
  user: { _id: null, name: null, email: null, token: null, data: null },
  setUser: () => {},
});

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<UserProps>({
    _id: null,
    name: null,
    email: null,
    token: null,
    data: null,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
