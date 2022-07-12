import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TwitchFilterMenu from "@/components/TwitchFilterMenu";
import {VideoFilters} from "@/components/TwitchChannelVideos";
import {HelixVideo} from "@twurple/api";

const filters: VideoFilters = {
  dateFilter: null,
  minDurationFilter: null,
  maxDurationFilter: null,
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

describe('Video type filter', () => {
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

describe('Video keyword filter', () => {
  it('Defaults with empty search box with placeholder', () => {
    render(<TwitchFilterMenu filters={filters} filteredVideos={testVideos} setFilteredVideos={jest.fn} setFilters={jest.fn} />)
    const keywordInput: HTMLInputElement = screen.getByLabelText(/keyword/i)
    expect(keywordInput.value).toBe('');
    expect(keywordInput.placeholder).toBe('Filter by keyword');
  });

  it('Correctly updates UI when user types input', async () => {
    render(<TwitchFilterMenu filters={filters} filteredVideos={testVideos} setFilteredVideos={jest.fn} setFilters={jest.fn} />)
    const keywordInput: HTMLInputElement = screen.getByLabelText(/keyword/i)

    await userEvent.type(keywordInput, 'test')
    expect(keywordInput.value).toBe('test');
  });
});

describe('Video date filter', () => {
  it.todo('Defaults to "Any" initial value"');
  it.todo('Updates date picker UI on user date input');
});

describe('Video duration filter', () => {
  it('Gives the user preset duration options', () => {
    render(<TwitchFilterMenu filters={filters} filteredVideos={testVideos} setFilteredVideos={jest.fn} setFilters={jest.fn} />)
    const anyDuration = screen.getByLabelText(/any duration/i);
    const durationOne = screen.getByLabelText(/under 5 minutes/i);
    const durationTwo = screen.getByLabelText(/5 - 60 minutes/i);
    const durationThree = screen.getByLabelText(/1 - 4 hours/i);
    const durationFour = screen.getByLabelText(/over 4 hours/i);
    expect(anyDuration).toBeInTheDocument();
    expect(durationOne).toBeInTheDocument();
    expect(durationTwo).toBeInTheDocument();
    expect(durationThree).toBeInTheDocument();
    expect(durationFour).toBeInTheDocument();
  });

  it('initialises min and max durations to "Any"', () => {
    render(<TwitchFilterMenu filters={filters} filteredVideos={testVideos} setFilteredVideos={jest.fn} setFilters={jest.fn} />)
    const anyDuration: HTMLInputElement = screen.getByLabelText(/any duration/i);
    expect(anyDuration.checked).toBe(true);
  })

  it('Allows the user to select a single duration filter at a time', async () => {
    render(<TwitchFilterMenu filters={filters} filteredVideos={testVideos} setFilteredVideos={jest.fn} setFilters={jest.fn} />)
    const anyDuration: HTMLInputElement = screen.getByLabelText(/any duration/i);
    const durationOne: HTMLInputElement = screen.getByLabelText(/under 5 minutes/i);
    const durationTwo: HTMLInputElement = screen.getByLabelText(/5 - 60 minutes/i);
    const durationThree: HTMLInputElement = screen.getByLabelText(/1 - 4 hours/i);
    const durationFour: HTMLInputElement = screen.getByLabelText(/over 4 hours/i);
    await userEvent.click(durationTwo)
    expect(anyDuration.checked).toBe(false);
    expect(durationOne.checked).toBe(false);
    expect(durationTwo.checked).toBe(true);
    expect(durationThree.checked).toBe(false);
    expect(durationFour.checked).toBe(false);
  });
});

