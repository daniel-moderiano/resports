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

      if (secondsSplit.length > 1) {
        convertedDuration += secondsSplit[0].length > 1 ? `${secondsSplit[0]}` : `0${secondsSplit[0]}`;
      } else {    // There are zero seconds, as this would result in the 'S' being omitted entirely. Format accordingly
        convertedDuration += '00';
      }

    } else {    // duration is seconds only
      convertedDuration += `0:${duration.split('S')[0]}`;
    }
  }

  // duration is > 1 hour (i.e. contains hours/minutes/seconds components)
  if (hoursSplit.length > 1) {
    convertedDuration += `${hoursSplit[0]}:`;
    const minutesSplit = hoursSplit[1].split('M');

    if (minutesSplit.length > 1) {    // the likely case where there is a defined amount of minutes
      convertedDuration += minutesSplit[0].length > 1 ? `${minutesSplit[0]}:` : `0${minutesSplit[0]}:`
      const secondsSplit = minutesSplit[1].split('S');

      if (secondsSplit.length > 1) {    // the likely case where there is a defined amount of seconds
        convertedDuration += secondsSplit[0].length > 1 ? `${secondsSplit[0]}` : `0${secondsSplit[0]}`
      } else {    // There are zero seconds, as this would result in the 'S' being omitted entirely. Format accordingly
        convertedDuration += '00';
      }

    } else {    // there are zero minutes in the duration input. Format accordingly
      convertedDuration += '00:';

      // Treat seconds handling as normal, but use the now initial and only member of the minutesSplit array
      const secondsSplit = minutesSplit[0].split('S');

      if (secondsSplit.length > 1) {    // the likely case where there is a defined amount of seconds
        convertedDuration += secondsSplit[0].length > 1 ? `${secondsSplit[0]}` : `0${secondsSplit[0]}`
      } else {    // There are zero seconds, as this would result in the 'S' being omitted entirely. Format accordingly
        convertedDuration += '00';
      }
    }


  }

  return convertedDuration;
};



// This function is used to convert an ISO 8601 duration into a single integer number of seconds. This is required to make ISO durations comparable arithmetically for duration filtering (for the YouTube filters)
export const convertISOToSeconds = (duration: string) => {
  let cumulativeSeconds = 0;

  // Removes the 'PT' from ISO duration as this is not necessary for UI or further adjustments
  // Because the max YouTube VOD is 12 hours, we do not have to factor any designators between 'P' and 'T'
  duration = duration.split('PT')[1];

  // Splitting at the hours allows use to handle all the conditionals easily from the top-down
  // It also correctly handles input no matter the duration, whereas using a length conditional would vary for 0 mins/secs
  const hoursSplit = duration.split('H');

  if (hoursSplit.length === 1) {    // duration is either minutes/seconds or seconds only
    const minutesSplit = duration.split('M');

    if (minutesSplit.length > 1) {    // duration is minutes/seconds
      // Handle the minutes component (convert to seconds and sum to cumulative total)
      cumulativeSeconds += (parseInt(minutesSplit[0]) * 60);

      // Handle the seconds component
      const secondsSplit = minutesSplit[1].split('S');
      cumulativeSeconds += parseInt(secondsSplit[0])
    } else {    // duration is seconds only
      // Handle seconds component
      cumulativeSeconds += parseInt(duration.split('s')[0])
    }
  }

  // duration is > 1 hour (i.e. contains hours/minutes/seconds components)
  if (hoursSplit.length > 1) {
    // Handle hours component
    cumulativeSeconds += (parseInt(hoursSplit[0]) * 60 * 60);

    // Handle minutes component
    const minutesSplit = hoursSplit[1].split('M');
    cumulativeSeconds += (parseInt(minutesSplit[0]) * 60);

    // Handle the seconds component  (add extra zeros for single digit secs)
    const secondsSplit = minutesSplit[1].split('S');
    cumulativeSeconds += parseInt(secondsSplit[0]);
  }

  return cumulativeSeconds;
}
