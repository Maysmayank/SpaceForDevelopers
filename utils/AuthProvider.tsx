"use client";
import { useRouter } from 'next/navigation'
import React, { createContext, useEffect, useState, ReactNode, useContext } from "react";

// Define user type
interface User {
  id: string;
  email: string;
  name?: string; // Optional field
}

// Define AuthContext type
interface AuthContextType {
  user: User | null;
  loading: boolean;
  logout: () => void; // Logout function
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  logout: () => {}, // Default empty function
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null); // Store user data
  const [loading, setLoading] = useState<boolean>(true); // Handle loading state
  const router=useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/protected/profile`, {
          method: "GET",
          credentials: "include", // Ensures cookies are sent with the request
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();
        
        if (res.ok) {
          setUser(data.user); // Store user data
        } else {
          setUser(null); // Clear user if not authenticated
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // Logout function
  const logout = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/logout`, {
        method: "POST",
        credentials: "include", // Ensure cookies are included
      });
      let resp=await res.json()
      console.log(resp);
      
      if (res.ok) {
        
        setUser(null); // Clear user state
        router.replace('/')
      } else {
        console.error("Failed to logout");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use Auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
