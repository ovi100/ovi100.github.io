export const formatDate = (value: string) => {
    if (!value) return null;
    const [day, month, year] = value.split('/').map(v => Number(v));
    return new Date(year, month - 1, day);
};

export const getExactYears = (startDate: string, endDate: string) => {
    if (!startDate || !endDate) return null;
    const start: any = new Date(startDate);
    const end: any = new Date(endDate);

    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
    const year = (end - start) / millisecondsPerYear;
    if (year < 1) return `${Math.round(Number(year) * 10)} months`;
    return `${year.toFixed(2)} years`;
};

// export const getDuration = (startDate: string, endDate: string): string => {
//     const start = new Date(startDate);
//     const end = new Date(endDate);

//     const totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());

//     const isFullMonth = end.getDate() >= start.getDate() - 1;
//     const finalMonths = isFullMonth ? totalMonths : totalMonths - 1;

//     if (finalMonths < 12) {
//         return `${Math.max(0, finalMonths)} months`;
//     }

//     const diffDays = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
//     return `${(diffDays / 365.25).toFixed(2)} years`;
// };

export const getDuration = (d1: string, d2: string): string => {
    const start = new Date(d1);
    const end = new Date(d2);

    const yearDiff = end.getFullYear() - start.getFullYear();
    const monthDiff = end.getMonth() - start.getMonth();

    const isLastDay = new Date(end.getFullYear(), end.getMonth() + 1, 0).getDate() === end.getDate();
    const hasPassedDay = end.getDate() >= start.getDate();

    let totalMonths = (yearDiff * 12) + monthDiff;

    if (!isLastDay || !hasPassedDay) {
        totalMonths--;
    };

    if (totalMonths < 12) {
        const inclusiveMonths = isLastDay ? totalMonths + 1 : totalMonths;
        return `${Math.max(0, inclusiveMonths)} months`;
    };

    const diffDays = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
    return `${(diffDays / 365.25).toFixed(2)} years`;
};