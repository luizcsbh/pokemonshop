
import React from 'react';
import { Main } from './style';
import { AiOutlineGithub,AiFillLinkedin,AiOutlineInstagram } from "react-icons/ai";

function Footer() {
  return (
    <>
      <Main>
        <div className="max-container">
            <a href="https://github.com/luizcsbh" rel="noopener noreferrer" target="_blank">
                <AiOutlineGithub /> Luiz Santos
            </a>
            <a href="https://www.linkedin.com/in/luizcsbh/" rel="noopener noreferrer" target="_blank">
                <AiFillLinkedin /> Luiz Santos
            </a>
        </div>
      </Main>
    </>
  );
}




export default Footer;


