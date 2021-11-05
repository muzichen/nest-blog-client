import styled from "styled-components";
import tw from "twin.macro";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Marginer from "../Marginer";

interface FormItemProps {
    align?: "start" | "center" | "end";
}

const ContactContainer = tw.div`
  w-full
`;

const ContactWrapper = tw.div`
  w-full
  border-t
  border-black
  pt-16
  pb-12
  text-center
  flex
  flex-col
`;

const ContactTitle = tw.h1`
  font-bold
  text-4xl
  pb-16
`;

const ContactForm = tw.form`
  w-3/5
`;

const ContactFormItem = styled.div<FormItemProps>`
    ${tw`
    flex
    flex-row
    pb-6
    space-x-6
  `}
    ${({ align }) => {
        if (!align) return tw`justify-start`;
        return align === "center" ? tw`justify-center` : tw`justify-end`;
    }}
`;

const Contact = (): JSX.Element => {
    return (
        <ContactContainer>
            <Marginer direction="vertical" margin={100} />
            <ContactWrapper>
                <ContactTitle>Contact Me</ContactTitle>
                <ContactForm>
                    <ContactFormItem>
                        <Input LabelPosition="top" LabelName="First Name" />
                        <Input LabelPosition="top" LabelName="Last Name" />
                    </ContactFormItem>
                    <ContactFormItem>
                        <Input LabelPosition="top" LabelName="Email" Required />
                    </ContactFormItem>
                    <ContactFormItem>
                        <Input
                            LabelPosition="top"
                            LabelName="Message"
                            type="textarea"
                            Required
                        />
                    </ContactFormItem>
                    <ContactFormItem align="center" className="pt-12">
                        <Button>提交</Button>
                    </ContactFormItem>
                </ContactForm>
            </ContactWrapper>
        </ContactContainer>
    );
};

export default Contact;
