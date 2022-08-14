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

  console.log('Menu opened');

  return (
    <ul id="twitchSettingsMenu" data-id="twitchSettingsMenu" role="menu" aria-label="Video settings menu" data-testid="twitchSettingsMenu">
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