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
   * Player height is 160px, and player dimensions are at least 284px by 160px for 16:9 aspect ratio.
   */
  export type VideoQualitySmall = "160p";

  /**
   * Player height is 360px, and player dimensions are 640px by 360px for 16:9 aspect ratio.
   */
  export type VideoQualityMedium = "360p";

  /**
   * Player height is 480px, and player dimensions are 852px by 480px for 16:9 aspect ratio. 
   */
  export type VideoQualityLarge = "480p";

  /**
   * Player height is 720px, and player dimensions are 1280px by 720px for 16:9 aspect ratio.
   */
  export type VideoQualityHD720 = "720p";

  /**
   * Player height is 1080px, and player dimensions are 1920px by 1080px for 16:9 aspect ratio.
   */
  export type VideoQualityHD1080 = "1080p";

  /**
   * Pass-through of the original source. The highest quality source, used with players larger than 1080px in height.
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
   * Statistics on the embedded video player and the current live stream or VOD 
   */
  export interface PlaybackStats {
    /**
     * The version of the Twitch video player backend.
     */
    backendVersion: string;

    /**
     * The size of the video buffer in seconds.
     */
    bufferSize: number;

    /**
     * Codecs currently in use, comma-separated (video,audio).
     */
    codecs: string;

    /**
     * 	The current size of the video player element (eg. 850x480).
     */
    displayResolution: string;

    /**
     * The video playback rate in frames per second. Not available on all browsers.
     */
    fps: number;

    /**
     * 	Current latency to the broadcaster in seconds. Only available for live content.
     */
    hlsLatencyBroadcaster: number;

    /**
     * The playback bitrate in Kbps.
     */
    playbackRate: number;

    /**
     * The number of dropped frames.
     */
    skippedFrames: number;

    /**
     * The native resolution of the current video (eg. 640x480).
     */
    videoResolution: string;
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
     * @param quality   Video quality (string) from the available values
     */
    setQuality(quality: VideoQuality): void;

    /**
     * Sets the video to be played to be played and starts playback at timestamp (in seconds).
     * @param videoId   ID of the video
     * @param timestamp   Timestamp, in seconds from the beginning of the video.
     */
    setVideo(videoId: string, timestamp: number): void;

    /**
     * Sets the player volume.
     * @param volumeLevel   A number between 0 and 1.0.
     */
    setVolume(volumeLevel: number): void;

    /**
     * @returns Volume level, a number between 0 and 1.0.
     */
    getVolume(): number;

    /**
     * If true, mutes the player; otherwise, unmutes it. This is independent of the volume setting.
     * @param muted   Desired mute state of the player
     */
    setMuted(muted: boolean): void;

    /**
     * @returns True if the player is muted; otherwise, false.
     */
    getMuted(): boolean;

    /**
     * @returns Statistics on the embedded player and current livestream or VOD.
     */
    getPlaybackStats(): PlaybackStats;

    /**
     * @returns The channel's name.
     */
    getChannel(): string;

    /**
     * @returns The duration of the video, in seconds.
     */
    getDuration(): number;

    /**
     * @returns True if the live stream or VOD has ended; otherwise, false.
     */
    getEnded(): boolean;

    /**
     * @returns The available video qualities.
     */
    getQualities(): string[];

    /**
     * @returns The current quality of video playback.
     */
    getQuality(): VideoQuality;

    /**
     * @returns The video ID. Works only for VODs, not livestreams.
     */
    getVideo(): string;

    /**
     * @returns True if the video is paused; otherwise false. Bufferring or seeking is considered playing.
     */
    isPaused(): boolean;

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
