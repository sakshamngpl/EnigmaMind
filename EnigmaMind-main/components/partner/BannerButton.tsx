
type Props = {
  children: React.ReactNode,
};

const BannerButton = (props: Props) => {
  return (
    <button className="mx-auto mt-10 px-4 py-2 rounded-full sm:text-base text-sm text-white bg-button-color hover:bg-button-hover-color">
      {props.children}
    </button>
  )
}

export default BannerButton;