export const getAllUsersQuery = "SELECT * FROM users";
export const getUserByIdQuery = "SELECT * FROM users WHERE id = $1";
export const addUserQuery = "INSERT INTO users (name,email,age,dob) VALUES ($1,$2,$3,$4)";
export const checkEmailQuery = "SELECT * FROM users WHERE email = $1";
export const deleteUserByIdQuery = "DELETE FROM users Where id = $1";
export const updateUserByIdQuery = "UPDATE users SET name = $2, email = $3, age = $4, dob = $5 WHERE id = $1";