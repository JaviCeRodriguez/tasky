import { useState, useEffect } from 'react';
import { ApiError, User } from '@supabase/supabase-js';
import supabase from '../supabase';

const useAuth = () => {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [authError, setAuthError] = useState<ApiError | null>(null);

  useEffect(() => {
    checkUser();
    window.addEventListener('hashchange', function () {
      checkUser();
    });
  }, []);

  async function checkUser() {
    const user = supabase.auth.user();
    setAuthUser(user);
  }

  async function signInWithGithub() {
    const { error } = await supabase.auth.signIn({
      provider: 'github',
    });
    setAuthError(error);
  }

  async function signOut() {
    await supabase.auth.signOut();
    setAuthUser(null);
  }

  return {
    authUser,
    authError,
    signInWithGithub,
    signOut,
  };
};

export default useAuth;
