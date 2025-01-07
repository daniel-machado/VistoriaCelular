import styled from 'styled-components';

export const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  touch-action: none;
  display: block;
  background: #fff;
`;

export const Button = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 15px 20px;
  background: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

export const Timer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #000;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 16px;
`;

export const TestResult = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #000;
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;

  button {
    margin-top: 10px;
    padding: 10px 20px;
    background: #28a745;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
`;
