import React from "react";
import { AiOutlineMail, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { BsPhoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div
          className="  bg-primary bg-gradient text-white "
          style={{ minHeight: "12rm" }}
        >
          <div className="container  pt-4 pb-4">
            <div className="row ">
              <div className="mb-2 d-line ps-4 d-flex align-items-start col-12">
                <h5>Contacto</h5>
              </div>
            </div>

            <div className="row">
              <div className="col-4">
                <div className="mb-2 ps-4 d-flex align-items-start">
                  <strong>Phone</strong>
                </div>
              </div>

              <div className="col-4">
                <div className="mb-2 d-line ps-4 d-flex align-items-start">
                  <strong>Email</strong>
                </div>
              </div>

              <div className="col-4">
                <div className="mb-2 ps-4 d-flex align-items-start">
                  <strong>Social</strong>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-4">
                <div className="mb-2 ps-4 d-flex align-items-start">
                  <BsPhoneFill className="me-2 mt-1"></BsPhoneFill>
                  +57 3053058528
                </div>
              </div>

              <div className="col-4">
                <div className="mb-2 d-line ps-4 d-flex align-items-start">
                  <SiGmail className="me-2 mt-1"></SiGmail>
                  gusjim71@gmail.com
                </div>
              </div>

              <div className="col-4">
                <div className="mb-2 ps-4 d-flex align-items-start">
                  <AiFillGithub className="me-2 mt-1"></AiFillGithub>
                  <a href="https://github.com/tavowb" className="text-white">
                    Gustavo Jimenez
                  </a>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-4">
                <div className="mb-2 ps-4 d-flex align-items-start">
                  <BsPhoneFill className="me-2 mt-1"></BsPhoneFill>
                  +57 312 4341827
                </div>
              </div>

              <div className="col-4">
                <div className="mb-2 d-line ps-4 d-flex align-items-start">
                  <MdMail className="me-2 mt-1"></MdMail>
                  gustavojimenezdm@unimagdalena.edu.co
                </div>
              </div>

              <div className="col-4">
                <div className="mb-2 ps-4 d-flex align-items-start">
                  <AiFillInstagram className="me-2 mt-1"></AiFillInstagram>
                  <a
                    href="https://www.instagram.com/morasouya/"
                    className="text-white"
                  >
                    Gustavo Jimenez
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
