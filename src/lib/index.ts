// place files you want to import through the `$lib` alias in this folder.

import { DateTime } from "luxon"

export const getFormattedRangeAndDuration = (joining_date : string, leaving_date : string | null ) => {
    const from = DateTime.fromISO(joining_date);
    const to = leaving_date ? DateTime.fromISO(leaving_date) : null;

    const formmattedRange = `${from.toFormat("MMM yyyy")} - ${to ? to.toFormat('MMM yyyy') : "present"}`;

    const duration = to ? to.diff(from).toFormat('y M d') : DateTime.now().diff(from).toFormat('y M d');

    const durationObject = {
        years: Number(duration.split(' ')[0]),
        months: Number(duration.split(' ')[1]),
        days: Number(duration.split(' ')[2])
    }

    const formattedYear = durationObject.years > 0 ? `${durationObject.years} ${durationObject.years > 1 ? "years" : "year"}` : "";
    const formmattedMonth = durationObject.months > 0 ? `${durationObject.months} ${durationObject.months > 1 ? "months" : "month"}` : "";
    // const formattedDay = durationObject.days > 0 ? `${durationObject.days} ${durationObject.days > 1 ? 'days' : 'days'}` : "";

    const formattedDuration = [formattedYear, formmattedMonth ].join(" ");

    return `${formmattedRange} | ${formattedDuration}`;
}


export const getYearsOfExperience = () => {

    const yoe = DateTime.now().diff(DateTime.fromISO("2022-01-01")).as('years')

    return Math.floor(yoe); 
}