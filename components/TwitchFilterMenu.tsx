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

  const [showFilters, setShowFilters] = useState(false);

  // Unique states are used for each filter within this component
  const [keyword, setKeyword] = useState(filters.keywordFilter ? filters.keywordFilter : '');
  const [minDuration, setMinDuration] = useState(filters.minDurationFilter ? filters.minDurationFilter : 0);
  const [maxDuration, setMaxDuration] = useState(filters.maxDurationFilter ? filters.maxDurationFilter : 180000);
  const [date, setDate] = useState(filters.dateFilter ? filters.dateFilter : new Date());

  // Convenience function used when a radio button is clicked. It allows easy min/max setting in one function call
  const setDuration = (minDuration: number, maxDuration: number) => {
    setMinDuration(minDuration);
    setMaxDuration(maxDuration)
  }

  console.log(minDuration, maxDuration)

  return (
    <div>
      {/*Expand and collapse the filter menu*/}
      <button onClick={() => setShowFilters((prevState) => !prevState)}>Filters</button>

      {showFilters && (
        <div>
          <div>
            <h4>Upload date</h4>
            <label htmlFor="date">Uploaded before date</label>
            <input type="date" id="date" value={date.toLocaleDateString('en-CA')} onChange={(e) =>  setDate(new Date(e.target.valueAsNumber))}/>
          </div>
          <div>
            <h4>Duration</h4>
            <fieldset>
              <legend>Select a duration</legend>
              <div>
                <input type="radio" id="anyDuration" name="duration" onChange={() => setDuration(0, 180000)} checked={minDuration === 0 && maxDuration === 180000}/>
                <label htmlFor="anyDuration">Any duration</label>
              </div>

              <div>
                <input type="radio" id="durationOne" name="duration" onChange={() => setDuration(0, 300)}/>
                <label htmlFor="durationOne">Under 5 minutes</label>
              </div>

              <div>
                <input type="radio" id="durationTwo" name="duration" onChange={() => setDuration(300, 3600)} />
                <label htmlFor="durationTwo">5 - 60 minutes</label>
              </div>

              <div>
                <input type="radio" id="durationThree" name="duration" onChange={() => setDuration(3600, 14400)} />
                <label htmlFor="durationThree">1 - 4 hours</label>
              </div>

              <div>
                <input type="radio" id="durationFour" name="duration" onChange={() => setDuration(14400, 180000)} />
                <label htmlFor="durationFour">Over 4 hours</label>
              </div>
            </fieldset>
          </div>
          <div>
            <h4>Keyword Search</h4>
            <label htmlFor="keyword">Keyword</label>
            <input type="text" id="keyword" value={keyword} onChange={(e) =>  setKeyword(e.target.value)} />
          </div>
          <div>
            <label htmlFor="videoType">Video type</label>
            <select defaultValue={filters.videoType} onChange={handleOptionSelect} name="videoType" id="videoType">
              <option value="all" data-testid="allOption">All videos</option>
              <option value="archive" data-testid="broadcastOption">Broadcasts</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default TwitchFilterMenu;
