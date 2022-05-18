import styled from 'styled-components';

export const Container = styled.div`
  height: 50px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  justify-content: space-between;
  box-shadow: 0 1px 2px black;
`;

export const Avatar = styled.img`
  cursor: pointer;
  border-radius: 50%;
  height: 35px;
  width: 35px;
`;

export const Options = styled.div`
  display: flex;
  gap: 10px;

  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
    color: #999;
  }
`;
