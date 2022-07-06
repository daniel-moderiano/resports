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
});