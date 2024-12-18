const validTokens = ["example-token-123", "another-token-456"]; // Daftar token yang valid

export const authenticate = (req, res, next) => {
  const token = "example-token-123";
  if (!token) {
    return res.status(401).json({ message: "Token required" });
  }

  if (!validTokens.includes(token)) {
    return res.status(403).json({ message: "Invalid token" });
  }

  // Menambahkan informasi user ke request (opsional, jika token terkait user)
  req.user = { id: 1, name: "John Doe" }; // Sesuaikan dengan data terkait token
  next();
};
