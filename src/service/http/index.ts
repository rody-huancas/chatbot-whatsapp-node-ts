import express, { Request, Response } from 'express';

const app = express();

const PORT = process.env?.PORT ?? 3000;

const initServer = (botInstance: any) => {
    app.get("/callback", (req: Request, res: Response) => {
        res.send("All ready!");  
    })
    app.listen(PORT , () => {
        console.log(`http://localhost:${PORT} ready!`);
    })
}

export {
    initServer
}