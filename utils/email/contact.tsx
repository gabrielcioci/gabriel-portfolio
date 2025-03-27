import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import { ContactEmailProps } from "./types";

export const ContactEmail = ({ name, message, email }: ContactEmailProps) => {
  const previewText = `Read ${name}'s message`;

  return (
    <Html>
      <Tailwind>
        <Head />
        <Body className="bg-white font-sans">
          <Preview>{previewText}</Preview>
          <Container className="mx-auto p-5 w-[580px] max-w-full">
            <Section className="pb-5">
              <Row>
                <Text className="text-2xl font-bold leading-[1.3] text-[#484848]">
                  Here&apos;s what {name} wrote
                </Text>
                <Text className="p-6 bg-[#f2f3f3] rounded text-lg leading-[1.4] text-[#484848]">
                  {message}
                </Text>
                <Text className="text-lg leading-[1.4] text-[#484848] pb-4">
                  {name}&apos;s email: {email}
                </Text>
              </Row>
            </Section>

            <Hr className="border-[#cccccc] my-5" />

            <Section>
              <Row>
                <Text className="text-sm text-[#9ca299] mb-2">
                  via Resend - Gabriel Cioci Portfolio
                </Text>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactEmail;
