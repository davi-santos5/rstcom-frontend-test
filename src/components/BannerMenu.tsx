import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const BannerBg = styled.div`
  height: 100vh;
  width: 20vw;
  background: url("/bg.png");
  color: var(--white);

  a {
    display: block;
    text-align: right;
    padding: 0.2rem 1rem 0;
    font-size: 1rem;
    font-style: italic;
  }

  header {
    display: flex;
    justify-content: space-evenly;
  }

  header > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  header > div > p {
    font-size: 1.25rem;
  }

  header > div > em {
    font-size: 1rem;
    font-style: italic;
  }

  .menu {
    margin-top: 15vh;
    padding: 0 1rem;
  }

  .menu > a {
    text-align: left;
    font-style: normal;
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    width: 40vw;
    height: 100vh;

    header {
      flex-direction: column;
      padding-left: 1rem;
    }

    header > div:first-child {
      margin-top: -1rem;
      margin-bottom: 1rem;
    }

    .menu > a {
      margin-bottom: 3rem;
    }
  }
`;

export const BannerMenu = () => (
  <BannerBg>
    <Link href="./login">Sair</Link>
    <header>
      <div>
        <Image
          width={60}
          height={60}
          src="/logo-rstcom-ok-.png"
          objectFit="cover"
        />
      </div>
      <div>
        <p>Seu Nome</p>
        <em>seu_email@dominio.com</em>
      </div>
    </header>
    <div className="menu">
      <Link href="/myProfile">Dados Pessoais</Link>
      <Link href="/todoList">TodoList</Link>
    </div>
  </BannerBg>
);
