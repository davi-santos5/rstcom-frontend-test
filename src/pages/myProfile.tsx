import React from "react";
import Image from "next/image";

import { BannerMenu } from "../components/BannerMenu";

import styles from "../styles/myProfile.module.css";

export default function MyProfile() {
  return (
    <div className={styles.container}>
      <BannerMenu />
      <div className={styles.wrapper}>
        <h1>/Dados Pessoais</h1>
        <form>
          <label htmlFor="profilePicture">
            <Image
              width={39}
              height={39}
              src="/download.png"
              objectFit="contain"
            ></Image>
            <span>alterar foto</span>
          </label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="profilePicture"
            name="profilePicture"
          />
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <input type="password" placeholder="Confirmar Senha" />
          <button type="submit">Editar</button>
        </form>
      </div>
    </div>
  );
}
