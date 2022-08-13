// Type definitions for Twitch Player API
// Project: https://dev.twitch.tv/
// Definitions by: Daniel Moderiano <https://daniel-moderiano.com>,

/**
 * @see https://dev.twitch.tv/docs/embed/video-and-clips/
 */
declare namespace Twitch {
  /**
   * State of a video player.
   */
  export enum PlayerState {
    UNSTARTED = -1,
    ENDED = 0,
    PLAYING = 1,
    PAUSED = 2,
    BUFFERING = 3,
    CUED = 5
  }

  /**
   * Known causes for player errors.
   */
  export enum PlayerError {
    /**
     * The request contained an invalid parameter value.
     */
    InvalidParam = 2,

    /**
     * The requested content cannot be played in an HTML5 player.
     */
    Html5Error = 5,

    /**
     * The video requested was not found.
     */
    VideoNotFound = 100,

    /**
     * The owner of the requested video does not allow it to be played in embedded players.
     */
    EmbeddingNotAllowed = 101,

    /**
     * This error is the same as 101. It's just a 101 error in disguise!
     */
    EmbeddingNotAllowed2 = 150
  }

  /**
   * Whether to auto-hide video controls.
   */
  export enum AutoHide {
    /**
     * Controls are visible throughout the video
     */
    AlwaysVisible = 0,

    /**
     * Progress bar and player controls slide out of view after a couple of seconds.
     */
    HideAllControls = 1,

    /**
     * Progress bar fades out while the player controls remain visible.
     */
    HideProgressBar = 2
  }

  /**
   * Whether to autoplay the video.
   */
  export enum AutoPlay {
    /**
     * Video does not autoplay.
     */
    NoAutoPlay = 0,

    /**
     * Video will autoplay when loaded.
     */
    AutoPlay = 1
  }

  /**
   * Allowed suggested player video qualities.
   */
  export type VideoQuality = (
    VideoQualityAuto
    | VideoQualitySD160
    | VideoQualitySD360
    | VideoQualitySD480
    | VideoQualityHD720
    | VideoQualityHD1080
    | VideoQualitySource);

  /**
   * Default video quality chosen by Twitch.
   */
  export type VideoQualityAuto = "auto";

  /**
   * Player height is 160px, and player dimensions are at least 214px by 160px for 4:3 aspect ratio.
   */
  export type VideoQualitySmall = "160p30";

  /**
   * Player height is 360px, and player dimensions are 640px by 360px (for 16:9 aspect ratio) or 480px by 360px (for 4:3 aspect ratio).
   */
  export type VideoQualityMedium = "360p30";

  /**
   * Player height is 480px, and player dimensions are 853px by 480px (for 16:9 aspect ratio) or 640px by 480px (for 4:3 aspect ratio).
   */
  export type VideoQualityLarge = "480p30";

  /**
   * Player height is 720px, and player dimensions are 1280px by 720px (for 16:9 aspect ratio) or 960px by 720px (for 4:3 aspect ratio).
   */
  export type VideoQualityHD720 = "720p60";

  /**
   * Player height is 1080px, and player dimensions are 1920px by 1080px (for 16:9 aspect ratio) or 1440px by 1080px (for 4:3 aspect ratio).
   */
  export type VideoQualityHD1080 = "1080p60";

  /**
   * Player height is greater than 1080px, which means that the player's aspect ratio is greater than 1920px by 1080px.
   * The highest video quality available.
   */
  export type VideoQualitySource = "chunked";

  /**
   * Base interface for events triggered by a player.
   */
  export interface PlayerEvent {
    /**
     * Video player corresponding to the event.
     */
    target: Player;
  }

  /**
   * Event for player state change.
   */
  export interface OnStateChangeEvent extends PlayerEvent {
    /**
     * New player state.
     */
    data: PlayerState;
  }

  /**
   * Event for playback quality change.
   */
  export interface OnPlaybackQualityChangeEvent extends PlayerEvent {
    /**
     * New playback quality.
     */
    data: string;
  }

  /**
   * Event for playback rate change.
   */
  export interface OnPlaybackRateChangeEvent extends PlayerEvent {
    /**
     * New playback rate.
     */
    data: number;
  }

  /**
   * Event for a player error.
   */
  export interface OnErrorEvent extends PlayerEvent {
    /**
     * Which type of error occurred.
     */
    data: PlayerError;
  }

  /**
   * Handles a player event.
   *
   * @param event   The triggering event.
   */
  export interface PlayerEventHandler<TEvent extends PlayerEvent> {
    (event: TEvent): void;
  }

  /**
   * YouTube player options.
   */
  export interface PlayerOptions {
    /**
     * Player width.
     */
    width?: string | number | undefined;

    /**
     * Player height
     */
    height?: string | number | undefined;

    /**
     * ID of the video to load.
     */
    video?: string | undefined;

    /**
     * ID of the collection to play videos from. 
     */
    collection?: string | undefined;

    /**
    * ID of the channel to play videos from. Channel will be preferred when specified alongside video and/or collection
    */
    channel?: string | undefined;

    /**
     * List of other domains your site is to be embedded on.
     */
    parent?: string[] | undefined;

    /**
     * Whether controls are shown. This also enables/disables keyboard controls.
     * This is a hidden option, i.e. is not listed on Twitch's API documentation
     */
    controls?: boolean | undefined;

    /**
     * Whether to start the video automatically (default true).
     */
    autoplay?: boolean | undefined;

    /**
     * Whether to start the video muted (default false). This will be automatically set to true if autoplay is enabled.
     */
    muted?: boolean | undefined;

    /**
     * Time in the video where playback starts. Valid for VODs only. 
     * Specifies hours, minutes, and seconds (default 0h0m0s).
     */
    time?: string | undefined;
  }


  /**
   * Handlers for events fired by the player.
   */
  export interface Events {
    /**
     * Event fired when a player has finished loading and is ready to begin receiving API calls.
     */
    onReady?: PlayerEventHandler<PlayerEvent> | undefined;

    /**
     * Event fired when the player's state changes.
     */
    onStateChange?: PlayerEventHandler<OnStateChangeEvent> | undefined;

    /**
     * Event fired when the playback quality of the player changes.
     */
    onPlaybackQualityChange?: PlayerEventHandler<OnPlaybackQualityChangeEvent> | undefined;

    /**
     * Event fired when the playback rate of the player changes.
     */
    onPlaybackRateChange?: PlayerEventHandler<OnPlaybackRateChangeEvent> | undefined;

    /**
     * Event fired when an error in the player occurs
     */
    onError?: PlayerEventHandler<OnErrorEvent> | undefined;

    /**
     * Event fired to indicate thath the player has loaded, or unloaded, a module
     * with exposed API methods. This currently only occurs for closed captioning.
     */
    onApiChange?: PlayerEventHandler<PlayerEvent> | undefined;
  }

  /**
   * Creates and controls a Twitch player in an <iframe>.
   */
  export class Player {
    /**
     * Initialises a new instance of the Player class.
     *
     * @param playerDivId   ID of the <div> element to insert the player's <iframe>.
     * @param options   Player options.
     */
    constructor(playerDivId: string, options: PlayerOptions);

    /**
     * Plays the specified video.
     */
    playVideo(): void;

    /**
     * Pauses the currently playing video.
     */
    pauseVideo(): void;

    /**
     * Seeks to a specified time in the video.
     *
     * @param timestamp   Timestamp, in seconds from the beginning of the video.
     */
    seek(seconds: number): void;

    /**
     * Disables display of Closed Captions.
     */
    disableCaptions(): void;

    /**
     * Enables display of Closed Captions (if available).
     */
    enableCaptions(): void;

    /**
     * Sets the channel to be played.
     *
     * @param index   ID of the channel to be played. 
     */
    setChannel(channel: string): void;

    /**
     * Sets the collection to be played.
     * Optionally also specifies the video within the collection, from which to start playback.
     * @param collectionId   ID of the collection to be played from. 
     * @param videoId   ID of the video to start with (within collection) 
     */
    setCollection(collectionId: string, videoId?: string): void;

    /**
     * Sets the quality of the video.
     * @param quality   Video quality from the available types
     */
    setQuality(quality: VideoQuality): void;

    /**
     * @returns Whether the player is muted.
     */
    isMuted(): boolean;

    /**
     * Sets the player volume.
     *
     * @param volume   An integer between 0 and 100.
     */
    setVolume(volume: number): void;

    /**
     * @returns The player's current volume, an integer between 0 and 100.
     */
    getVolume(): number;

    /**
     * Sets the size in pixels of the <iframe> that contains the player.
     *
     * @param width   Width in pixels of the <iframe>.
     * @param height   Height in pixels of the <iframe>.
     */
    setSize(width: number, height: number): void;

    /**
     * @returns Playback rate of the currently playing video.
     */
    getPlaybackRate(): number;

    /**
     * Sets the suggested playback rate for the current video.
     *
     * @param suggestedRate   Suggested playback rate.
     */
    setPlaybackRate(suggestedRate: number): void;

    /**
     * @returns Available playback rates for the current video.
     */
    getAvailablePlaybackRates(): number[];

    /**
     * Sets whether the player should continuously play a playlist.
     *
     * @param loopPlaylists   Whether to continuously loop playlists.
     */
    setLoop(loopPlaylists: boolean): void;

    /**
     * Sets whether a playlist's videos should be shuffled.
     *
     * @param shufflePlaylist   Whether to shuffle playlist videos.
     */
    setShuffle(shufflePlaylist: boolean): void;

    /**
     * @returns A number between 0 and 1 of how much the player has buffered.
     */
    getVideoLoadedFraction(): number;

    /**
     * @returns Current player state.
     */
    getPlayerState(): PlayerState;

    /**
     * @returns Elapsed time in seconds since the video started playing.
     */
    getCurrentTime(): number;

    /**
     * @returns Actual video quality of the current video.
     */
    getPlaybackQuality(): SuggestedVideoQuality;

    /**
     * Sets the suggested video quality for the current video.
     *
     * @param suggestedQuality   Suggested video quality for the current video.
     */
    setPlaybackQuality(suggestedQuality: SuggestedVideoQuality): void;

    /**
     * @returns Quality formats in which the current video is available.
     */
    getAvailableQualityLevels(): SuggestedVideoQuality[];

    /**
     * @returns Duration in seconds of the currently playing video.
     */
    getDuration(): number;

    /**
     * @returns YouTube.com URL for the currently loaded/playing video.
     */
    getVideoUrl(): string;

    /**
     * @returns The spherical video config object, with information about the viewport
     * headings and zoom level.
     */
    getSphericalProperties(): SphericalProperties;

    /**
     * Sets the spherical video config object. The call will be No-Op for non-360
     * videos, and will change the view port according to the input for 360
     * videos.
     */
    setSphericalProperties(option: SphericalProperties): void;

    /**
     * @returns Embed code for the currently loaded/playing video.
     */
    getVideoEmbedCode(): string;

    /**
     * @returns Video IDs in the playlist as they are currently ordered.
     */
    getPlaylist(): string[];

    /**
     * @returns Index of the playlist video that is currently playing.
     */
    getPlaylistIndex(): number;

    /**
     * Adds an event listener for the specified event.
     *
     * @param eventName   Name of the event.
     * @param listener   Handler for the event.
     */
    addEventListener<TEvent extends PlayerEvent>(eventName: keyof Events, listener: (event: TEvent) => void): void;

    /**
     * Remove an event listener for the specified event.
     *
     * @param eventName   Name of the event.
     * @param listener   Handler for the event.
     */
    removeEventListener<TEvent extends PlayerEvent>(eventName: keyof Events, listener: (event: TEvent) => void): void;

    /**
     * @returns The DOM node for the embedded <iframe>.
     */
    getIframe(): HTMLIFrameElement;

    /**
     * Removes the <iframe> containing the player.
     */
    destroy(): void;
  }
}
