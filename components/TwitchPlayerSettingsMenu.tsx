import { useKeyboardNavigation } from '../hooks/useKeyboardMenuNavigation';
import { useMenuCloseEvents } from '../hooks/useMenuCloseEvents';
import React from 'react';

interface TwitchPlayerSettingsMenuProps {
  closeMenu: () => void;
  player: Twitch.Player;
}

const TwitchPlayerSettingsMenu = ({ closeMenu, player }: TwitchPlayerSettingsMenuProps) => {
  useMenuCloseEvents('twitchSettingsMenu', closeMenu);
  useKeyboardNavigation('twitchSettingsMenu');

  return (
    <ul id="twitchSettingsMenu" data-id="twitchSettingsMenu" role="menu" aria-label="Video settings menu" data-testid="twitchSettingsMenu">
      {player.getQualities().map((quality) => (
        <li role="none" key={quality.name}>
          <button role="menuitem" onClick={() => {
            player.setQuality(quality.group as Twitch.VideoQuality);
            closeMenu();
          }}>{quality.group === 'chunked' ? `${quality.name} (Source)` : `${quality.name}`}</button>
        </li>
      ))}
    </ul>
  )
}

export default TwitchPlayerSettingsMenu;

