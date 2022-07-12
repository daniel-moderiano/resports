import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TwitchFilterMenu from "@/components/TwitchFilterMenu";
import {VideoFilters} from "@/components/TwitchChannelVideos";
import {HelixVideo} from "@twurple/api";

const filters: VideoFilters = {
  dateFilter: null,
  durationFilter: null,
  keywordFilter: null,
  videoType: 'archive'
}

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
  }
]

describe('Twitch videos loading/error/data UI states', () => {
  it('Defaults the video type select element to "Broadcasts"', () => {
    render(<TwitchFilterMenu filters={filters} filteredVideos={testVideos} setFilteredVideos={jest.fn} setFilters={jest.fn} />)
    const selectElement: HTMLSelectElement = screen.getByLabelText(/video type/i)
    expect(selectElement.value).toBe('archive');
  });

  it('Correctly handles selecting different video type options', async () => {
    render(<TwitchFilterMenu filters={filters} filteredVideos={testVideos} setFilteredVideos={jest.fn} setFilters={jest.fn} />)
    const selectElement: HTMLSelectElement = screen.getByLabelText(/video type/i);
    const allOption: HTMLOptionElement = screen.getByTestId(/allOption/i);
    await userEvent.selectOptions(selectElement, allOption)
    expect(selectElement.value).toBe('all');
  });
});
