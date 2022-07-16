// Twitch-specific video duration converter. Expects string input in the form XXhXXmXXs (e.g. 5h43m12s), and should yield of the form HH:MM:SS
export const convertTwitchVideoDuration = (duration: string) => {
  let convertedDuration = '';

  // Splitting at the hours allows use to handle all the conditionals easily from the top-down
  // It also correctly handles input no matter the duration, whereas using a length conditional would vary for 0 mins/secs
  const hoursSplit = duration.split('h');

  if (hoursSplit.length === 1) {    // duration is either minutes/seconds or seconds only
    const minutesSplit = duration.split('m');

    if (minutesSplit.length > 1) {    // duration is minutes/seconds
      // Handle the minutes component (add extra zeros for single digit mins)
      convertedDuration += `${minutesSplit[0]}:`;

      // Handle the seconds component
      const secondsSplit = minutesSplit[1].split('s');
      convertedDuration += secondsSplit[0].length > 1 ? `${secondsSplit[0]}` : `0${secondsSplit[0]}`
    } else {    // duration is seconds only
      // Handle seconds component
      convertedDuration += `0:${duration.split('s')[0]}`;
    }
  }

  // duration is > 1 hour (i.e. contains hours/minutes/seconds components)
  if (hoursSplit.length > 1) {
    // Handle hours component
    convertedDuration += `${hoursSplit[0]}:`;

    // Handle minutes component (add extra zeros for single digit mins)
    const minutesSplit = hoursSplit[1].split('m');
    convertedDuration += minutesSplit[0].length > 1 ? `${minutesSplit[0]}:` : `0${minutesSplit[0]}:`

    // Handle the seconds component  (add extra zeros for single digit secs)
    const secondsSplit = minutesSplit[1].split('s');
    convertedDuration += secondsSplit[0].length > 1 ? `${secondsSplit[0]}` : `0${secondsSplit[0]}`
  }

  return convertedDuration;
};


// YouTube-specific video duration converter. Expects string input in ISO 8601 duration format, and should yield of the form HH:MM:SS. Uses near identical logic to twitch converter. Please refer to comments above.
export const convertYouTubeVideoDuration = (duration: string) => {
  let convertedDuration = '';

  // Removes the 'PT' from ISO duration as this is not necessary for UI or further adjustments
  // Because the max YouTube VOD is 12 hours, we do not have to factor any designators between 'P' and 'T'
  duration = duration.split('PT')[1]

  const hoursSplit = duration.split('H');

  if (hoursSplit.length === 1) {    // duration is either minutes/seconds or seconds only
    const minutesSplit = duration.split('M');

    if (minutesSplit.length > 1) {    // duration is minutes/seconds
      convertedDuration += `${minutesSplit[0]}:`;
      const secondsSplit = minutesSplit[1].split('S');
      convertedDuration += secondsSplit[0].length > 1 ? `${secondsSplit[0]}` : `0${secondsSplit[0]}`
    } else {    // duration is seconds only
      convertedDuration += `0:${duration.split('S')[0]}`;
    }
  }

  // duration is > 1 hour (i.e. contains hours/minutes/seconds components)
  if (hoursSplit.length > 1) {
    convertedDuration += `${hoursSplit[0]}:`;
    const minutesSplit = hoursSplit[1].split('M');
    convertedDuration += minutesSplit[0].length > 1 ? `${minutesSplit[0]}:` : `0${minutesSplit[0]}:`

    const secondsSplit = minutesSplit[1].split('S');
    convertedDuration += secondsSplit[0].length > 1 ? `${secondsSplit[0]}` : `0${secondsSplit[0]}`
  }

  return convertedDuration;
};
