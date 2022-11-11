import React, { useState } from "react";
import * as Styled from "./styles";

interface Props {
  tags: any;
  selectedTags: Function;
}
const Chips: React.FC<Props> = ({ tags, selectedTags }) => {
  //   const [tags, setTags] = useState(tags);
  // const removeTags = (indexToRemove: any) => {
  //   // setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  // };
  // const addTags = (event: any) => {
  //   console.log(event.target.value);

  //   if (event.target.value !== "") {
  //     //   setTags([...tags, event.target.value]);
  //     selectedTags([...tags, event.target.value]);
  //     event.target.value = "";
  //   }
  // };

  const [text, setText] = useState<string>();

  const removeTags = (indexToRemove: any) => {
    selectedTags(tags.filter((_: any, index: any) => index !== indexToRemove));
  };

  const addChip = () => {
    if (text) {
      selectedTags([...tags, text]);
      setText("");
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case "Enter": {
        addChip();
        break;
      }
      case "Backspace": {
        if (!text) {
          removeTags(tags.length - 1);
        }
        break;
      }
    }
  };

  return (
    <>
      <Styled.TagsInput>
        <Styled.Tags>
          {tags.map((tag: any, index: any) => (
            <Styled.Tag key={index}>
              <Styled.TagTitle>{tag}</Styled.TagTitle>
              <Styled.TagCloseIcon onClick={() => removeTags(index)}>
                x
              </Styled.TagCloseIcon>
            </Styled.Tag>
          ))}
        </Styled.Tags>
        <Styled.Input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          onKeyUp={(event) => handleKeyPress(event)}
          placeholder="Pressione 'Enter' para adicionar mais tags"
        />
      </Styled.TagsInput>
    </>
  );
};

export default Chips;
