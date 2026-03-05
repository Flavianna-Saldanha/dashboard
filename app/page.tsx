import Link from "next/link";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";


export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-10">
      <h1 className="text-2xl font-bold">Home</h1>

			<Menubar className="w-40">
      <MenubarMenu>
        <MenubarTrigger>Login</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
            	<Link href="/login">
								Ir para Login
							</Link>
            </MenubarItem>
            <MenubarItem>
             <Link href="/signup">
								Ir para Cadastro
							</Link>
            </MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Dashboard</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
              <Link href="/dashboard">
								Ir para Dashboard
							</Link>
            </MenubarItem>  
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>

      

			

      
    </div>
  );
}