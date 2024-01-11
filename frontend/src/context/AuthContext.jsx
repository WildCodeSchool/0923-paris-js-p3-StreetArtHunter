import { createContext, useState, useMemo } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const auth = useMemo(() => ({ user, setUser }), [user]);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export default AuthContext;
export { AuthProvider };
