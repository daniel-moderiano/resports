interface PlayIconProps {
  iconStyles: string;
  fill: string;
  testId?: string;
}

const PlayIcon = ({ iconStyles, fill, testId }: PlayIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={fill} className={iconStyles} data-testid={testId}><path d="M0 0h24v24H0z" fill="none" /><path d="M8 5v14l11-7z" /></svg>
  )
}

export default PlayIcon;