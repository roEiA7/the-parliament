const DELIMITER = "*";

export const codeEmail = (userName: string) => {
    return `${userName.replace(/ /g, DELIMITER)}@walla.com`;
}

export const decodeEmail = (email: string | null) => {
    if (!email) {
        return undefined;
    }

    let newEmail = "";
    for (let i = 0; i < email.length; i++) {
        if (email[i] === DELIMITER) {
            newEmail += " ";
        } else {
            newEmail += email[i];

        }
    }

    return newEmail.replace("@walla.com", "");
}