import * as yup from 'yup';

export const createDeckValidator = yup.object({
    body: yup.object({
        title: yup.string().required().max(30).min(2),
        userId: yup.string().required(),
        tag: yup.array().of(yup.string()),
        description: yup.string().max(30),
        tolearn: yup.string().required().min(2).max(5),
        madeFor: yup.string().required().min(2).max(5),
        imageUrl: yup.string().url(),
        public: yup.boolean().required()
    })
})

export const updateDeckValidator = yup.object({
    body: yup.object({
        title: yup.string().max(30).min(2),
        userId: yup.string(),
        tag: yup.array().of(yup.string()),
        description: yup.string().max(30),
        tolearn: yup.string().min(2).max(5),
        madeFor: yup.string().min(2).max(5),
        imageUrl: yup.string().url(),
        public: yup.boolean()
    }),
    params: yup.object({
        deckId: yup.string().required()
    })
})

export const findDecksByUserIdValidator = yup.object({
    params: yup.object({
        userId: yup.string().required()
    })
})

export const findDeckByDeckIdValidator = yup.object({
    params: yup.object({
        deckId: yup.string().required()
    })
})