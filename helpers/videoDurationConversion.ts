// Twitch-specific video duration converter. Expects string input in the form XXhXXmXXs (e.g. 5h43m12s), and should yield of the form HH:MM:SS
export const convertTwitchVideoDuration = (duration: string) => {
  let convertedDuration = '';

  // Splitting at the hours allows use to handle all the conditionals easily from the top-down
  const hoursSplit = duration.split('h');

  if (hoursSplit.length === 1) {    // duration is either minutes/seconds or seconds only
    const minutesSplit = duration.split('m');

    if (minutesSplit.length > 1) {    // duration is minutes/seconds
      // Handle the minutes component
      convertedDuration += `${minutesSplit[0]}:`;

      // Handle the seconds component
      const secondsSplit = minutesSplit[1].split('s');
      convertedDuration += secondsSplit[0];
    } else {    // duration is seconds only
      // Handle seconds component
      convertedDuration += `0:${duration.split('s')[0]}`;
    }
  }

  // duration is > 1 hour (i.e. contains hours/minutes/seconds components)
  if (hoursSplit.length > 1) {
    // Handle hours component
    convertedDuration += `${hoursSplit[0]}:`;

    // Handle minutes component
    const minutesSplit = hoursSplit[1].split('m');
    convertedDuration += `${minutesSplit[0]}:`;

    // Handle the seconds component
    const secondsSplit = minutesSplit[1].split('s');
    convertedDuration += secondsSplit[0];
  }

  return convertedDuration;
};
