import  styled from 'styled-components'


export const Container = styled.div`

  width: 100%;
  height: 100%;
  padding: 0px 8%;
  margin-top: -100px;
  margin-bottom: 50px;


h1 {
  text-align: center;
  padding-top: 10%;
  margin-bottom: 60px;
  font-weight: 600;
  position: relative;
}

 h1::after {
  content: '';
  background: #4f046f;
  width: 100px;
  height: 5px;
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
}

.row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;
}

.service {
  text-align: center;
  padding: 25px 10px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  background: transparent;
  transition: transform 0.5s, background 0.5s;
}

.service i {
  font-size: 40px;
  margin-bottom: 10px;
  color: #4f046f;
  
}

.service h2 {
  font-weight: 600;
  margin-bottom: 8px;
}

.service:hover {
  background: #4f046f;
  color: #fff;
  transform: scale(1.05);
}

.service:hover i {
  color: #fff;
}

`;