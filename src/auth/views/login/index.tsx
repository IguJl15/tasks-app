import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"

interface LoginPagePros {
  next?: string
}

export function LoginPage({ next = '/' }: LoginPagePros) {
  const navigate = useNavigate()

  const usernameInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)

  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const username = usernameInputRef.current!.value
    const password = passwordInputRef.current!.value

    if (username !== 'IguJl' || password !== '123456') {
      return alert('Usuário e/ou senha incorretos!')
    }

    navigate(next)
  }

  return (
    <main>
      <h1>Login Page</h1>
      <form onSubmit={handleLoginSubmit}>
        <input type="text" placeholder="username" ref={usernameInputRef} />
        <input type="password" placeholder="senha" ref={passwordInputRef} />
        <input type="submit" value="Entrar..." />
      </form>
    </main>
  )
}