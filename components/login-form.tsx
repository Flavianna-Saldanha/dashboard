import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Faça login na sua conta.</h1>
          <p className="text-sm text-balance text-muted-foreground">
						Insira seu e-mail abaixo para acessar sua conta.
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">E-mail</FieldLabel>
          <Input id="email" type="email" placeholder="email@exemplo.com" required />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Senha</FieldLabel>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Esqueceu sua senha?
            </a>
          </div>
          <Input id="password" type="password" required />
        </Field>
        <Field>
          <Button type="submit">Login</Button>
        </Field>
        <FieldSeparator>Ou continue com</FieldSeparator>
        <Field>
          <Button variant="outline" type="button" className="w-full">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 48 48"
							className="mr-2 h-4 w-4"
						>
							<path
								fill="#FFC107"
								d="M43.611 20.083h-1.611v-.083H24v8h11.303c-1.646 4.657-6.081 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 
								12-12c3.059 0 5.842 1.153 7.961 3.039l5.657-5.657C34.046 6.053 29.263 4 24 4 
								12.955 4 4 12.955 4 24s8.955 20 20 20 
								20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
							/>
							<path
								fill="#FF3D00"
								d="M6.306 14.691l6.571 4.819C14.655 16.108 18.961 13 24 13c3.059 0 
								5.842 1.153 7.961 3.039l5.657-5.657C34.046 6.053 
								29.263 4 24 4c-7.732 0-14.41 4.388-17.694 10.691z"
							/>
							<path
								fill="#4CAF50"
								d="M24 44c5.164 0 9.86-1.977 
								13.409-5.192l-6.19-5.238C29.211 35.091 
								26.715 36 24 36c-5.202 0-9.625-3.317-11.286-7.946l-6.522 
								5.025C9.435 39.556 16.227 44 24 44z"
							/>
							<path
								fill="#1976D2"
								d="M43.611 20.083H42V20H24v8h11.303a12.042 
								12.042 0 01-4.084 5.571l.003-.002 6.19 
								5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
							/>
						</svg>
							Entrar com o Google
					</Button>
          <FieldDescription className="text-center">
            Não tem uma conta?{" "}
            <Link href="/signup" className="underline underline-offset-4">
              Inscrever-se
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
