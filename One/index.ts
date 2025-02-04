type User = {
  id: number;
  username: string;
  role: "member" | "contributor" | "admin";
};

type updatedUser = {
  id?: number;
  username?: string;
  role?: "member" | "contributor" | "admin";
};

const users: User[] = [
  { id: 1, username: "aditya", role: "admin" },
  { id: 1, username: "sahil", role: "admin" },
  { id: 1, username: "adi", role: "admin" },
  { id: 1, username: "aditi", role: "admin" },
  { id: 1, username: "amit", role: "admin" },
];

function updateUser(id: any, upadtes: updatedUser) {
  const userID = users.find((user) => user.id === id);
  if (!userID) {
    console.error("User not found");
    return;
  }
  Object.assign(userID, upadtes);
}
updateUser(1, { username: "aditya" });
