import {
  convertISOToSeconds,
  convertTwitchVideoDuration,
  convertYouTubeVideoDuration
} from "../helpers/videoDurationConversion";

describe('Twitch video duration conversion', () => {
  it('Converts seconds-only input', () => {
    expect(convertTwitchVideoDuration('44s')).toBe('0:44')
  });

  it('Converts minutes/seconds-only input', () => {
    expect(convertTwitchVideoDuration('3m21s')).toBe('3:21')
  });

  it('Converts full hours/minutes/seconds input', () => {
    expect(convertTwitchVideoDuration('11h10m12s')).toBe('11:10:12')
  });

  it('Handles single digit hours correctly', () => {
    expect(convertTwitchVideoDuration('5h10m10s')).toBe('5:10:10')
  });

  it('Handles single digit minutes correctly', () => {
    expect(convertTwitchVideoDuration('10h5m12s')).toBe('10:05:12')
  });

  it('Handles single digit seconds correctly', () => {
    expect(convertTwitchVideoDuration('11h10m0s')).toBe('11:10:00')
  });

  it('Handles single digit seconds correctly (leading zeros)', () => {
    expect(convertTwitchVideoDuration('11m1s')).toBe('11:01')
  });
});

describe('YouTube video duration conversion', () => {
  it('Converts seconds-only input', () => {
    expect(convertYouTubeVideoDuration('PT44S')).toBe('0:44')
  });

  it('Converts minutes/seconds-only input', () => {
    expect(convertYouTubeVideoDuration('PT3M21S')).toBe('3:21')
  });

  it('Converts full hours/minutes/seconds input', () => {
    expect(convertYouTubeVideoDuration('PT11H10M12S')).toBe('11:10:12')
  });

  it('Handles single digit hours correctly', () => {
    expect(convertYouTubeVideoDuration('PT5H10M10S')).toBe('5:10:10')
  });

  it('Handles single digit minutes correctly', () => {
    expect(convertYouTubeVideoDuration('PT10H5M12S')).toBe('10:05:12')
  });

  it('Handles single digit seconds correctly (leading zeros)', () => {
    expect(convertYouTubeVideoDuration('PT11M1S')).toBe('11:01')
  });

  it('Handles minutes only input', () => {
    expect(convertYouTubeVideoDuration('PT11H10M')).toBe('11:10:00')
  });

  it('Handles hour only input', () => {
    expect(convertYouTubeVideoDuration('PT11M')).toBe('11:00')
  });
});

describe('ISO to seconds duration conversion', () => {
  it('Converts seconds-only input', () => {
    expect(convertISOToSeconds('PT44S')).toBe(44)
  });

  it('Converts minutes/seconds-only input', () => {
    expect(convertISOToSeconds('PT3M21S')).toBe(201)
  });

  it('Converts full hours/minutes/seconds input', () => {
    expect(convertISOToSeconds('PT11H10M12S')).toBe(40212)
  });

  it('Handles single digit hours correctly', () => {
    expect(convertISOToSeconds('PT5H10M10S')).toBe(18610)
  });

  it('Handles single digit minutes correctly', () => {
    expect(convertISOToSeconds('PT10H5M12S')).toBe(36312)
  });

  it('Handles single digit seconds correctly', () => {
    expect(convertISOToSeconds('PT11H10M0S')).toBe(40200)
  });

  it('Handles single digit seconds correctly (leading zeros)', () => {
    expect(convertISOToSeconds('PT11M1S')).toBe(661)
  });
});