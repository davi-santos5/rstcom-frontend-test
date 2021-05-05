import React, { SyntheticEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Banner } from "../components/Banner";

import styles from "../styles/home.module.css";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordEqual, setIsPasswordEqual] = useState(true);

  useEffect(() => {
    setIsPasswordEqual(password === confirmPassword);
  }, [password, confirmPassword]);

  const handleSignIn = (event: SyntheticEvent) => {
    event.preventDefault();
    if (isPasswordEqual) router.push("/todoList");
  };

  return (
    <div className={styles.container}>
      <Banner />
      <div className={styles.wrapper}>
        <h1>Faça seu Cadastro</h1>
        <form onSubmit={handleSignIn}>
          <input
            type="text"
            placeholder="Nome"
            title="Insira seu nome"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            title="Insira seu e-mail"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            title="Insira sua senha"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirmar Senha"
            title="Confirme sua senha"
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
          <button type="submit">CADASTRAR</button>
        </form>
        <Link href="/login">Eu já possuo Cadastro</Link>
      </div>
    </div>
  );
}
