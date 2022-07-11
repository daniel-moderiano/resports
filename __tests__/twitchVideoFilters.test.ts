import {filterByDuration, filterByKeyword, filterByDate} from "../helpers/twitchVideoFilters";
import {HelixVideo} from "@twurple/api";

const testVideos: HelixVideo[] = [
  {
    durationInSeconds: 18000,   // 05:00:00
    creationDate: new Date(2022, 5, 12),
    title: "video one",
    // @ts-expect-error exact getUser implementation not needed in these tests
    getUser: jest.fn,
  },
  {
    durationInSeconds: 8274,    // 02:15:54
    creationDate: new Date(2022, 4, 12),
    title: "video two",
    // @ts-expect-error exact getUser implementation not needed in these tests
    getUser: jest.fn,
  },
  {
    durationInSeconds: 10,   // 00:00:10
    creationDate: new Date(2022, 3, 12),
    title: "video three",
    // @ts-expect-error exact getUser implementation not needed in these tests
    getUser: jest.fn,
  },
  {
    durationInSeconds: 45006,    // 12:30:06
    creationDate: new Date(2022, 5, 13),
    title: "video four",
    // @ts-expect-error exact getUser implementation not needed in these tests
    getUser: jest.fn,
  },
  {
    durationInSeconds: 23452,   // 06:30:52
    creationDate: new Date(2022, 5, 11),
    title: "video five",
    // @ts-expect-error exact getUser implementation not needed in these tests
    getUser: jest.fn,
  },
  {
    durationInSeconds: 1234,    // 00:20:34
    creationDate: new Date(2022, 5, 12, 5),
    title: "video six",
    // @ts-expect-error exact getUser implementation not needed in these tests
    getUser: jest.fn,
  },
]

describe('Filter videos by duration', () => {
  it('returns all videos for zero second duration input', () => {
    expect(filterByDuration(testVideos, 0)).toStrictEqual(testVideos);
  });

  it('returns all videos above specified minimum duration', () => {
  //  Aim to filter out all those videos less than 4 hours duration
    expect(filterByDuration(testVideos, 14400)).toStrictEqual([
      {
        durationInSeconds: 18000,   // 05:00:00
        creationDate: new Date(2022, 5, 12),
        title: "video one",
        getUser: jest.fn,
      },
      {
        durationInSeconds: 45006,    // 12:30:06
        creationDate: new Date(2022, 5, 13),
        title: "video four",
        getUser: jest.fn,
      },
      {
        durationInSeconds: 23452,   // 06:30:52
        creationDate: new Date(2022, 5, 11),
        title: "video five",
        getUser: jest.fn,
      },
    ]);
  });

  it('does not return video with duration equal to the minimum specified', () => {
    expect(filterByDuration(testVideos, 23452)).toStrictEqual([
      {
        durationInSeconds: 45006,    // 12:30:06
        creationDate: new Date(2022, 5, 13),
        title: "video four",
        getUser: jest.fn,
      },
    ]);
  });

  it('returns an empty array if no videos exist above the minimum specified duration', () => {
    expect(filterByDuration(testVideos, 50000)).toStrictEqual([]);
  });
})

describe('Filter videos by title keyword', () => {
  it('returns all videos for a single common letter filter', () => {
    expect(filterByKeyword(testVideos, 'v')).toStrictEqual(testVideos);
  });

  it('returns all videos when the keyword is any amount of whitespace', () => {
    expect(filterByKeyword(testVideos, '   ')).toStrictEqual(testVideos);
  });

  it('returns the appropriate videos given a single keyword search', () => {
    //  Aim to filter out all those videos less than 4 hours duration
    expect(filterByKeyword(testVideos, 'one')).toStrictEqual([
      {
        durationInSeconds: 18000,   // 05:00:00
        creationDate: new Date(2022, 5, 12),
        title: "video one",
        getUser: jest.fn,
      },
    ]);
  });

  it('returns the appropriate videos given a multiple keyword search', () => {
    //  Aim to filter out all those videos less than 4 hours duration
    expect(filterByKeyword(testVideos, 'video two')).toStrictEqual([
      {
        durationInSeconds: 8274,    // 02:15:54
        creationDate: new Date(2022, 4, 12),
        title: "video two",
        getUser: jest.fn,
      },
    ]);
  });

  it('returns an empty array if no videos match the search keyword', () => {
    expect(filterByKeyword(testVideos, 'ten')).toStrictEqual([]);
  });
})

describe('Filter videos by date', () => {
  it('returns all videos older than the provided date', () => {
    // Should NOT return the 12/05/2022 05:00:00 video!
    expect(filterByDate(testVideos, new Date(2022, 5, 12))).toStrictEqual([
      {
        durationInSeconds: 18000,   // 05:00:00
        creationDate: new Date(2022, 5, 12),
        title: "video one",
        getUser: jest.fn,
      },
      {
        durationInSeconds: 8274,    // 02:15:54
        creationDate: new Date(2022, 4, 12),
        title: "video two",
        getUser: jest.fn,
      },
      {
        durationInSeconds: 10,   // 00:00:10
        creationDate: new Date(2022, 3, 12),
        title: "video three",
        getUser: jest.fn,
      },
      {
        durationInSeconds: 23452,
        creationDate: new Date(2022, 5, 11),
        title: "video five",
        getUser: jest.fn,
      },
    ]);
  });

  it('includes videos on the specified date (if released at 00:00:00)', () => {
    expect(filterByDate(testVideos, new Date(2022, 3, 12))).toStrictEqual([
      {
        durationInSeconds: 10,   // 00:00:10
        creationDate: new Date(2022, 3, 12),
        title: "video three",
        getUser: jest.fn,
      },
    ]);
  });

  it('returns empty list when no videos match the criteria', () => {
    expect(filterByDate(testVideos, new Date(2021, 7, 3))).toStrictEqual([]);
  });
})