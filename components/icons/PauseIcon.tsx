interface PauseIconProps {
  iconStyles: string;
  fill: string;
  testId?: string;
}

const PauseIcon = ({ iconStyles, fill, testId }: PauseIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={fill} className={iconStyles} data-testid={testId}><path d="M0 0h24v24H0z" fill="none" /><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
  )
}

export default PauseIcon;