import create from "zustand";

export type UserResponse = {
  id?: string;
  email?: string;
  username?: string;
  password?: string;
  name: string;
  designation: string;
  profileImage: string;
  coverImage: string;
  about: string;
  talksAbout: string[];
  socialProfiles: string[];
  projects: string[];
  error?:string
};

type User = {
  user: UserResponse;
  setUser: (user: UserResponse) => void;
  isUser: boolean;
  setIsUser: (isUser: boolean) => void;
};

const useUserStore = create<User>((set) => ({
  user: {
    name: "",
    designation: "",
    profileImage: "",
    coverImage: "",
    about: "",
    talksAbout: [],
    socialProfiles: [],
    projects: [],
  },
  setUser: (user: UserResponse) => set(() => ({ user })),
  isUser: false,
  setIsUser: (isUser) => set(() => ({ isUser })),
}));

export default useUserStore;