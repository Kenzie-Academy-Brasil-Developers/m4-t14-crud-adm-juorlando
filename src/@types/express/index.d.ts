import * as express from "express";

declare global{
    namespace Express{
        interface Request {
            validatedUser: {
                id: number
                admin: boolean
            }
        }
    }
}