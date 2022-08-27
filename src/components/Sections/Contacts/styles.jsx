import styled from 'styled-components';

export const Contacts = styled.div`
.list-group-item {
    width: 100%;
    margin-bottom: 10px;
    &:hover {
        border: 1px solid #4f046f;
        transition: ease-in-out 0.2s;
        overflow: hidden;
    }
}
  .name {
    color: #4f046f;
    font-size: 1.5rem;
    font-weight: bold;
  }
  .phone {
    margin-left: 10px;
  }
  .mail {
    margin-left: 10px;
  }
  .function {
    font-weight: 100;
  }
`;

export const Wrapper = styled.section`
  width: 100%;
`;
export const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
export const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
 export const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
 export const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`;
export const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
