import * as express from "express";

declare global{
    namespace Express{
        interface Request {
            validatedUser: {
                id: number
                admin: boolean
                active: boolean
            };
            validatedData: {
                id: number
                name: string
                email: string
                admin: boolean
                active: boolean
            }
        }
    }
}