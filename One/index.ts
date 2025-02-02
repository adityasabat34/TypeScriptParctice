type userRole = "guest" | "member" | "admin";

type user = {
  username: string;
  role: userRole;
};

const users: user[] = [
  { username: "john doe", role: "member" },
  { username: "jane doe", role: "admin" },
];

function fetchUserDetails(username: string): user {
  const user = users.find((user) => user.username === username);
  if (!user) {
    throw new Error("user not exist");
  }
  return user;
}
