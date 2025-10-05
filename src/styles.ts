import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  justify-content: center;
`
export const Price = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`

export const Button = styled.a`
  background-color: #d94f8b;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  width: 150px;
  text-decoration: none;
`

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  padding: 30px;
  text-align: center;
  max-width: 350px;
  transition: transform 0.3s;

  h2 {
    font-size: 22px;
    color: #d94f8b;
    margin-bottom: 15px;
  }

  img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 15px;
    margin-top: 15px;
  }
`

export const Logo = styled.img`
  width: 150px;
  height: 150px;
  padding: 1rem;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  gap: 1rem;
  align-items: center;
`
