import {VideoFilters} from "../components/TwitchChannelVideos";
import * as React from "react";
import {HelixVideoType} from "@twurple/api";

interface TwitchFilterMenuProps {
  filters: VideoFilters
  setFilters: React.Dispatch<React.SetStateAction<VideoFilters>>
}

const TwitchFilterMenu = ({filters, setFilters}: TwitchFilterMenuProps) => {

  const handleOptionSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // This typecasting is required, as you cannot simply assign the 'string' value type to the videoType state
    setFilters((prevFilters) => ({
      ...prevFilters,
      videoType: e.target.value as HelixVideoType | 'all'
    }));
  }

  return (
    <div>
      {/*Expand and collapse the filter menu*/}
      <button>Filters</button>

      <div>
        <h4>Upload date</h4>
      </div>
      <div>
        <h4>Duration</h4>
      </div>
      <div>
        <h4>Keyword Search</h4>
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
