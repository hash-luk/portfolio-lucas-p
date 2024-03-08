import { Heading } from "@chakra-ui/react";

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <Heading
      as={"h3"}
      fontSize={{ sm: "2xl", base: "2xl" }}
      width={"full"}
      textAlign={"center"}
    >
      <b>{"<"}</b> {title} <b>{"/>"}</b>
    </Heading>
  );
}
