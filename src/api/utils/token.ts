import jwt from "jsonwebtoken";

export const createAuthToken = (payload: object): string => jwt.sign(payload, `${process.env.JWT_AUTH_SECRET}`, {
    expiresIn: "48h"
})

export const validateToken = (token: string) => <jwt.UserIDPayload>jwt.verify(token, `${process.env.JWT_AUTH_SECRET}`);
