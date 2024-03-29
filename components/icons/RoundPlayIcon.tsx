interface RoundPlayIconProps {
  iconStyles: string;
  fill: string;
}

const RoundPlayIcon = ({ iconStyles, fill }: RoundPlayIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill={fill} className={iconStyles}><g><rect fill="none" height="32" width="32" /></g><g><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M9.5,16.5v-9l7,4.5L9.5,16.5z" /></g></svg>
  )
}

export default RoundPlayIcon;