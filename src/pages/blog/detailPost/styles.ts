import styled from "styled-components";
 
export const Title = styled.span`
  color: ${({ theme }) => theme.colors.red.amog};
  font-family: ${({ theme }) => theme.fonts.secundary};
  display: flex;
  align-self: center;
  padding-bottom: 50px;
  font-size: 50px;
  @media ${({ theme }) => theme.devices.tablet} {
    text-align: center;
    font-size: 35px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;
export const Container = styled.div`
  display: flex;
  flex: 5;
  flex-direction: column;
`;

export const ContainerPost = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 10%;
  @media ${({ theme }) => theme.devices.tablet} {
    padding-inline: 5%;
  }
`;
interface ILink {
  link: string;
}

export const ImgPost = styled.div<ILink>`
  background: rgba(0, 0, 0, 0) url(${({ link }) => link}) no-repeat scroll;
  display: flex;
  background-size: cover;
  flex-direction: column;
  background-position: center;
  padding: 50px 100px 100px 100px;
  height: 340px;
`;
export const CategoryPost = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PostTitle = styled.h1`
  color: ${({ theme }) => theme.colors.black.normal};
  font-family: ${({ theme }) => theme.fonts.secundary};
  font-weight: bolder;
  font-size: 1.4em;
  margin-top: 10px;
`;

export const PostCategoryTitle = styled.span`
  color: ${({ theme }) => theme.colors.red.amog};
  font-family: ${({ theme }) => theme.fonts.secundary};
  font-weight: bolder;
  font-size: 16px;
`;
export const SeparatorPost = styled.div`
  background-color: ${({ theme }) => theme.colors.red.amog};
  height: 5px;
  display: flex;
  width: 4%;
  margin-top: 10px;
`;
export const PostTextContainer = styled.div`
  text-align: justify;
  padding-bottom: 10px;
`;
export const PostCreditsContainer = styled.div`
  text-align: justify;
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;
`;
export const PostCreditsSpan = styled.span`
  color: ${({ theme }) => theme.colors.gray.normal};
  font-family: ${({ theme }) => theme.fonts.secundary};
  font-weight: bolder;
  font-size: 16px;
  padding-right: 10px;

  &:last-child {
    padding-left: 15px;
  }
`;
export const EditSpan = styled.span`
  color: ${({ theme }) => theme.colors.red.normal};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: bolder;
  font-size: 16px;
  padding-right: 10px;
  cursor: pointer;
`;
export const PostContainer = styled.div`
  display: flex;
  flex: 4;
  flex-direction: column;
`;
export const LastPostsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: auto;
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MainRow = styled.div`
  display: flex;
  flex: 5;
  flex-direction: row;
`;
export const Left = styled.div`
  display: flex;
  flex: 4;
  flex-direction: column;
  @media ${({ theme }) => theme.devices.tablet} {
    flex: 5;
  }
`;
export const Right = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media ${({ theme }) => theme.devices.tablet} {
    display: none;
  }
`;

export const RightCards = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
export const RightImg = styled.img`
  width: 100%;
`;
export const RightSpan = styled.span`
  color: ${({ theme }) => theme.colors.black.normal};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: bolder;
  font-size: 12px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
