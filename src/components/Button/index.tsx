import tw from "twin.macro";

interface ButtonProps {
    size?: "small" | "normal" | "big";
    children?: React.ReactNode;
}

const NormalButton = tw.button`
  text-white
  px-28
  py-4
  rounded-sm
  bg-purple-800
  hover:bg-black
  transition-all
  duration-500
`;

const SmallButton = tw(NormalButton)`
  px-14
  py-2
`;

const BigButton = tw(NormalButton)`
  px-32
  py-8
`;

const Button = ({ size = "normal", children }: ButtonProps): JSX.Element => {
    return (
        <>
            {size === "normal" ? (
                <NormalButton>{children}</NormalButton>
            ) : size === "small" ? (
                <SmallButton>{children}</SmallButton>
            ) : (
                <BigButton>{children}</BigButton>
            )}
        </>
    );
};

export default Button;
