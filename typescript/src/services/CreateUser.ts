interface CreateUserData {
  name?: string;
  email: string;
  password: string;
}

export default ({ name, email, password }: CreateUserData) => ({
  name,
  email,
  password,
});
