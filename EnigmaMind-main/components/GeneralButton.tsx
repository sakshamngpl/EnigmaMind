
type Props = {
  children: React.ReactNode,
  twColor?: string,
  disabled?: boolean,
};



const GeneralButton = (props: Props) => {

  let bgColor = 'bg-button-color';
  let hoverBgColor = 'hover:bg-button-hover-color';

  if (props.twColor) {
    bgColor = props.twColor;
    hoverBgColor = 'hover:bg-opacity-75';
  }

  return (
    <button className={`mx-auto px-4 py-2 rounded-full sm:text-base text-sm text-white ${bgColor} ${hoverBgColor} ${props.disabled ? ' opacity-50 cursor-not-allowedx ' : ''}`} disabled={props.disabled}>
      {props.children}
    </button>
  )
}

export default GeneralButton;