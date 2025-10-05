import jwt from "jsonwebtoken";

export const authenticateToken = (req, res, next) => {
  console.log(req.header);
  const token = req.header("Authorization")?.split(" ")[0];
  if (!token) {
    return res.status(401).json({ error: "Access Denied, no token provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid token" });
    }
    req.user = user;
    next();
  });
};
