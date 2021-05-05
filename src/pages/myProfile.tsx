import React, { SyntheticEvent, useEffect, useState } from "react";
import Image from "next/image";

import { BannerMenu } from "../components/BannerMenu";

import styles from "../styles/myProfile.module.css";

export default function MyProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isPasswordEqual, setIsPasswordEqual] = useState(true);

  useEffect(() => {
    setIsPasswordEqual(password === confirmPassword);
  }, [password, confirmPassword]);

  const clearInputs = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleSubmitChanges = (event: SyntheticEvent) => {
    event.preventDefault();

    if (isPasswordEqual) clearInputs();
  };

  return (
    <div className={styles.container}>
      <BannerMenu />
      <div className={styles.wrapper}>
        <h1>/Dados Pessoais</h1>
        <form onSubmit={handleSubmitChanges}>
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
          <input
            type="text"
            placeholder="Nome"
            title="Insira seu novo nome"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            title="Insira seu novo e-mail"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            title="Insira sua nova senha"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirmar Senha"
            title="Confirme sua nova senha"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
            className={isPasswordEqual ? "" : styles.passwordWrong}
          />
          {!isPasswordEqual && (
            <label htmlFor="confirmPassword">A senha não confere</label>
          )}
          <button type="submit">Editar</button>
        </form>
      </div>
    </div>
  );
}
