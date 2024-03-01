import ResponseApi from "@core/response";
import { IDeck } from "@interfaces/index";
import { createDeckService, findDeckByDeckIdService, findDecksByUserService, updateDeckService } from "@services/index";
import { Response, Request, NextFunction } from "express";

export const createDeckController = async (req: Request<{}, {}, IDeck>, res: Response, next: NextFunction) => {
    try {
        const response = await createDeckService(req.body);
        new ResponseApi<IDeck>(res).send(response, "deck created", 202);
    } catch (error) {
        next(error)
    }
}

export const updateDeckController = async (req: Request<{ deckId: string }, {}, Partial<IDeck>>, res: Response, next: NextFunction) => {
    try {
        const response = await updateDeckService(req.params.deckId, req.body);
        new ResponseApi<IDeck>(res).send(response, "deck updated")
    } catch (error) {
        next(error)
    }
}

export const findDecksByUserController = async (req: Request<{ userId: string }, {}, {}>, res: Response, next: NextFunction) => {
    try {
        const response = await findDecksByUserService(req.params.userId);
        new ResponseApi<IDeck[]>(res).send(response, "user decks");
    } catch (error) {
        next(error);
    }
}

export const findDeckByDeckIdController = async (req: Request<{ deckId: string }, {}, {}>, res: Response, next: NextFunction) => {
    try {
        const response = await findDeckByDeckIdService(req.params.deckId);
        new ResponseApi<IDeck>(res).send(response, "user decks");
    } catch (error) {
        next(error);
    }
}
