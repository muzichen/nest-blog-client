import styled from "styled-components";
import tw from "twin.macro";

interface InputProps {
    LabelPosition?: "left" | "top";
    Required?: boolean;
    LabelName?: string;
    type?: "input" | "textarea";
}

const InputContainer = styled.div<InputProps>`
    ${tw`
    flex
    flex-1
    w-full
  `}
    ${({ LabelPosition }) =>
        LabelPosition === "left" ? tw`flex-row` : tw`flex-col`}
`;

const LabelContainer = styled.label<InputProps>`
    ${tw`
    text-gray-600
    text-sm
    text-left
  `}
    ${({ LabelPosition }) => (LabelPosition === "top" ? tw`pb-6` : "")}
`;

const InputBase = tw`
  bg-transparent
  border-b
  border-black
  outline-none
  text-xs
  leading-loose
  hover:border-indigo-700
  hover:border-b-2
  focus:border-pink-600
`;

const InputInstance = styled.input<InputProps>`
    ${InputBase}
    ${({ LabelPosition }) => (LabelPosition === "left" ? tw`ml-3` : "")}
`;

const TextAreaInstance = styled.textarea<InputProps>`
    ${tw`
      resize-none
    `}
    ${InputBase}
    ${({ LabelPosition }) => (LabelPosition === "left" ? tw`ml-3` : "")}
`;

const Input = ({
    LabelPosition = "left",
    Required = false,
    LabelName = "标题",
    type = "input",
}: InputProps): JSX.Element => {
    return (
        <InputContainer LabelPosition={LabelPosition}>
            <LabelContainer
                LabelPosition={LabelPosition}
                Required
            >{`${LabelName}${Required ? "*" : ""}`}</LabelContainer>
            {type === "input" ? (
                <InputInstance LabelPosition={LabelPosition} />
            ) : (
                <TextAreaInstance LabelPosition={LabelPosition} />
            )}
        </InputContainer>
    );
};

export default Input;
