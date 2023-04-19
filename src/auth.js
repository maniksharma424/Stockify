export const signUp = async (username,password) => {
  const { data, error } = await supabase.auth.signUp({
    email: username,
    password: password,
  });
  if (error) {
    setFormError(error);
  }
};
export const submitData = async () => {
  const { data, error } = await supabase
    .from("users")
    .insert({ username: username, phone: phone, stocks: [] });

  if (error) {
    setFormError(error);
  }

  router.push("/Dashboard");
};
export const signUpPhone = async () => {
  const { data, error } = await supabase.auth.signInWithOtp({
    phone: phone,
  });


};
