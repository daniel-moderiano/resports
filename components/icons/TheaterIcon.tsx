interface TheaterIconProps {
  iconStyles: string;
  fill?: string;
}

const TheaterIcon = ({ iconStyles, fill }: TheaterIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 138.7 90.93" className={iconStyles}><rect x="3.5" y="3.5" width="131.7" height="83.93" fill="none" stroke="#FFFFFF" strokeWidth="22px" /></svg>
  )
}

export default TheaterIcon;