import { convertTwitchVideoDuration } from "../helpers/videoDurationConversion";

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