import { useKeyboardNavigation } from '../hooks/useKeyboardMenuNavigation';
import { useMenuCloseEvents } from '../hooks/useMenuCloseEvents';
import React from 'react';

interface TwitchPlayerSettingsMenuProps {
  closeMenu: () => void;
  videoQualities: Twitch.VideoQualityObject[];
}

const TwitchPlayerSettingsMenu = ({ closeMenu, videoQualities }: TwitchPlayerSettingsMenuProps) => {
  useMenuCloseEvents('twitchSettingsMenu', closeMenu);
  useKeyboardNavigation('twitchSettingsMenu');

  return (
    <ul id="twitchSettingsMenu" role="menu" aria-label="Video settings menu" data-testid="twitchSettingsMenu">
      {videoQualities.map((quality) => (
        <li role="none" key={quality.name}>
          <button role="menuitem" onClick={() => {
            closeMenu();
          }}>{quality.name}</button>
        </li>
      ))}
    </ul>
  )
}

export default TwitchPlayerSettingsMenu;