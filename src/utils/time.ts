export const timestampToDate = (timestamp: number) => {
    const date = new Date(timestamp);

    const day = date.getDate(); // Day of the month (1-31)
    const month = date.getMonth() + 1; // Months are zero-indexed, so +1 to get (1-12)
    const hours = date.getHours(); // Hours (0-23)
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Minutes (0-59), padded to 2 digits

    return `${hours}:${minutes} ${day}/${month}`;
}