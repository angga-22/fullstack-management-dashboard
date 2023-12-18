import { ReactNode, createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { axiosAuth } from '../services/axios-api';

interface AuthContextProps {
  isAuthenticated: boolean;
  register: (data: RegisterProps) => Promise<void>;
  login: (credentials: LoginProps) => Promise<void>;
  logout: () => Promise<void>;
}

enum Role {
  ADMIN_USER,
  SUPER_USER,
  USER
}

enum Gender {
  MALE,
  FEMALE,
  RANDOM
}


interface LoginProps {
  username: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}

interface RegisterProps {
  id: number;
  email: string;
  birthDate: Date;
  password: string;
  passwordV3: string;
  role: Role;
  username: string;
  firstName: string;
  lastName: string;
  image: string;
  gender: Gender;
  address: string;
  mobile: number;
  createdAt: Date;
  updatedAt: Date
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('authKey'));
  const navigate = useNavigate()

  const register = async ({
    id,
    email,
    birthDate,
    password,
    passwordV3,
    role,
    username,
    firstName,
    lastName,
    image,
    gender,
    address,
    mobile,
    createdAt,
    updatedAt
  }: RegisterProps): Promise<void> => {
    const jwt = localStorage.getItem('authKey');
    try {
      const res = await axiosAuth.post(`/auth/register`, {
        id,
        email,
        birthDate,
        password,
        passwordV3,
        role,
        username,
        firstName,
        lastName,
        image,
        gender,
        address,
        mobile,
        createdAt,
        updatedAt
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${jwt}`
        }
      }
      )
      if (res.status === 200) {
        console.log('sukses create user!')
      }
    } catch (error) {
      console.log(error, 'errornya')
    }
  }

  const login = async ({ username, password }: LoginProps): Promise<void> => {
    try {
      const res = await axiosAuth.post(`/auth/login`, {
        username,
        password
      })
      if (res.status === 200) {
        localStorage.setItem('authKey', res.data.data);
        setIsAuthenticated(true);
        navigate('/dashboard')
      }
    } catch (error) {
      console.log(error, 'errornya')
    }
  };

  const logout = async (): Promise<void> => {
    localStorage.clear();
    setIsAuthenticated(false);
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
