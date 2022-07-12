import {VideoFilters} from "../components/TwitchChannelVideos";
import * as React from "react";
import {HelixVideoType} from "@twurple/api";
import {HelixVideo} from "@twurple/api/lib";
import {useState} from "react";

interface TwitchFilterMenuProps {
  filters: VideoFilters;
  setFilters: React.Dispatch<React.SetStateAction<VideoFilters>>;
  filteredVideos: HelixVideo[] | undefined | null;
  setFilteredVideos: React.Dispatch<React.SetStateAction<HelixVideo[] | null | undefined>>;
}

const TwitchFilterMenu = ({filters, setFilters, filteredVideos, setFilteredVideos}: TwitchFilterMenuProps) => {

  const handleOptionSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // This typecasting is required, as you cannot simply assign the 'string' value type to the videoType state
    setFilters((prevFilters) => ({
      ...prevFilters,
      videoType: e.target.value as HelixVideoType | 'all'
    }));
  }

  // Unique states are used for each filter within this component
  const [keyword, setKeyword] = useState(filters.keywordFilter ? filters.keywordFilter : '');
  const [minDuration, setMinDuration] = useState(filters.minDurationFilter ? filters.minDurationFilter : 0);
  const [maxDuration, setMaxDuration] = useState(filters.maxDurationFilter ? filters.maxDurationFilter : 180000);
  const [date, setDate] = useState(filters.dateFilter ? filters.dateFilter : new Date());

  return (
    <div>
      {/*Expand and collapse the filter menu*/}
      <button>Filters</button>

      <div>
        <h4>Upload date</h4>
        <label htmlFor="date">Uploaded before date</label>
        <input type="date" id="date" value={date.toLocaleDateString('en-CA')} onChange={(e) =>  setDate(new Date(e.target.valueAsNumber))}/>
      </div>
      <div>
        <h4>Duration</h4>
        <label htmlFor="minDuration">Min duration</label>
        <input type="number" id="minDuration" value={minDuration} onChange={(e) =>  setMinDuration(parseInt(e.target.value))}/>

        <label htmlFor="maxDuration">Max duration</label>
        <input type="number" id="maxDuration" value={maxDuration} onChange={(e) =>  setMaxDuration(parseInt(e.target.value))}/>
      </div>
      <div>
        <h4>Keyword Search</h4>
        <label htmlFor="keyword">Keyword</label>
        <input type="text" id="keyword" value={keyword} onChange={(e) =>  setKeyword(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="videoType">Video type</label>
        <select defaultValue={filters.videoType} onChange={handleOptionSelect} name="videoType" id="videoType">
          <option value="all" data-testid="allOption">All videos</option>
          <option value="archive" data-testid="broadcastOption">Broadcasts</option>
        </select>
      </div>
    </div>
  );
};

export default TwitchFilterMenu;
