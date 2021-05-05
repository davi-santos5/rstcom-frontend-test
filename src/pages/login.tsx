import React, { SyntheticEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Banner } from "../components/Banner";

import styles from "../styles/home.module.css";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: SyntheticEvent) => {
    event.preventDefault();
    router.push("/todoList");
  };

  return (
    <div className={styles.container}>
      <Banner />
      <div className={styles.wrapper}>
        <h1>Faça seu login</h1>
        <form onSubmit={handleLogin}>
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
          <button type="submit">ENTRAR</button>
        </form>
        <Link href="/">Não possuo Cadastro</Link>
      </div>
    </div>
  );
}
