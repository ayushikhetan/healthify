import styled from "styled-components";

export const Wrapper = styled.div`
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 8px;
  width: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledLogo = styled.img`
  width: 160px;
  margin: 0 auto;
`;

export const StyledTitle = styled.p`
  font-size: 24px;
  margin-bottom: 0;
  text-align: center;
`;

export const StyledSubTitle = styled.p`
  font-size: 18px;
  font-weight: 100;
  text-align: center;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledInput = styled.input`
  height: 36px;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  padding-left: 10px;
  margin-top: 20px;
  font-size: 14px;
`;

export const StyledButton = styled.button`
  height: 36px;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  margin-top: 30px;
  font-size: 14px;
  background: #e82b29;
  cursor: pointer;
  font-weight: bold;
  color: white;
  border-color: #e82b29;
  cursor: pointer;
  outline: none;
`;

export const StyledErrorMsg = styled.span`
  color: #f44336;
  font-size: 12px;
  margin-top: 5px;
  line-height: 16px;
  letter-spacing: 0.2px;
`;
