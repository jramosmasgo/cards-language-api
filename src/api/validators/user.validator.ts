import * as yup from "yup";

export const createUserValidator = yup.object({
  body: yup.object({
    name: yup.string().min(2).max(20).required(),
    email: yup.string().email().required(),
    firebaseId: yup.string().min(7).max(12),
    language: yup.string().min(2).max(5).required(),
    profileImageUrl: yup.string().url(),
  }),
});

export const getUserValidator = yup.object({
  params: yup.object({
    userId: yup.string().min(20).max(30).required(),
  }),
});

export const updateUserValidator = yup.object({
  body: yup.object({
    name: yup.string().min(2).max(20),
    email: yup.string().email(),
    firebaseId: yup.string().min(7).max(12),
    language: yup.string().min(2).max(5),
    profileImageUrl: yup.string().url(),
  }),
  params: yup.object({
    userId: yup.string().min(12).required(),
  }),
});

export const loginUserValidator = yup.object({
  body: yup.object({
    email: yup.string().email().required(),
    firebaseId: yup.string().required().min(7).max(12)
  })
})