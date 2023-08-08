export {}

declare global {
    type ID = string;

    interface IUser {
        id: ID;
        username: string;
        email: string;
    }
}